import { Navbar, Footer } from './components/layout';
import { Hero, About, Skills, Experience, Projects, Contact } from './components/sections';
import { usePortfolioData } from './hooks/usePortfolioData';
import { motion } from 'framer-motion';

/**
 * Loading Skeleton Component
 */
const LoadingSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark-900">
    <div className="text-center">
      <motion.div
        className="w-16 h-16 border-4 border-primary-400/30 border-t-primary-400 rounded-full mx-auto mb-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <p className="text-dark-400 text-lg">Loading portfolio...</p>
    </div>
  </div>
);

/**
 * Error Component
 */
const ErrorDisplay = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-dark-900 px-6">
    <div className="text-center max-w-md">
      <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-4xl">⚠️</span>
      </div>
      <h1 className="text-2xl font-bold text-dark-100 mb-4">Unable to Load Portfolio</h1>
      <p className="text-dark-400 mb-6">
        {error || 'There was an error loading the portfolio data. Please check the info.md file.'}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-primary-500 text-dark-900 font-semibold rounded-xl hover:bg-primary-400 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

/**
 * Main App Component
 */
function App() {
  const { data, loading, error } = usePortfolioData();

  // Show loading state
  if (loading) {
    return <LoadingSkeleton />;
  }

  // Show error state
  if (error || !data) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <div className="min-h-screen bg-dark-900 text-dark-100">
      {/* Navigation */}
      <Navbar personal={data.personal} />

      {/* Main Content */}
      <main className="lg:ml-72">
        {/* Hero Section */}
        <Hero
          hero={data.hero}
          personal={data.personal}
          socials={data.socials}
        />

        {/* About Section */}
        <About
          about={data.about}
          personal={data.personal}
        />

        {/* Skills Section */}
        <Skills skills={data.skills} />

        {/* Experience Section */}
        <Experience experience={data.experience} />

        {/* Projects Section */}
        <Projects projects={data.projects} />

        {/* Contact Section */}
        <Contact
          personal={data.personal}
          socials={data.socials}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={data.personal}
        socials={data.socials}
      />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SectionTitle, Button } from '../ui';

/**
 * Contact Section - Contact form and information
 */
const Contact = ({ personal, socials }) => {
    const [formState, setFormState] = useState({
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState(null); // 'success', 'error', or null
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Using FormSubmit.co for handling form submissions
            const response = await fetch(`https://formsubmit.co/ajax/${personal?.email || 'your@email.com'}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: formState.email,
                    subject: formState.subject,
                    message: formState.message,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormState({ email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: personal?.email,
            href: personal?.email ? `mailto:${personal.email}` : null,
        },
        {
            icon: Phone,
            label: 'Phone',
            value: personal?.phone,
            href: personal?.phone ? `tel:${personal.phone.replace(/\s/g, '')}` : null,
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            href: socials?.linkedin,
            external: true,
        },
    ].filter(item => item.value);

    return (
        <section
            id="contact"
            className="py-24 lg:py-32 relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto px-6 lg:ml-80 relative">
                <SectionTitle
                    subtitle="Let's work together on your next project"
                    align="center"
                >
                    Get In Touch
                </SectionTitle>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-dark-400 text-lg leading-relaxed">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        target={item.external ? '_blank' : undefined}
                                        rel={item.external ? 'noopener noreferrer' : undefined}
                                        className="
                      flex items-center gap-4 p-4 rounded-xl
                      bg-dark-800/50 border border-dark-700/50
                      hover:border-primary-400/30 hover:bg-dark-700/50
                      transition-all duration-300 group
                    "
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="
                      p-3 rounded-xl bg-primary-500/10 text-primary-400
                      group-hover:bg-primary-500 group-hover:text-dark-900
                      transition-all duration-300
                    ">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-dark-500">{item.label}</p>
                                            <p className="text-dark-200 font-medium">{item.value}</p>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="
                    w-full px-4 py-3 rounded-xl
                    bg-dark-800/50 border border-dark-700/50
                    text-dark-100 placeholder-dark-500
                    focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50
                    transition-all duration-300
                  "
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="
                    w-full px-4 py-3 rounded-xl
                    bg-dark-800/50 border border-dark-700/50
                    text-dark-100 placeholder-dark-500
                    focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50
                    transition-all duration-300
                  "
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="
                    w-full px-4 py-3 rounded-xl resize-none
                    bg-dark-800/50 border border-dark-700/50
                    text-dark-100 placeholder-dark-500
                    focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50
                    transition-all duration-300
                  "
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full"
                                disabled={isSubmitting}
                                icon={isSubmitting ? null : <Send size={18} />}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <motion.div
                                    className="flex items-center gap-2 p-4 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <CheckCircle size={20} />
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <AlertCircle size={20} />
                                    <span>Something went wrong. Please try again or email me directly.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

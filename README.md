# Saurabh Magdum — Portfolio Website

Personal portfolio of **Saurabh Magdum**, AI Researcher & ML Engineer. Live at [saurabhvmagdum.github.io](https://saurabhvmagdum.github.io).

---

## About

This is my personal portfolio showcasing my research, projects, and professional experience in:

- **Federated Learning & Privacy-Preserving AI**
- **Quantum Computing** (QAOA, QUBO optimization)
- **Blockchain & Decentralized Systems**
- **Large Language Models & RAG Systems**
- **Computer Vision & Deep Learning**

I am currently an **Assistant Professor at PCCOE** and hold an M.Tech. (CGPA: 8.88) in Computer Engineering. I am a published IEEE researcher (ICBDS 2025).

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS 3 |
| **Animations** | GSAP + ScrollTrigger, Lenis smooth scroll |
| **Components** | Radix UI (Accordion), Swiper (Carousel), Lucide React (Icons) |
| **Deployment** | GitHub Pages via GitHub Actions |

---

## Features

- Full-screen parallax hero with cinematic scroll animations
- Masonry image grid with per-image directional clip-path reveals and Ken Burns zoom
- Alternating dark/light section layout with smooth scroll-driven transitions
- Featured projects section with parallax images and viewfinder overlays
- Experience section with auto-playing Swiper carousel
- Animated stat counters and FAQ accordion
- Fully responsive across all device sizes

---

## Local Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

---

## Content Configuration

All portfolio content is managed through a single file: [`src/config.ts`](./src/config.ts)

Each section has a typed config object:

| Config Object | Section |
|--------------|---------|
| `siteConfig` | Page title, meta description, language |
| `heroConfig` | Background text, hero image, overlay text, nav links |
| `introGridConfig` | About title, description, portfolio images |
| `featuredProjectsConfig` | Projects with descriptions and categories |
| `servicesConfig` | Technical expertise areas |
| `whyChooseMeConfig` | Stats, feature cards, wide image |
| `testimonialsConfig` | Work experience entries |
| `faqConfig` | FAQ items, CTA |
| `footerConfig` | Contact info, social links, copyright |

---

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push to `master` branch
2. GitHub Actions builds the site (`npm run build`)
3. The `dist/` output is deployed to GitHub Pages

---

## Contact

- **Email**: saurabhvmagdum@gmail.com
- **LinkedIn**: [linkedin.com/in/saurabh-magdum-940223221](https://www.linkedin.com/in/saurabh-magdum-940223221)
- **GitHub**: [github.com/saurabhvmagdum](https://github.com/saurabhvmagdum)

---

© 2025 Saurabh Magdum. All rights reserved.

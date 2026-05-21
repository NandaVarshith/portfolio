import { motion } from 'framer-motion'
import ProjectCard from './projects/ProjectCard'
import SectionHeader from './SectionHeader'

const FEATURED_PROJECTS = [
  {
    title: 'CineTrack',
    tagline: 'AI movie watchlist and recommendation system',
    description:
      'A full stack movie platform that combines secure user workflows with AI-assisted recommendations and polished responsive UX.',
    features: [
      'AI-powered movie recommendations using LLaMA-3 through Groq integration.',
      'Personalized watchlists with search, filtering, and progress management.',
      'Secure JWT-based authentication and session-protected user data.',
      'Production-oriented React (Vite) + Spring Boot + MongoDB architecture.',
    ],
    tech: ['React (Vite)', 'Spring Boot', 'MongoDB', 'JWT Authentication', 'LLaMA-3 (Groq)'],
    visualKey: 'cinetrack',
    githubUrl: 'https://github.com/inandavarshith',
    liveUrl: 'https://example.com',
  },
  {
    title: 'UrbanPulse',
    tagline: 'Smart civic issue management platform',
    description:
      'A civic-tech web platform designed for transparent issue tracking, governance workflows, and role-based operational visibility.',
    features: [
      'Geo-tagged issue reporting with location-aware incident records.',
      'Role-based dashboards for citizens, operators, and administrators.',
      'Notification and workflow updates across the issue lifecycle.',
      'Analytics modules for trend tracking and performance reporting.',
    ],
    tech: ['MERN Stack', 'JWT Authentication', 'REST APIs', 'Analytics System'],
    visualKey: 'urbanpulse',
    githubUrl: 'https://github.com/inandavarshith',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Plant Species Classifier',
    tagline: 'Deep learning based plant classification system',
    description:
      'A machine learning application that predicts plant species from images with optimized preprocessing and confidence-aware output.',
    features: [
      'Achieved 97% validation accuracy using transfer learning strategy.',
      'EfficientNetB3 model pipeline with image augmentation workflow.',
      'Flask API integration for real-time prediction endpoints.',
      'Top-3 class confidence scoring for transparent predictions.',
    ],
    tech: ['TensorFlow', 'EfficientNetB3', 'Flask API', 'CNN'],
    visualKey: 'plants',
    githubUrl: 'https://github.com/inandavarshith',
    liveUrl: 'https://example.com',
  },
]

const SECONDARY_PROJECTS = [
  {
    label: 'Secondary Project',
    title: 'Full-Stack E-Commerce Platform',
    description: 'Designed product flows, authentication, and checkout-ready architecture for scalable commerce journeys.',
    tech: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/inandavarshith',
    liveUrl: 'https://example.com',
  },
  {
    label: 'Secondary Project',
    title: 'AgriConnect',
    description: 'Built a digital platform connecting stakeholders with streamlined information sharing and service access.',
    tech: ['React', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/inandavarshith',
    liveUrl: 'https://example.com',
  },
  {
    label: 'Secondary Project',
    title: 'Garbage Management System',
    description: 'Implemented issue reporting, lifecycle tracking, and resolution visibility for cleaner civic operations.',
    tech: ['MERN Stack', 'JWT', 'REST APIs'],
    githubUrl: 'https://github.com/inandavarshith',
    liveUrl: 'https://example.com',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Projects"
        title="Featured projects with strong full stack engineering outcomes."
        description="Recruiter-focused highlights across product architecture, practical problem solving, and real-world functionality."
      />

      <motion.div
        className="mt-12 grid gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} variant="featured" />
        ))}
      </motion.div>

      <div className="mt-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">Secondary Projects</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            Additional builds across web and problem-focused platforms.
          </h3>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SECONDARY_PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

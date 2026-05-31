import { motion } from 'framer-motion'
import ProjectCard from './projects/ProjectCard'
import SectionHeader from './SectionHeader'

const FEATURED_PROJECTS = [
  {
    title: 'CineTrack',
    tagline: 'AI movie watchlist system',
    description:
      'An AI-powered platform that helps users discover, organize, and manage movies with personalized recommendations and a smooth full-stack experience.',
    problem:
      'Movie enthusiasts often struggle to organize watchlists and discover personalized recommendations in one place.',
    approach:
      'Built a full-stack application integrating LLaMA-3 to generate intelligent recommendations and insights while providing personalized watchlist management.',
    result:
      'Delivered an AI-powered movie management platform demonstrating full-stack architecture, LLM integration, and a more personalized user experience.',
    features: [
      'AI-powered movie recommendations with LLaMA-3 and Groq API integration.',
      'Personalized watchlists for saving and tracking movies.',
      'LLM-driven movie insights for a smarter discovery flow.',
    ],
    tech: ['React.js', 'Spring Boot', 'MongoDB', 'LLaMA-3', 'Groq API'],
    visualKey: 'cinetrack',
    githubUrl: null,
    liveUrl: 'https://cine-track-alpha.vercel.app/',
  },
  {
    title: 'UrbanPulse',
    tagline: 'Civic issue management platform',
    description:
      'A civic-tech platform that lets citizens report issues and helps authorities manage, track, and resolve them through structured workflows.',
    problem:
      'Citizens need a clearer way to report civic issues and authorities need a structured workflow to track resolution.',
    approach:
      'Built role-based dashboards with JWT authentication, issue lifecycle management, and analytics features to organize the end-to-end process.',
    result:
      'Delivered a civic-tech platform focused on operational clarity, reporting visibility, and structured issue handling.',
    features: [
      'Role-based access control for citizens and authorities.',
      'Complaint lifecycle tracking from submission to resolution.',
      'Analytics dashboard for issue trends and reporting.',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    visualKey: 'urbanpulse',
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Plant Species Classifier',
    tagline: 'Deep learning image classification app',
    description:
      'A deep learning application that identifies plant species from leaf images with optimized preprocessing, model training, and API deployment.',
    problem:
      'Leaf-based plant classification benefits from a model that can generalize well while staying easy to deploy and test.',
    approach:
      'Handled preprocessing, model training, evaluation, and optimization using EfficientNetB3, then deployed the inference flow through Flask.',
    result:
      'Achieved approximately 97% validation accuracy using EfficientNetB3 and delivered a Flask-based prediction API.',
    features: [
      'Preprocessing, training, and evaluation pipeline for plant images.',
      'Flask-based prediction API for deployment.',
      'Built for transparent and practical model inference.',
    ],
    tech: ['Python', 'TensorFlow', 'EfficientNetB3', 'Flask'],
    visualKey: 'plants',
    githubUrl: null,
    liveUrl: null,
  },
]

const LIVE_PROJECTS = [
  {
    label: 'Live project',
    title: 'Landmine Soft Website Revamp',
    description:
      'Assignment-based frontend redesign focused on responsive UI/UX, clearer hierarchy, and a more modern presentation.',
    tech: ['React.js', 'UI/UX', 'Responsive Design'],
    githubUrl: null,
    liveUrl: 'https://landminesoft-4ev1.vercel.app/',
  },
  {
    label: 'Live project',
    title: 'E-Commerce Platform',
    description:
      'A live e-commerce build focused on product presentation and a clean shopping flow.',
    tech: ['React.js', 'Frontend Development', 'Responsive UI'],
    githubUrl: null,
    liveUrl: 'https://ecommerce-a7tp.vercel.app/',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-24 md:py-28">
      <SectionHeader
        kicker="Projects"
        title="Case-study projects that show practical engineering, AI integration, and real product thinking."
        description="Each project is framed around the problem, approach, stack, and result so the work reads like a product story."
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
          <p className="section-kicker">Live work</p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            Additional live builds and product-facing work.
          </h3>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {LIVE_PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

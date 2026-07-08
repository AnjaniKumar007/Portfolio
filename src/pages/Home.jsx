import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, Twitter, Instagram, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import personal from '../data/personal.json'
import TypingEffect from '../components/TypingEffect'
import StatCard from '../components/StatCard'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import BlogCard from '../components/BlogCard'
import projects from '../data/projects.json'
import testimonials from '../data/testimonials.json'
import blog from '../data/blog.json'

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const latestPosts = blog.slice(0, 3)

  const socialIcons = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Mail,
  }

  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-accent font-medium mb-3"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold font-poppins mb-4"
              >
                <span className="gradient-text">{personal.name}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl font-semibold mb-6 h-10"
              >
                <TypingEffect roles={personal.typingRoles} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
              >
                {personal.tagline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-xl gradient-btn text-white font-medium"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-white/10"
                >
                  <Mail size={18} />
                  Hire Me
                </Link>
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-white/10"
                >
                  View Projects
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex gap-4 justify-center md:justify-start"
              >
                {Object.entries(personal.social).map(([key, url]) => {
                  const Icon = socialIcons[key]
                  if (!Icon) return null
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-40 animate-pulse" />
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass float">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-sm font-medium"
                >
                  👋 Available for hire
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {personal.stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of my recent work"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-white/10"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="What People Say"
            subtitle="Feedback from clients and collaborators"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* LATEST BLOG */}
      <section className="px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Latest from Blog"
            subtitle="Thoughts, tutorials, and insights"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-white/10"
            >
              Read More Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Have a project in mind? Let's collaborate and bring your ideas to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-btn text-white font-medium"
              >
                <Mail size={18} />
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

import { motion } from 'framer-motion'
import { Download, MapPin, Mail, Phone, Award, Globe, Heart } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import personal from '../data/personal.json'
import about from '../data/about.json'

const About = () => {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-20">
        {/* INTRO */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-30" />
              <div className="relative glass rounded-3xl overflow-hidden">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium mb-2">About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              <span className="gradient-text">{personal.name}</span>
            </h1>
            <h2 className="text-xl text-gray-300 mb-4">{personal.title}</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">{personal.bio}</p>

            {/* Quick Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-accent" />
                <span className="text-gray-300">{personal.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-accent" />
                <a href={`mailto:${personal.email}`} className="text-gray-300 hover:text-accent">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-accent" />
                <a href={`tel:${personal.phone}`} className="text-gray-300 hover:text-accent">
                  {personal.phone}
                </a>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-btn text-white font-medium"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </section>

        {/* EDUCATION TIMELINE */}
        <section>
          <SectionHeading
            title="Education"
            subtitle="My academic journey"
          />
          <Timeline items={about.education} type="education" />
        </section>

        {/* ACHIEVEMENTS */}
        <section>
          <SectionHeading
            title="Achievements"
            subtitle="Milestones and recognitions"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Award size={22} className="text-white" />
                </div>
                <h3 className="font-bold font-poppins mb-2">{ach.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{ach.description}</p>
                <span className="text-xs text-accent">{ach.date}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LANGUAGES & INTERESTS */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe size={24} className="text-accent" />
              <h3 className="text-2xl font-bold font-poppins">Languages</h3>
            </div>
            <div className="space-y-4">
              {about.languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-accent">{lang.proficiency}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart size={24} className="text-accent" />
              <h3 className="text-2xl font-bold font-poppins">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full glass text-sm hover:bg-accent/20 hover:text-accent transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default About

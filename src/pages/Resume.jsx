import { motion } from 'framer-motion'
import { Download, Printer, Mail, Phone, MapPin, Globe } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import personal from '../data/personal.json'
import about from '../data/about.json'
import skills from '../data/skills.json'
import experience from '../data/experience.json'
import certifications from '../data/certifications.json'

const Resume = () => {
  const handlePrint = () => window.print()

  const allSkills = skills.flatMap((cat) => cat.skills).slice(0, 12)

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Resume"
          subtitle="Download or print my professional resume"
        />

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 no-print">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl gradient-btn text-white font-medium"
          >
            <Download size={18} />
            Download PDF
          </a>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-white/10"
          >
            <Printer size={18} />
            Print Resume
          </button>
        </div>

        {/* RESUME PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 print:bg-white print:text-black"
        >
          {/* HEADER */}
          <div className="border-b border-white/10 pb-6 mb-6 print:border-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-2">
              {personal.name}
            </h1>
            <p className="text-lg text-gray-300 mb-4 print:text-gray-700">{personal.title}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
              <span className="flex items-center gap-1">
                <Mail size={14} /> {personal.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone size={14} /> {personal.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {personal.location}
              </span>
              <span className="flex items-center gap-1">
                <Globe size={14} /> {personal.website || 'portfolio.com'}
              </span>
            </div>
          </div>

          {/* SUMMARY */}
          <section className="mb-6">
            <h2 className="text-xl font-bold font-poppins text-accent mb-3 uppercase tracking-wider">
              Professional Summary
            </h2>
            <p className="text-gray-300 leading-relaxed print:text-gray-700">
              {personal.bio}
            </p>
          </section>

          {/* EDUCATION */}
          <section className="mb-6">
            <h2 className="text-xl font-bold font-poppins text-accent mb-3 uppercase tracking-wider">
              Education
            </h2>
            <div className="space-y-3">
              {about.education.map((edu, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-gray-400 print:text-gray-600">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-accent">{edu.duration}</span>
                  </div>
                  {edu.score && (
                    <p className="text-xs text-gray-500 mt-1">Score: {edu.score}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="mb-6">
            <h2 className="text-xl font-bold font-poppins text-accent mb-3 uppercase tracking-wider">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 text-sm rounded-md bg-white/5 text-gray-300 print:bg-gray-100 print:text-gray-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-6">
            <h2 className="text-xl font-bold font-poppins text-accent mb-3 uppercase tracking-wider">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.slice(0, 4).map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="font-semibold">{exp.role || exp.title}</h3>
                      <p className="text-sm text-accent">{exp.company || exp.organization}</p>
                    </div>
                    <span className="text-sm text-gray-400 print:text-gray-600">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1 print:text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-6">
            <h2 className="text-xl font-bold font-poppins text-accent mb-3 uppercase tracking-wider">
              Key Projects
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">AI Chat Assistant</h3>
                <p className="text-sm text-gray-300 print:text-gray-700">
                  Built an AI-powered chatbot using React and OpenAI API with natural language
                  processing capabilities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">E-Commerce Platform</h3>
                <p className="text-sm text-gray-300 print:text-gray-700">
                  Full-stack e-commerce app with payment integration, user authentication, and
                  admin dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section>
            <h2 className="text-xl font-bold font-poppins text-accent mb-3 uppercase tracking-wider">
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.slice(0, 4).map((cert, i) => (
                <div key={i} className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="font-semibold text-sm">{cert.title}</h3>
                    <p className="text-xs text-gray-400 print:text-gray-600">{cert.organization}</p>
                  </div>
                  <span className="text-xs text-accent">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume

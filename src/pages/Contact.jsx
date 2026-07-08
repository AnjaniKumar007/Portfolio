import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import personal from '../data/personal.json'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
}

const Contact = () => {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message!"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold font-poppins mb-4 gradient-text">
                Contact Information
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Feel free to reach out via any of these channels. I usually respond within 24 hours.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="font-medium group-hover:text-accent transition-colors">
                      {personal.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="font-medium group-hover:text-accent transition-colors">
                      {personal.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold font-poppins mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(personal.social || {}).map(([key, url]) => {
                  const Icon = socialIcons[key]
                  if (!Icon || !url) return null
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* MAP */}
            <div className="glass rounded-2xl overflow-hidden h-56">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTga59zu8&query=${encodeURIComponent(personal.location)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

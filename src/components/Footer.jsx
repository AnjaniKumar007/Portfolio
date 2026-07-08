import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react'
import { navLinks } from '../data/navigation'
import personal from '../data/personal.json'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialIcons = [
    { Icon: Github, url: personal.social.github, label: 'GitHub' },
    { Icon: Linkedin, url: personal.social.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, url: personal.social.twitter, label: 'Twitter' },
    { Icon: Instagram, url: personal.social.instagram, label: 'Instagram' },
    { Icon: Mail, url: `mailto:${personal.social.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative glass mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center font-bold text-white text-xl">
                P
              </div>
              <span className="text-xl font-bold font-poppins gradient-text">
                Portfolio
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A passionate developer building modern web experiences. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.slice(0, 8).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-3 mb-4">
              {socialIcons.map(({ Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon size={18} className="text-gray-300" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              <Mail size={14} className="inline mr-2" />
              {personal.social.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {personal.personal.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

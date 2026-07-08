import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // EmailJS integration placeholder
    // To enable: import emailjs from '@emailjs/browser'
    // and replace this with actual EmailJS send call
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1200))

      // Example EmailJS integration:
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     phone: formData.phone,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // )

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      })
    } finally {
      setLoading(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }

  const fields = [
    { name: 'name', label: 'Your Name', type: 'text', required: true, col: 1 },
    { name: 'email', label: 'Email Address', type: 'email', required: true, col: 1 },
    { name: 'phone', label: 'Phone (optional)', type: 'tel', required: false, col: 1 },
    { name: 'subject', label: 'Subject', type: 'text', required: true, col: 2 },
  ]

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.col === 2 ? 'md:col-span-2' : ''}
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-500"
              placeholder={`Enter ${field.label.toLowerCase()}`}
            />
          </div>
        ))}

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-gray-300"
          >
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
            placeholder="Write your message here..."
          />
        </div>
      </div>

      {/* Status Message */}
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
            status.type === 'success'
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}
        >
          {status.type === 'success' ? (
            <CheckCircle size={16} />
          ) : (
            <AlertCircle size={16} />
          )}
          {status.message}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-btn text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  )
}

export default ContactForm

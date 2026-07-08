import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="loader"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="loader-spinner" />
        <p className="text-accent font-poppins text-sm tracking-widest animate-pulse">
          LOADING...
        </p>
      </div>
    </motion.div>
  )
}

export default Loader

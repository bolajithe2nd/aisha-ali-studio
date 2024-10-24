import { motion } from "framer-motion";

const FadeInText = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 }, // Initial state
    visible: { opacity: 1 }, // Final state
  };

  return (
    <motion.p
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 2 }} // Duration of the fade-in effect
      className="text-xl text-black"
    >
      hi
    </motion.p>
  );
};

export default FadeInText;

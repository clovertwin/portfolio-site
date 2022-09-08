import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}

const divVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, type: "spring" },
  },
  hidden: { opacity: 0, scale: 0 },
};

const AnimateInView = ({ children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={divVariants}
      animate={controls}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  classes?: string;
}

const divVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const AnimateInView = ({ children, classes }: Props) => {
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
      className={classes}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;

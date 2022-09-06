import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  classes?: string;
}

const divVariants = {
  visible: {
    opacity: 1,
    y: "0px",
    transition: { duration: 0.5, type: "spring" },
  },
  hidden: { opacity: 0, y: "20px" },
};

const AnimateInView = ({ children, classes }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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

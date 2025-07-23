import { NavLink, useLocation } from "react-router";
import { motion } from "motion/react";

type MotionNavLinkProps = {
  linkName: string;
  linkTo: string;
};

function MotionNavLink({ linkName, linkTo }: MotionNavLinkProps) {
  const location = useLocation();
  const navStyle = "text-base md:text-xl lg:text-2xl p-1";

  const linkVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  //VARIANTS are basically a way to split out the states/effects of the motion component
  // you can still put it in the actual motion.whatever if you wanted to, just remember
  //that its a visual difference, not functional
  const dotVariants = {
    rest: (pos: { x: number; y: number }) => ({
      x: pos.x,
      y: pos.y,
      opacity: 0,
      scale: 0.5,
    }),
    hover: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={`${location.pathname === linkTo ? "active" : ""}`}
      variants={linkVariants}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <NavLink to={linkTo} className={`${navStyle}`}>
        {linkName}
      </NavLink>
      <motion.span
        custom={{ x: -10, y: -10 }}
        variants={dotVariants}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="dot dot-top-left"
      />
      <motion.span
        custom={{ x: 10, y: -10 }}
        variants={dotVariants}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="dot dot-top-right"
      />
      <motion.span
        custom={{ x: -10, y: 10 }}
        variants={dotVariants}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="dot dot-bottom-left"
      />
      <motion.span
        custom={{ x: 10, y: 10 }}
        variants={dotVariants}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="dot dot-bottom-right"
      />
    </motion.div>
  );
}

export default MotionNavLink;

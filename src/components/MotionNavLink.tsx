import { NavLink } from "react-router";
import { motion } from "motion/react";

type MotionNavLinkProps = {
  linkName: string;
  linkTo: string;
};

function MotionNavLink({ linkName, linkTo }: MotionNavLinkProps) {
  const navStyle = "text-base md:text-xl lg:text-2xl px-2 mb-4";
  const AnimatedLink = motion(NavLink);

  return (
      <AnimatedLink
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        to={linkTo}
        className={navStyle}
      >
        {linkName}
        <motion.span
          variants={{
            rest: { x: -10, y: -10, opacity: 0, scale: 0.5 },
            hover: { x: 0, y: 0, opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="dot dot-top-left"
        ></motion.span>
        <motion.span
          variants={{
            rest: { x: 10, y: -10, opacity: 0, scale: 0.5 },
            hover: { x: 0, y: 0, opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="dot dot-top-right"
        />
        <motion.span
          variants={{
            rest: { x: -10, y: 10, opacity: 0, scale: 0.5 },
            hover: { x: 0, y: 0, opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="dot dot-bottom-left"
        />
        <motion.span
          variants={{
            rest: { x: 10, y: 10, opacity: 0, scale: 0.5 },
            hover: { x: 0, y: 0, opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="dot dot-bottom-right"
        />
      </AnimatedLink>
  );
}

export default MotionNavLink;

import { motion } from "motion/react";
import MotionNavLink from "./MotionNavLink";

function Navigation() {
  return (
    <motion.nav className="navbar flex justify-around p-3 bg-dark-blue text-burnt-orange">
      <MotionNavLink linkName="Home" linkTo="/" />
      <MotionNavLink linkName="About" linkTo="/about" />
      <MotionNavLink linkName="Projects" linkTo="/projects" />
      <MotionNavLink linkName="Contact" linkTo="contactme" />
    </motion.nav>
  );
}

export default Navigation;

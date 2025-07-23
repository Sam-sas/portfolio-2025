import { motion } from "motion/react";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { useTheme } from "../utils/hooks";

function ThemeButton() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="">
      {theme === "dark" && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme("light")}
          className="size-12"
        >
          <LuMoon className="size-12" />
        </motion.button>
      )}
      {theme === "light" && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme("dark")}
          className="size-12"
        >
          <LuSun className="size-12" />
        </motion.button>
      )}
    </div>
  );
}

export default ThemeButton;

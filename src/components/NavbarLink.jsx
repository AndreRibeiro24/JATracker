import { motion } from "motion/react";
import { Link } from "react-router";

export default function NavbarLink({ linkLabel, linkHref, icon }) {
  return (
    <motion.div
      className="mb-2.5 cursor-pointer text-center relative"
      initial={{
        color: "#ffffff",
        textShadow: "none",
      }}
      whileHover={{
        color: ["#FF8792", "#ffffff", "#FF8792"],
        textShadow: [
          "2px 2px 8px rgb(255, 0, 0)",
          "2px 2px 8px rgb(255, 255, 255)",
          "2px 2px 8px rgb(255, 0, 0)",
        ],
        transition: {
          duration: 1,
          repeat: Infinity,
        },
      }}
    >
      {icon ? (
        <div>
          <Link to={linkHref} className="">{linkLabel}</Link>
        </div>
      ) : (
        <div>
          <div className="absolute top-0 left-0 w-3 h-0.5 bg-[#00687A]"></div>
          <div className="absolute top-0 left-0 w-0.5 h-3 bg-[#00687A]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-[#00687A]"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-[#00687A]"></div>
          <Link to={linkHref} className="px-6 py-0.5">{linkLabel}</Link>
        </div>
      )}
    </motion.div>
  );
}

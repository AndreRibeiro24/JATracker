import * as React from "react";
import { motion } from "motion/react";

{
  /* scale: [0, 1]*/
}

const SvgComponent = (props) => (
  <svg
    //width={598}
    //height={768}
    viewBox="0 0 598 768"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Object">
      <g id="Ship">
        <motion.g
          id="SpaceShip"
          animate={{ y: [-40, 0, -40] }}
          transition={{
            times: [0, 1],
            repeat: Infinity,
            type: "keyframes",
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <ellipse
            id="Ellipse 2"
            cx={306.5}
            cy={202.83}
            rx={178.5}
            ry={50.4984}
            fill="#163E5C"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
            id="Ellipse 1"
            d="M197 181.187C197 155.677 208.537 131.211 229.072 113.173C249.607 95.134 277.459 85 306.5 85C335.541 85 363.393 95.134 383.928 113.173C404.463 131.211 416 155.677 416 181.187L306.5 181.188L197 181.187Z"
            fill="#56AABD"
          />
        </motion.g>
        <motion.g
          id="Power"
          animate={{ y: [50, -70], opacity: [0.8, 0, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <rect
            id="PowerEight"
            x={299}
            y={331.881}
            width={3}
            height={104.203}
            fill="white"
          />
          <rect
            id="PowerSeven"
            x={269}
            y={418.45}
            width={3}
            height={57.7125}
            fill="white"
          />
          <rect
            id="PowerSix"
            x={242}
            y={290.2}
            width={3}
            height={104.203}
            fill="white"
          />
          <rect
            id="PowerFive"
            x={340}
            y={277.375}
            width={3}
            height={65.7281}
            fill="white"
          />
          <rect
            id="PowerFour"
            x={357}
            y={410.434}
            width={3}
            height={128.25}
            fill="white"
          />
          <rect
            id="PowerThree"
            x={321}
            y={469.75}
            width={3}
            height={128.25}
            fill="white"
          />
          <rect
            id="PowerTwo"
            x={390}
            y={290.2}
            width={3}
            height={128.25}
            fill="white"
          />
          <rect
            id="PowerOne"
            x={288}
            y={516.241}
            width={3}
            height={57.7125}
            fill="white"
          />
        </motion.g>
      </g>
    </g>
  </svg>
);
export default SvgComponent;

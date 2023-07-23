import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import S from "/logo-S.png?url";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} flex`}>
            Hi, I&apos;m
            <span className="relative lg:bottom-7 lg:left-3 md:bottom-5 sm:bottom-1 xs:bottom-[-2px] xs:left-2 left-1   bottom-1">
              <img
                src={S}
                alt=""
                className={`lg:w-24 md:w-20 sm:w-16 xs:w-[50px]  w-9  h-auto   `}
              />
            </span>{" "}
            <span className="text-[#915eff] ">ubrat</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2`}>
            I develop 3D visuals, UI/UX <br />
            design and web application.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute scale-75 bottom-10 translate-y-7 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 mt-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

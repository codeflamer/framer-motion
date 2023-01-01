/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable lines-around-directive */
/* eslint-disable quotes */
"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-between items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] rounded-tl-[140px] z-10 -top-[30px] hero-gradient" />
        <img
          src="/cover.png"
          alt="cover"
          className="z-10 w-full h-[350px] sm:h-[500px] object-cover rounded-tl-[140px] relative"
        />
        <a href="#explore">
          <div className="sm:-mt-[70px] -mt-[50px] z-10 relative flex justify-end w-full  pr-[40px]">
            <img
              src="/stamp.png"
              alt="stamp"
              className="h-[100px] w-[100px] sm:w-[155px] sm:h-[155px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;

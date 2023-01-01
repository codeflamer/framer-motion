/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable lines-around-directive */
/* eslint-disable quotes */
"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import {
  fadeIn,
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";

const About = () => (
  <section className="relative">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About An0onymouss" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[18px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Lorem,</span> ipsum dolor
        sit amet consectetur adipisicing elit.{" "}
        <span className="font-extrabold text-white">
          Cum nulla officiis culpa aliquam
        </span>
        molestiae minus maxime ad ea earum provident voluptates velit, deleniti
        amet recusandae, qui blanditiis dolores inventore. Quia!
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

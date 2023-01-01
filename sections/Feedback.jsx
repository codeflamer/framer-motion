/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable lines-around-directive */
/* eslint-disable quotes */
"use client";
import { motion } from "framer-motion";
import { NewFeatures, TitleText, TypingText } from "../components";

import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import { newFeatures } from "../constants";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6 lg:flex-row `}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] rounded-[32px] border-[1px] flex justify-end flex-col gradient-05 sm:p-8 p-4 border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Samantha
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder | Metaversus
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus ducimus iste sint accusantium debitis accusamus esse id
          deserunt fugiat aperiam, optio assumenda eum aut vero ea mollitia
          tempora recusandae sit.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="h-auto w-full min-h-[210px] rounded-[40px] object-cover lg:h-[610px]"
        />
        <motion.div className="absolute top-[3%] -left-[50px] hidden lg:block">
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;

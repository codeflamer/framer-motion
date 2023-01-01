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
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center " />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in your
            world
          </>
        }
      />
    </motion.div>

    <motion.div
      variant={fadeIn("up", "tween", 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]"
    >
      <img src="/map.png" className="w-full h-full object-cover" />
      <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer">
        <img src="people-01.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute left-20 top-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer">
        <img src="people-02.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] cursor-pointer">
        <img src="people-03.png" alt="people" className="w-full h-full" />
      </div>
    </motion.div>
  </section>
);

export default World;

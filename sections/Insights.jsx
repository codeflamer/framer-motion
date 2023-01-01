/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable lines-around-directive */
/* eslint-disable quotes */
"use client";
import { motion } from "framer-motion";
import { InsightCard, NewFeatures, TitleText, TypingText } from "../components";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center " />
      <TitleText
        title={<>Insight about Metaverse</>}
        textStyles="text-center "
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            {...insight}
            index={index + 1}
            key={`insight-${index}`}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;

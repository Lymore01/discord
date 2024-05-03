/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import React from "react";

type Props = {
    isInView?: boolean | undefined,
    variants: Variants,
    children: React.ReactNode,
    className?:string
}


const ContentSection= React.forwardRef<HTMLDivElement, Props>(
    ({ isInView, variants, children, className }, ref) => {
      return (
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={variants}
          transition={{ duration: 1, ease: "easeIn", type: "spring" }}
          className={className}
        >
          {children}
        </motion.div>
      );
    }
  );

export default ContentSection;

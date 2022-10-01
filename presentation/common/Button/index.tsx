import * as React from "react";
import { motion } from "framer-motion";

const Button = (props: any, { variant }: { variant?: any }) => {
  return (
    <motion.a
      variants={variant}
      {...props}
      className={`px-[16px] py-[8px] ${props.className}`}
      target="_blank"
      rel="noopener noreferrer"
    ></motion.a>
  );
};

export default Button;

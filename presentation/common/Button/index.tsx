import * as React from "react";

const Button = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  return <a {...props} className={`px-[16px] py-[8px] ${props.className}`}></a>;
};

export default Button;

import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[25px]", square: "rounded-none" };
const variants = {
  fill: {
    blue_200: "bg-blue-200 text-black-900",
    cyan_100: "bg-cyan-100 text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-[19px]",
  md: "px-[9px] py-6",
  lg: "pl-[19px] pr-[18px] py-[35px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "lg",
  variant = "fill",
  color = "blue_gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_200", "cyan_100", "blue_gray_900"]),
};

export { Button };

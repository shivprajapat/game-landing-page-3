import React from "react";

const Button = ({ fullWidth, loading, children, className, ...props }) => {
  return (
    <>
      <button
        className={`${className} ${
          fullWidth && "w-100"
        } bg-primary hover:bg-black transition-all text-white rounded-full px-4 sm:px-5 py-2 sm:py-3 cursor-pointer w-full`}
        disabled={loading}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
export default Button;

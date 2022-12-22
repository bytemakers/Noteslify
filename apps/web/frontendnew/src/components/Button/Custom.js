import React from "react";

const Custom = ({ href, text, buttonClass, arrowClass }) => {
  return (
    <a href={href} className={buttonClass}>
      {text}
      <span className={arrowClass} aria-hidden="true">
        &rarr;
      </span>
    </a>
  );
};

export default Custom;

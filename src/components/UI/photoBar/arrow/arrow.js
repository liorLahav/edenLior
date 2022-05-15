import { useState } from "react";
import Classes from "./arrow.module.css";

const Arrow = (props) => {
  const ArrowImg = `https://www.eden-gallery.com//assets/images/arrow-${props.diraction}_dark_gray.svg`;
  return (
    <img
      onClick={props.onClick}
      className={Classes.Arrow}
      src={ArrowImg}
      loading="lazy"
      alt="arrow"
    ></img>
  );
};

export default Arrow;

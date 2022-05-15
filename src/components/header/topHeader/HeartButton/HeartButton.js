import { useState } from "react";
import Classes from "./HeartButton.module.css";
const HeartButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const unClickedHeart =
    "https://www.eden-gallery.com/assets/images/icon-heart.svg";
  const clickedHeart = "https://www.eden-gallery.com/assets/img/heart_red.svg";
  // change the heart img
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      className={Classes.heartButton}
      onClick={clickHandler}
      src={isClicked ? clickedHeart : unClickedHeart}
    ></img>
  );
};

export default HeartButton;

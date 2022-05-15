import Conatiner from "../../UI/header/container/container";
import Classes from "./bottomHeader.module.css";
import Button from "../../UI/header/headerButton/button";
import { useEffect, useState } from "react";
const BottomHeader = () => {
  // keeps the scroll bar postion
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  // text of the buttons
  const buttons = [
    "Home",
    "Galleries",
    "Artists",
    "Collections",
    "Artworks",
    "News",
    "About Eden",
    "Contact Us",
  ];
  useEffect(() => {
    // update the postion of the scrollbar
    const scrollHandler = (event) => {
      setY(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    // cleanup
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [y]);
  return (
    <div
      id="bottomHeader"
      className={`${y > 100 && Classes.bottomHeaderTravel} ${
        Classes.bottomHeader
      }`}
    >
      <img
        src="https://www.eden-gallery.com/assets/images/logo-red.svg"
        loading="lazy"
      ></img>
      <Conatiner>
        {buttons.map((button, index) => {
          return <Button title={button} key={index} />;
        })}
      </Conatiner>
    </div>
  );
};

export default BottomHeader;

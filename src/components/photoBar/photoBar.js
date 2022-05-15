import Classes from "./photo.module.css";
import Card from "./card/card";
import Arrow from "../UI/photoBar/arrow/arrow";
import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
const PhotoBar = () => {
  // page counter
  const [page, setPage] = useState(0);
  // all the data displayed on the cards
  const data = [
    {
      title: "EDEN GALLERY",
      subTitle: "A Vibrant World of Contemporary Art",
      text: "Eden Gallery represents brilliant contemporary artists worldwide, displaying their art in breathtaking galleries in some of the top premium locations around the world.",
      button: "Discover",
      bottomDescription: " galleries",
    },
    {
      title: "ARTISTS",
      subTitle: "Unique Contemporary Artists",
      text: "Learn More About Eden Gallery's exclusive artists",
      button: "Learn More",
      bottomDescription: " Artists",
    },
    {
      title: "COLLECTIONS",
      subTitle: "Original Collections",
      text: "Original Collections",
      button: "Discover",
      bottomDescription: " Collections",
    },
    {
      title: "ARTWORKS",
      subTitle: "A Diverse Selection of Fine Art",
      text: "Browse individual works of art.",
      button: "Browse",
      bottomDescription: "Artworks",
    },
    {
      title: "EVENTS",
      subTitle: "Special Events",
      text: "Inspiring art exhibitions and celebrations.",
      button: "See Events",
      bottomDescription: "Events & Exhibitions",
    },
  ];
  // change the page
  const changePages = (newPage) => {
    setPage(newPage);
    const nextPage = document.getElementById("Page" + newPage);
    nextPage.parentNode.scrollLeft = nextPage.offsetLeft;
  };

  // make the cards move to the next one
  const ScrollFoward = () => {
    let newPage;
    // check if the page will not pass its limit
    if (page + 1 < 5) {
      newPage = page + 1;
    } else {
      // if it passes the limit return to the begining
      newPage = 0;
    }
    changePages(newPage);
  };
  // make the cards move to the back
  const ScrollBackward = () => {
    let newPage;
    if (page - 1 > -1) {
      newPage = page - 1;
    } else {
      newPage = 4;
    }
    changePages(newPage);
  };
  // change the page every spasific time
  useEffect(() => {
    const waitingTime = 7000;
    const AutomaticPageMovments = setTimeout(ScrollFoward, waitingTime);
    // if a page turned manually clear the timeout so it will not look glitchy
    return () => clearTimeout(AutomaticPageMovments);
  }, [page]);
  return (
    <React.Fragment>
      <div className={Classes.photoBar}>
        {/* arrow Container */}
        <div className={Classes.arrowContainer}>
          <Arrow onClick={ScrollBackward} diraction="left"></Arrow>
          <Arrow onClick={ScrollFoward} diraction="right"></Arrow>
        </div>
        {/* create all the cards based on the data arry */}
        {data.map((card, index) => {
          return <Card key={index} id={index} data={card} />;
        })}
      </div>
      <Button className={Classes.button} theme="light">
        Discover Our Galleries
      </Button>
    </React.Fragment>
  );
};

export default PhotoBar;

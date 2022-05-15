import Classes from "./top.module.css";

const Top = (props) => {
  return (
    <div className={Classes.top}>
      {/*like image */}
      <img
        src="https://www.eden-gallery.com/assets/images/icon-heart.svg"
        loading="lazy"
        alt="like"
      />
      {/*Artwork image */}
      <img src={props.src} loading="lazy" alt="artwork" />
    </div>
  );
};

export default Top;

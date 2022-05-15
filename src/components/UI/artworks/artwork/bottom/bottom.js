import Classes from "./bottom.module.css";

const Bottom = (props) => {
  const data = props.data;
  return (
    <div className={Classes.bottom}>
      <h3>{data.title}</h3>
      {/*background image */}
      <img
        src="https://www.eden-gallery.com/assets/images/icon-share.svg"
        alt="share"
        loading="lazy"
      ></img>
      <p>
        {data.Artist} | {data.type}
      </p>
      <p>
        {data.cm} | {data.inches}
      </p>
    </div>
  );
};

export default Bottom;

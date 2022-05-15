import Classes from "./artist.module.css";

const Artist = (props) => {
  const img = require(`../../../../img/artists/${props.id}.jpeg`);
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
      }}
      className={Classes.artist}
    >
      <p>{props.artist}</p>
    </div>
  );
};

export default Artist;

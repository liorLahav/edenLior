import Classes from "./artwork.module.css";
import Bottom from "./bottom/bottom";
import Top from "./top/top";

const Artwork = (props) => {
  return (
    <div className={Classes.Artwork}>
      <Top src={props.data.src} />
      <Bottom data={props.data} />
    </div>
  );
};

export default Artwork;

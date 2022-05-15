import Button from "../../Button/Button";
import Classes from "./collection.module.css";

const Collection = (props) => {
  const data = props.data;
  return (
    <div className={Classes.collection}>
      {/* background image */}
      <img src={data.src} alt="collection" loading="lazy"></img>
      {/* keep all the text together and position it */}
      <div className={Classes.textHolder}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Button className={Classes.button} theme="dark">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default Collection;

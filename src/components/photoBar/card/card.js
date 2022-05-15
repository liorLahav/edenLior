import Classes from "./card.module.css";
import Button from "../../UI/Button/Button";
const Card = (props) => {
  const data = props.data;
  const imgUrl = require(`../../../img/photobar${props.id}.jpeg`);
  return (
    <div id={"Page" + props.id} className={Classes.card}>
      {/* background image */}
      <img src={imgUrl} alt="gallery"></img>
      {/* holds all the text and position all the othr elements */}
      <div className={Classes.textConatiner}>
        <h1>{data.title}</h1>
        <h2>{data.subTitle}</h2>
        <p>{data.text}</p>
        <Button theme="dark">{data.button}</Button>
      </div>
      <h3>{data.bottomDescription}</h3>
    </div>
  );
};

export default Card;

import Button from "../Button/Button";
import Classes from "./section.module.css";

const Section = (props) => {
  return (
    <div className={`${Classes.section} ${props.className}`}>
      <h2>{props.title}</h2>
      <div className={` ${props.containerClassname} ${Classes.Container} `}>
        {props.children}
      </div>
      <Button theme="light" className={props.buttonClassName}>
        {props.buttonText}
      </Button>
    </div>
  );
};

export default Section;

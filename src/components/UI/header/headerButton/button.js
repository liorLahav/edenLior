import Classes from "./button.module.css";

const HeaderButton = (props) => {
  return <button className={Classes.button}>{props.title}</button>;
};

export default HeaderButton;

import Classes from "./conatiner.module.css";

const Conatiner = (props) => {
  return <div className={Classes.container}>{props.children}</div>;
};

export default Conatiner;

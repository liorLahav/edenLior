import Classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${Classes.ButtonBase} ${
        props.theme === "dark" ? Classes.dark : Classes.light
      } ${props.className} `}
    >
      {props.children}
    </button>
  );
};

export default Button;

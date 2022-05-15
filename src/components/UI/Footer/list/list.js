import Classes from "./list.module.css";

const List = (props) => {
  return (
    <li className={Classes.list}>
      {props.title && <h2>{props.title}</h2>}
      {props.children}
      {props.lastItem && <ul className={Classes.lastItem}>{props.lastItem}</ul>}
    </li>
  );
};

export default List;

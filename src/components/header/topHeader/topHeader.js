import Conatiner from "../../UI/header/container/container";
import HeartButton from "./HeartButton/HeartButton";
import SearchBar from "./SearchBar/SearchBar";
import Classes from "./topHeader.module.css";
import Button from "../../UI/header/headerButton/button";
const TopHeader = () => {
  return (
    <div className={Classes.topHeader}>
      <Conatiner>
        <SearchBar />
        <HeartButton />
        <Button title="Online Shop" />
      </Conatiner>
    </div>
  );
};

export default TopHeader;

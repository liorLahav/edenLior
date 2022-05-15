import BottomHeader from "./bottomHeader/bottomHeader";
import Classes from "./header.module.css";
import TopHeader from "./topHeader/topHeader";
import SmallHeader from "./smallHeader/smallHeader";
const Header = () => {
  return (
    <header className={Classes.header}>
      <TopHeader />
      <BottomHeader />
      <SmallHeader />
    </header>
  );
};

export default Header;

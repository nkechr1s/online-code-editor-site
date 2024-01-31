import { Header as HeaderComponent } from "src/components";
import { useGlobalContext } from "src/context/GlobalContext";

const Header = () => {
  const { headerData } = useGlobalContext();
  return <HeaderComponent {...headerData} />;
};

export default Header;

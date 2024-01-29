import { Header as HeaderComponent } from "src/components";
import { data } from "src/lib/data/headerData";

const Header = () => {
  return <HeaderComponent {...data} />;
};

export default Header;

import { Hero } from "src/components";
import { useGlobalContext } from "src/context/GlobalContext";

const HeroHomePage = () => {
  const { heroData } = useGlobalContext();
  return <Hero {...heroData} />;
};

export default HeroHomePage;

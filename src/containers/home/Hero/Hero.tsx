import { Hero as HeroComponent } from "src/components";
import { useGlobalContext } from "src/context/GlobalContext";

const Hero = () => {
  const { heroData } = useGlobalContext();
  return <HeroComponent {...heroData} />;
};

export default Hero;

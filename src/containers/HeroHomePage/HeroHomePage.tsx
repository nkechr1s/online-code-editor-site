import { Hero } from "src/components";
import { data } from "src/lib/data/heroData";
const HeroHomePage = () => {
  return <Hero {...data} />;
};

export default HeroHomePage;

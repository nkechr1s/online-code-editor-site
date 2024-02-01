import { useGlobalContext } from "src/context/GlobalContext";
import { CardsGrid as CardGridComponent } from "src/components";

const CardsGrid = () => {
  const { cardsData } = useGlobalContext();
  return <CardGridComponent cardsData={cardsData} />;
};

export default CardsGrid;

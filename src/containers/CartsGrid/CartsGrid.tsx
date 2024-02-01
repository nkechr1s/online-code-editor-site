import { Card } from "src/components";
import styles from "./CartsGrid.module.css";
import { useGlobalContext } from "src/context/GlobalContext";

const CartsGrid = () => {
  const { cardsData } = useGlobalContext();
  return (
    <div className={styles.gridContainer}>
      {Array.isArray(cardsData) &&
        cardsData.map((card, index) => (
          <Card
            key={index + card.id}
            id={card.id}
            title={card.title}
            subTitle={card.subTitle}
            description={card.description}
            imgUrl={card.imgUrl}
            imgAlt={card.imgAlt}
          />
        ))}
    </div>
  );
};

export default CartsGrid;

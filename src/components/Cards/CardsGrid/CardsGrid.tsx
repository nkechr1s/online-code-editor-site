import { Card } from "src/components";
import styles from "./CardsGrid.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardsGrid = ({ cardsData }: any) => {
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

export default CardsGrid;

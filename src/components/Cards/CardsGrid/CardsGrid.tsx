import { Card } from "src/components";
import styles from "./CardsGrid.module.css";
import { CardsGridProps } from "src/lib/types";

const CardsGrid = ({ cardsData }: CardsGridProps) => {
  return (
    <>
      {Array.isArray(cardsData) && (
        <div className={styles.gridContainer}>
          {cardsData.map((card, index) => (
            <Card key={index + card.id} {...card} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardsGrid;

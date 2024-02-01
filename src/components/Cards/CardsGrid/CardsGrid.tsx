import { Card } from "src/components";
import styles from "./CardsGrid.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardsGrid = ({ cardsData }: any) => {
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

import Image from "next/image";
import styles from "./cards.module.css";

type SurvivalCardProps = {
  cards: Card[];
};

type Card = {
  icon: string;
  titleLight: string;
  titleBold: string;
  text: string;
  percentage: string;
  script: string;
};
const SurvivalCard = ({ cards }: SurvivalCardProps) => {
  return (
    <div className={styles.cardContainer + " " + styles.survivalCard}>
      <b>
        Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно
        среднетяжелое или тяжелое обострение случится в течение 3 лет у 77%
        пациентов<sup className={styles.sup}>1</sup>.
      </b>
      <p style={{ marginTop: "10px" }}>
        В течение 5 лет после первого тяжёлого обострения в живых остаются
        только 40% пациентов.<sup className={styles.sup}>2</sup> Прогноз после
        обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте
        миокарда и некоторых злокачественных опухолях.
      </p>
      <h3>Пятилетняя выживаемость пациентов</h3>
      <div className={styles.cardLayout}>
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default SurvivalCard;

const Card = ({ card }: { card: Card }) => {
  return (
    <div className={styles.card}>
      <Image src={card.icon} width={80} height={130} alt="card icon" />
      <p className={styles.percentage}>{card.percentage}</p>
      <p>
        {card.titleLight}
        <b>
          {card.titleBold}
          <sup className={styles.sup}>{card.script}</sup>
        </b>
      </p>
      <p className={styles.cardText}>{card.text}</p>
    </div>
  );
};

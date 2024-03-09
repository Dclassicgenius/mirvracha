import Image from "next/image";
import styles from "./cards.module.css";

type SubMainCardProps = {
  index: number;
  titleTextOne: string;
  titleTextTwo: string;
  titleTextThree: string;
  text: string;
};

const SubMainCard = ({
  index,
  titleTextOne,
  titleTextTwo,
  titleTextThree,
  text,
}: SubMainCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.relative}>
        <Image
          src="/subcard-icon.svg"
          width={80}
          height={80}
          alt="person icon"
        />
        <p className={styles.numberIcon}>{index}</p>
      </div>
      <p className={styles.title}>
        {titleTextOne}
        <span className={styles.bold}> {titleTextTwo}</span>
        <span className={styles.light}>
          {" "}
          {titleTextThree ? titleTextThree : ""}
        </span>
      </p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SubMainCard;

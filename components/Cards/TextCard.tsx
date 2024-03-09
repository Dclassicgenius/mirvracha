import styles from "./cards.module.css";

const TextCard = ({ text }: { text: string }) => {
  return <p className={styles.textCard + " " + styles.text}>{text}</p>;
};

export default TextCard;

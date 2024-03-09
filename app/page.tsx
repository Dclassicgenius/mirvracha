import MainCard from "@/components/MainCard/MainCard";
import styles from "./page.module.css";
import BarCard from "@/components/Cards/BarCard";
import SurvivalCard from "@/components/Cards/SurvivalCard";

const cards = [
  {
    icon: "/heart.svg",
    titleLight: "пациентов с ",
    titleBold: "сердечной недостаточностью",
    percentage: "45,5%",
    script: "1",
    text: "Популяционное когортное исследование (N=385)",
  },
  {
    icon: "/chest.svg",
    titleLight: "пациентов с ",
    titleBold: "инфарктом миокарда",
    percentage: "55,3%",
    script: "1",
    text: "Апостериорный анализ когортного исследования (N=2887)",
  },
  {
    icon: "/organ.svg",
    titleLight: "пациентов с ",
    titleBold: "раком мочевого пузыря",
    percentage: "50,5%",
    script: "",
    text: "Исследование Национальной статистической службы (N=42642)",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}></div>
      <MainCard />

      <BarCard />
      <div>
        <SurvivalCard cards={cards} />
      </div>
    </main>
  );
}

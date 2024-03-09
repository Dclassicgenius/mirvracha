import React from "react";
import styles from "./main-card.module.css";
import Accordion from "../Accordion/Accordion";
import SubMainCard from "../Cards/SubMainCard";
import TextCard from "../Cards/TextCard";
import Image from "next/image";
const accordions = [
  {
    titleLight: "ХОБЛ болеют",
    titleBold: "преимущественно мужчины?",
    icon: "/person-icon.svg",
    pointer: "/blue-pointer.svg",
    text: "В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ диагностированной до 55 лет, было выявлено преобладание...",
    index: 1,
  },
  {
    titleLight: "не наличие заболевания, а обострения?",
    titleBold: "Опасно",
    icon: "/rise-icon.svg",
    pointer: "/green-pointer.svg",
    text: "Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...",
    index: 2,
  },
];

const services = [
  {
    titleTextOne: "Ингаляционный",
    titleTextTwo: "антихолинергик",
    titleTextThree: "",
    text: "Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1",
    index: 1,
  },
  {
    titleTextOne: "Ингаляционный",
    titleTextTwo: "β2-агонист",
    titleTextThree: "",
    text: "Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции",
    index: 2,
  },
  {
    titleTextOne: "Ингаляционный",
    titleTextTwo: "глюкокортикостероид",
    titleTextThree: "(ИГКС)",
    text: "Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей",
    index: 3,
  },
];

const texts = [
  `Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга1`,
  `Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;
Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)1.`,
];

const MainCard = () => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.heading}>
        <h1>ХОБЛ: мифы и реальность</h1>
      </div>
      <div className={styles.accordions}>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.index}
            titleLight={accordion.titleLight}
            titleBold={accordion.titleBold}
            icon={accordion.icon}
            pointer={accordion.pointer}
            text={accordion.text}
            index={accordion.index}
          />
        ))}
      </div>

      <div className={styles.heading}>
        <h2>Терапия ХОБЛ: что в фокусе?</h2>
      </div>
      <p className={styles.textGradient}>
        Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
      </p>
      <p className={styles.textBold}>
        Приоритетные направления фармакотерапевтической стратегии при ХОБЛ
        <sup>1</sup>:
      </p>
      <div className={styles.services}>
        {services.map((service) => (
          <SubMainCard
            key={service.index}
            index={service.index}
            titleTextOne={service.titleTextOne}
            titleTextTwo={service.titleTextTwo}
            titleTextThree={service.titleTextThree}
            text={service.text}
          />
        ))}

        <div className={styles.downArrow}>
          <Image
            src="/down-arrow.svg"
            width={350}
            height={80}
            alt="down arrow"
          />
          <Image
            src="/down-arrow.svg"
            width={350}
            height={80}
            alt="down arrow"
          />
        </div>
      </div>

      <div className={styles.texts}>
        {texts.map((text) => (
          <TextCard key={text} text={text} />
        ))}
      </div>
    </div>
  );
};

export default MainCard;

"use client";

import Image from "next/image";
import styles from "./accordion.module.css";
import { useState } from "react";

type AccordionProps = {
  titleLight: string;
  titleBold: string;
  icon: string;
  pointer: string;
  text: string;
  index: number;
};

const Accordion = ({
  titleLight,
  titleBold,
  icon,
  pointer,
  text,
  index,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <div className={styles.flex}>
          <Image src={icon} width={80} height={80} alt="icon" />
          <div className={styles.accordionTitle}>
            <div className={styles.titleText}>
              {index === 1 && (
                <p>
                  {titleLight} <span className={styles.bold}>{titleBold}</span>
                </p>
              )}

              {index === 2 && (
                <p className={styles.bold}>
                  {titleBold} <span className={styles.light}>{titleLight}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <p
          className={`${styles.accordionText} ${isOpen ? styles.expanded : ""}`}
        >
          {text}
        </p>
      </div>
      <Image
        onClick={toggleAccordion}
        className={styles.accordionPointer}
        src={pointer}
        width={48}
        height={48}
        alt="pointer icon"
      />
    </div>
  );
};

export default Accordion;

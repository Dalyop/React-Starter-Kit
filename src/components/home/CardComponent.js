import React, { useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

import styles from "./HomeComponent.module.css";

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className={styles.carousel}>
      {active > 0 && (
        <button
          className={`${styles.nav} ${styles.left}`}
          onClick={() => setActive((i) => i - 1)}
        >
          <FaRegArrowAltCircleLeft />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className={styles.cardContainer}
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className={`${styles.nav} ${styles.right}`}
          onClick={() => setActive((i) => i + 1)}
        >
          <FaRegArrowAltCircleRight />
        </button>
      )}
    </div>
  );
};

const CardComponent = () => (
  <div className={styles.app}>
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card
          key={i}
          title={"Glance " + (i + 1)}
          content="Take a look into the future of technology and AI systems.
          The future of ChatGPT and Google Bard! ake a look into the future of technology and AI systems.
          The future of ChatGPT and Google Bard!"
        />
      ))}
    </Carousel>
  </div>
);

export default CardComponent;

export { Carousel, Card };

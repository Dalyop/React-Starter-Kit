import React, { useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

import styles from "./HomeComponent.module.css";

function CardComponent() {
    return (
        <div className={styles.card}>
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <h2>Title</h2>
            <p>Description</p>
        </div>
    )
}

export default CardComponent;
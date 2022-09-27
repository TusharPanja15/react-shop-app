import React from "react";

import styles from './CardTitle.module.scss';

const CardTitle = (props) => {
    return (
        <header className={styles.card__header}>
            <h1 className={styles.product__title}>{props.productTitle}</h1>
        </header>
    );
}

export default CardTitle;
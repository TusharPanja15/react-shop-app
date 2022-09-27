import React from "react";

import styles from './CardContent.module.scss';

const CardContent = (props) => {
    return (
        <div className="card__content">
            <h2 className={styles.product__price}>{props.productContent[0]}</h2>
            <p className={styles.product__description}>{props.productContent[1]}</p>
        </div>
    );
}

export default CardContent;

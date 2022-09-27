import React from "react";

// import './ProductCard.css';
import styles from './Button.module.scss';

const Button = props => {

    const po = (event) => {
        event.preventDefault();
        props.onButtonClickData('lol');
    }

    return (
        <div className={styles.card__actions}>
            <a href={props.productId} className={styles.btn} onClick={po}  >
                Details
            </a>
        </div>
    );
}

export default Button; 
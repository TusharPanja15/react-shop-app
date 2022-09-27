import React from "react";

// import './ProductCard.css';
import styles from './Card.module.scss';
import Button from "../../UI/Button/Button";
import CardTitle from "../CardTitle/CardTitle";
import CardImage from "../CardImage/CardImage";
import CardContent from "../CardContent/CardContent";

const ProductCard = props => {

    const buttonClickHandler = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.grid}>
            {
                props.products.map(product => (
                    <div className={`${styles.card} ${styles['product-item']}`}>
                        <CardTitle productTitle={product.title} />
                        <CardImage productImage={product.imageUrl} />
                        <CardContent productContent={[product.price, product.description]} />
                        <Button productId={product.id} onButtonClickData={buttonClickHandler} />
                    </div>
                ))
            }
        </div>
    );
}

export default ProductCard; 
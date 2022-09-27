import React from 'react';

import './CardImage.scss';

const CardImage = props => {
    return (
        <div className="card__image">
            <img src={props.productImage} alt=""></img>
        </div>
    );
}

export default CardImage;
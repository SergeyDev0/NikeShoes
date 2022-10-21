import React from "react";
import { CartContext } from './../../App';

const TotalPrice = () => {
    const { cartItems, counter } = React.useContext(CartContext);
    const totalPrice = cartItems.reduce((sum, item) => sum + counter * item.price, 0
    )

    return (
        <div className="wrapper__total-price">
            <div className="row">
                <h3 className="title">Всего:</h3>
                <span className="price">{totalPrice} ₽</span>
            </div>
            <button className="checkout-button">Заказать</button>
        </div>
    )
}

export default TotalPrice;
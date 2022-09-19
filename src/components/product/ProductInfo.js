import React from "react";
import { CartContext } from "../../App"; 
import star from '../../icons/star.svg'

const ProductInfo = () => {
    const { productItem } = React.useContext(CartContext);
    return (
        <div className="product-info">
            {[productItem].map((item) => {
                return (
                    <div className="product__profile-info">
                        <div className="row">
                            <h2 className="product-title">{item.title}</h2>
                            <h3 className="product-price">${item.price}</h3>
                        </div>
                        <p className="product-ratting">ratting {item.ratting} <img src={star} alt="star" /></p>
                    </div>
                )
            })
            
            }
        </div>
    )
}

export default ProductInfo;
import React from "react";
import { CartContext } from "../../App"; 

const ProductInfo = () => {
    const { productItem } = React.useContext(CartContext);
    return (
        <div className="product-info">
            {[productItem].map((item) => {
                return (
                    <>{item.title}</>
                )
            })

            }
        </div>
    )
}

export default ProductInfo;
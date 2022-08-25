import React from "react";
import Drawer from './Item';

export default function CartItems() {
    const [products] = React.useState([]);

    return (
        <div className="col">
            {products.map((item) => {
                return (
                    <div className="item">
                        <img src={item.img} alt={item.alt} />
                        <div className="wrapper-content">
                            <div className="wrapper-info">
                                <h3 className="title">{item.title}</h3>
                                <h4 className="ratting">Ratting {item.ratting} <img src="" alt="star" /></h4>
                            </div>
                            <div className="row">
                                <div className="price">{item.price}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

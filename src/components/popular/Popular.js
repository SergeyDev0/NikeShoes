import React from "react";
import HeaderPopular from './HeaderPopular';
import CardItem from './CardItem';
import { CartContext } from './../../App';

export default function Cards() {
    const { onAddToCart, showProduct } = React.useContext(CartContext);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://console.firebase.google.com/project/arthobby-database/firestore/data/~2Fproducts~2F2dlBoa9p8Q0CdC8tWDZz?view=query-view&scopeType=collection&scopeName=%2Fproducts&query=')
        .then((res) => {
            return res.json();
        })
        .then(json => {
            setProducts(json);
        });
    }, []);

    return (
        <div className="popular">
            <HeaderPopular />
            <ul className="slides">
                {products.map((product, index) => {
                    return (
                        <CardItem 
                        key={index}
                        img={product.img} 
                        alt={product.title} 
                        title={product.title} 
                        price={product.price}
                        ratting={product.ratting}
                        onPlus={(obj) => {onAddToCart(obj)}}
                        onProduct={(obj) => {showProduct(obj)}} />
                        )
                })}
            </ul>
        </div>
    );
}

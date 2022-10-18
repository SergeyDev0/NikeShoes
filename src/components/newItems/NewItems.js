import React from 'react'
import HeaderNewItems from './HeaderNewItems';
import { CartContext } from './../../App';
import Item from './Item.js'; 

export default function Items() {
    const { onAddToCart } = React.useContext(CartContext);
    const [products, setProducts] = React.useState([]);


    React.useEffect(() => {
        fetch('https://63064d8cdde73c0f8457f06d.mockapi.io/hairBand')
        .then((res) => {
            return res.json();
        })
        .then(json => {
            setProducts(json);
        });
    }, []); 

    return (
        <div className="new-items">
            <HeaderNewItems />
            <ul className="slides">
                {products.map((item, index) => {
                    return (
                        <Item
                        key={index}
                        img={item.img} 
                        alt={item.title} 
                        title={item.title}
                        price={item.price}
                        ratting={item.ratting}
                        onPlus={(obj) => {onAddToCart(obj)}} />
                    )
                })}
            </ul>
        </div>
    );
}
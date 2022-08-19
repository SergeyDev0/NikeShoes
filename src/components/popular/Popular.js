import { useState } from "react";
import HeaderPopular from './HeaderPopular';
import CardItem from './CardItem';

export default function Cards() {
    const [products] = useState([
        {
            key   : 'c92c0babdc764d8674bcea14a55d867d',
            title : 'Air Max 270 G',
            img   : '/img/popular-1.png',
            price : '$75.50',
        },
        {
            key   : 'ef39fbf69170b58787ce4e574db9d842',
            title : 'Nike Power',
            img   : '/img/popular-2.png',
            price : '$88.50',
        },
        {
            key   : 'c92c0babdc764d8674bcea14a55d867d',
            title : 'Air Max 270 G',
            img   : '/img/popular-1.png',
            price : '$75.50',
        },
        {
            key   : 'ef39fbf69170b58787ce4e574db9d842',
            title : 'Nike Power',
            img   : '/img/popular-2.png',
            price : '$88.50',
        },
        {
            key   : 'c92c0babdc764d8674bcea14a55d867d',
            title : 'Air Max 270 G',
            img   : '/img/popular-1.png',
            price : '$75.50',
        },
        {
            key   : 'ef39fbf69170b58787ce4e574db9d842',
            title : 'Nike Power',
            img   : '/img/popular-2.png',
            price : '$88.50',
        },
    ]);
    return (
        <div className="popular">
            <HeaderPopular />
            <ul className="slides">
                {products.map((product) => {
                    return (
                        <CardItem 
                        key={product.key} 
                        img={product.img} 
                        alt={product.title} 
                        title={product.title} 
                        price={product.price} />
                        )
                })}
            </ul>
        </div>
    );
}
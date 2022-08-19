import { useState } from 'react'
import HeaderNewItems from './HeaderNewItems';
import Item from './Item.js';

export default function Items() {
    const [items] = useState([
        {
            key   : 'c92c0babdc4d8674bcea14a55d867d',
            title : 'Nike Air',
            img   : '/img/new-item-1.png',
            price : '$75.50',
        },
        {
            key   : 'ef39fbf69170b587874e574db9d842',
            title : 'Nike Power',
            img   : '/img/new-item-2.png',
            price : '$88.50',
        },
        {
            key   : 'c92c0babdc4d674bcea14a55d867d',
            title : 'Nike Air',
            img   : '/img/new-item-1.png',
            price : '$75.50',
        },
        {
            key   : 'ef39fbf69170b58774e574db9d842',
            title : 'Nike Power',
            img   : '/img/new-item-2.png',
            price : '$88.50',
        },
        {
            key   : 'c92c0babdc4d8674bcea14a55d67d',
            title : 'Nike Air',
            img   : '/img/new-item-1.png',
            price : '$75.50',
        },
        {
            key   : 'ef39ff69170b587874e574db9d842',
            title : 'Nike Power',
            img   : '/img/new-item-2.png',
            price : '$88.50',
        },
    ]);
    return (
        <div className="new-items">
            <HeaderNewItems />
            <ul className="slides">
                {items.map((item) => {
                    return (
                        <Item 
                        key={item.key} 
                        img={item.img} 
                        alt={item.title} 
                        title={item.title}
                        price={item.price} />
                    )
                })}
            </ul>
        </div>
    );
}
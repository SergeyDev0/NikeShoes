import React from 'react'
import HeaderNewItems from './HeaderNewItems';
import Item from './Item.js'; 

export default function Items() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://63064d8cdde73c0f8457f06d.mockapi.io/newItems')
        .then((res) => {
            return res.json();
        })
        .then(json => {
            setProducts(json);
        });
    }, []); 

    const onAddToCart = () => {
        alert(123)
    }

    return (
        <div className="new-items">
            <HeaderNewItems />
            <ul className="slides">
                {products.map((item) => {
                    return (
                        <Item
                        img={item.img} 
                        alt={item.title} 
                        title={item.title}
                        price={item.price}
                        onPlus={(obj) => {console.log(obj)}} />
                    )
                })}
            </ul>
        </div>
    );
}
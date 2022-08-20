import React from 'react';
import { Link } from "react-router-dom";
import backCartIcon from '../../icons/backCart.svg';

const BackCart = () => {
    return (
        <Link to='/'>
            <button className="header-menu">
                <img src={backCartIcon} alt="back" />
            </button>
        </Link>
    )
}

export default BackCart;
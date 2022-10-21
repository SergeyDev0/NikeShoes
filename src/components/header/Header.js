import React from 'react';
import { useLocation } from "react-router";
import Cart from './Cart';
import Logo from './Logo';
import HeaderCatalog from './HeaderCatalog';
import InputBar from './InputBar';
import Filter from './Filter';
import Back from './Back';
import CartLogo from './CartLogo';
import ClearCart from './ClearCart';
import Like from './Like';

const Header = () => {
    const {pathname} = useLocation();

    if(pathname === '/') {
        return(
            <header className='header'>
                <div className="header-top">
                    <HeaderCatalog />
                    <Logo />
                    <Cart />
                </div>
                <div className="header-bottom">
                    <InputBar />
                    <Filter />
                </div>
            </header>
        )
    } else if(pathname === "/cart") {
        return(
            <header className='header'>
                <div className="header-top">
                    <Back />
                    <CartLogo />
                    <ClearCart />
                </div>
            </header>
        )
    } else if(pathname === "/catalog") {
        return(
            <header className='header'>
                <div className="header-top">
                    <Back />
                </div>
            </header>
        )
    } else{
        return(
            <header className='header'>
                <div className="header-top">
                    <Back />
                    <Logo />
                    <Like />
                </div>
            </header>
        )
    }
}

export default Header;


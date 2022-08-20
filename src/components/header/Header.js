import React from 'react';
import { useLocation } from "react-router";
import Cart from './Cart';
import Logo from './Logo';
import Notifications from './Notifications';
import InputBar from './InputBar';
import Filter from './Filter';
import Back from './Back';
import CartLogo from './CartLogo';
import ClearCart from './ClearCart';

const Header = () => {
    const {pathname} = useLocation();

    if(pathname === '/') {
        return(
            <header className='header'>
                <div className="header-top">
                    <Cart />
                    <Logo />
                    <Notifications />
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
    } else{
        return(
            <header className='header'>
                <div className="header-top">
                    <Back />
                    <Logo />
                    <Notifications />
                </div>
            </header>
        )
    }
}

export default Header;


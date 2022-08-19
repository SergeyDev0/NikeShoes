import Cart from './Cart';
import Logo from './Logo';
import Notifications from './Notifications';
import InputBar from './InputBar';
import Filter from './Filter';

const Header = () => {
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
}

export default Header;


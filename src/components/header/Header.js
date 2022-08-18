import Menu from './Menu';
import Logo from './Logo';
import Notifications from './Notifications';
import InputBar from './InputBar';
import Filter from './Filter';

const Header = () => {
    return(
        <header className='header'>
            <div className="header-top">
                <Menu />
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


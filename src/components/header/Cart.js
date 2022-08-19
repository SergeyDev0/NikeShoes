import { Link } from "react-router-dom";
import menuIcon from '../../icons/menu.svg'

const Cart = () => {
    return(
        <Link to="/cart">
            <button className="header-menu">
                <img src={menuIcon} alt="menu" />
            </button>
        </Link>
    )
}

export default Cart;
import cartIcon from '../../icons/cartIcon.svg';

const ClearCart = () => {
    return (
        <button className="clear-btn">
            <img src={cartIcon} alt="clear cart" />
        </button>
    )
}

export default ClearCart;
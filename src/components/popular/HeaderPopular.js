import moreIcon from '../../icons/more.svg';

const HeaderPopular = () => {
    return(
        <div className="popular-header">
            <h2 className="title">Popular</h2>
            <button className="more">
                <img src={moreIcon} alt="more" />
            </button>
        </div>
    )
}

export default HeaderPopular;
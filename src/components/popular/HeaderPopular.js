import moreIcon from '../../icons/more.svg';

const HeaderPopular = () => {
    return(
        <div className="popular-header">
            <h2 className="title">Популярные</h2>
            <button className="more">
                <img src={moreIcon} alt="more" />
            </button>
        </div>
    )
}

export default HeaderPopular;
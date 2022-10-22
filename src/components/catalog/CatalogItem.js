import arrowRightIcon from "../../icons/arrow-right.svg"

const CatalogItem = () => {
    return(
        <div className="catalog-item">
            <button className="catalog-button">
                <h3 className="title">Школьные</h3>
                <img width={20} height={20} src={arrowRightIcon} alt="arrow" />
            </button>
        </div>
    )
}

export default CatalogItem;
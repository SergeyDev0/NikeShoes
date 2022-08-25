const Drawer = ({ items = [] }) => {
    return (
        <div className="col">
            {items.map((item) => {
                return (
                    <div className="item">
                        <img src={item.img} alt={item.alt} />
                        <div className="wrapper-content">
                            <div className="wrapper-info">
                                <h3 className="title">{item.title}</h3>
                                <h4 className="ratting">Ratting {item.ratting} <img src="" alt="star" /></h4>
                            </div>
                            <div className="row">
                                <div className="price">{item.price}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Drawer;
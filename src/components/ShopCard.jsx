export default function ShopCard({card, index}) {
    const { name, price, color, img } = card;
    return (
        <div className="card">
            <p className="card_name">{name}</p>
            <p className="card_color">{color}</p>
            <img className="img-card" src={img} alt={index}/>
            <div className="footer">
                <p className="card_price">${price}</p>
                <button className="btn">ADD TO CART</button>
            </div>
        </div>
    )
}
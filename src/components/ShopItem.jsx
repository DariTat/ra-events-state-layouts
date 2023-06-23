export default function ShopItem({item, key}) {
    const { name, price, color, img } = item;
    return (
        <li className="item">
            <p className="card_name">{name}</p>
            <p className="card_color">{color}</p>
            <img className="item-img" src={img} alt={key}/>
            <p className="card_price">${price}</p>
            <button className="btn">ADD TO CART</button>
        </li>
    )
}
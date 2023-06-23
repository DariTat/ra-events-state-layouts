import ShopItem from "./ShopItem";

export default function ListVeiw({products}) {
    return (
        <ul className="list-veiw">
            {products.map((item, key) => <ShopItem item={item} key={key}/>)}
        </ul>
    )
}
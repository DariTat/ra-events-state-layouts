import ShopCard from "./ShopCard"

export default function CardVeiw({products}) {
    return (
        <div className="card-veiw">
            {products.map((card, index) => <ShopCard card={card} index={index}/>)}
        </div>
    )
}
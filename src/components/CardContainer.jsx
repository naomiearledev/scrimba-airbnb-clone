import Card from "./Card"
import data from "../data"

export default function CardComponent() {
  const cards = data.map(item => {
    return (
      <Card 
        label={item.openSpots === 0 ? "sold out" : ""} 
        image={item.coverImg} 
        imageAlt={item.title}
        reviewStars={item.stats.rating}
        reviewNumber={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        key={item.id}
      />
    )
  })
  
  return (
    <div className="card-container">
      {cards}
    </div>
  )
}
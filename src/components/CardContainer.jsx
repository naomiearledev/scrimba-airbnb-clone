import Card from "./Card"
import data from "../data"

export default function CardComponent() {
  const cards = data.map(item => {
    let labelText
    if (item.openSpots === 0) {
      labelText = "sold out"
    } else if (item.location === "Online") {
      labelText = "online"
    }
    
    return (
      <Card
        key={item.id}
        data={item}
        label={labelText}
      />
    )
  })
  
  return (
    <div className="card-container">
      {cards}
    </div>
  )
}
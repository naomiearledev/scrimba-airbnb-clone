import Card from "./Card"
import image1 from "../assets/images/katie-zaferes.png"

export default function CardComponent() {
  return (
    <>
      <Card 
        label="sold out" 
        image={image1} 
        imageAlt="Photo of Katie Zaferes"
        reviewStars="5.0"
        reviewNumber={6}
        title="Life lessons with Katie Zefares"
        price={136}
      />
    </>
  )
}
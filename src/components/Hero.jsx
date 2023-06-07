import photoGrid from '../assets/images/photo-grid.png'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_image-container">
        <img src={photoGrid} alt="grid of photos displaying experiences" />
      </div>
      <div className="hero_content-container">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}
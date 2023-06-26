import PropTypes from "prop-types"
import starImage from "../assets/images/star.png"

export default function Card({ data, label }) {
  const imgSrc = `../../public/${data.coverImg}`

  return (
    <div className="card">
      <div className="card_image-container">
        {label !== "" && <span className="card_label">{label}</span>}
        <img src={imgSrc} alt={data.title} />
      </div>
      <div className="card_content-container">
        <div className="card_info">
          <span className="card_reviews">
            <img src={starImage} alt="reviews" />
            {data.stats.rating}
            <span> ({data.stats.reviewCount})</span>
          </span>
          <span className="card_location">{data.location}</span>
        </div>
        <div className="card_title">
          <p>{data.title}</p>
        </div>
        <div className="card_price">
          <span>
            <strong>From ${data.price} </strong>/ person
          </span>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  data: PropTypes.object
}
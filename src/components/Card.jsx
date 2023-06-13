import PropTypes from "prop-types"
import starImage from "../assets/images/star.png"

export default function Card({ label, image, imageAlt, reviewStars, reviewNumber, title, price }) {
  return (
    <div className="card">
      <div className="card_image-container">
        <span className="card_label">{label}</span>
        <img src={image} alt={imageAlt} />
      </div>
      <div className="card_content-container">
        <div className="card_info">
          <span className="card_reviews">
            <img src={starImage} alt="reviews" />
            {reviewStars}
            <span> ({reviewNumber})</span>
          </span>
          <span className="card_location">USA</span>
        </div>
        <div className="card_title">
          <p>{title}</p>
        </div>
        <div className="card_price">
          <span>
            <strong>From ${price} </strong>/ person
          </span>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  reviewStars: PropTypes.string.isRequired,
  reviewNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
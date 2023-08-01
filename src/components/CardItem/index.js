// Write your code here.
const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <div>
      <li className={className}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} />
      </li>
    </div>
  )
}

export default CardItem

// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  console.log(name)
  return (
    <div className="planetContainer">
      <h1 className="mainheading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} />
      <div className="planetDetails">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem

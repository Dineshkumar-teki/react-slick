// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: true,
  }
  const {planetsList} = props
  return (
    <div className="bgContainer" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachPlanetDetailsObj => (
          <PlanetItem
            planetDetails={eachPlanetDetailsObj}
            key={eachPlanetDetailsObj.id}
          />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider

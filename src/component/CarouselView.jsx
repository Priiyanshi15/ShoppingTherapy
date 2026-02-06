import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselView = () => {

  const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-style" interval={null}>
                <Carousel.Item className="carousel-style">
                  <img src="assets/banner/Slider1.png" alt="Slider1" className="carousel-style"/>
                </Carousel.Item>
                <Carousel.Item className="carousel-style">
                  <img src="assets/banner/Slider2.png" alt="Slider2" className="carousel-style"/>
                </Carousel.Item>
                <Carousel.Item className="carousel-style">
                  <img src="assets/banner/Slider3.png" alt="Slider3" className="carousel-style"/>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
  )
}

export default CarouselView
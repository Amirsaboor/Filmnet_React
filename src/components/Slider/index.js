import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../img/slide1.jpg';
import slide1Cap from '../../img/مااهی.png';
import slide2 from '../../img/slide2.jpg';
import slide2Cap from '../../img/مافیا.png';
import slide3 from '../../img/slide3.jpg';
import slide3Cap from '../../img/چوجه.png';
import './style.css'


const Slider=()=> {

  return (
    <Carousel >
      <Carousel.Item className='Carousel Carousel1 '>
        <img src={slide1} className='w-75' text="First slide" />
        <Carousel.Caption  >
          <img src={slide1Cap}  className='w-25'/>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='Carousel Carousel2  '>
        <img src={slide2} className='w-75' text="Second slide" />
        <Carousel.Caption >
            <img src={slide2Cap}  className='w-25'/>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='Carousel Carousel3 '>
        <img src={slide3} className='w-75' text="Third slide" />
        <Carousel.Caption >
            <img src={slide3Cap}  className='w-25'/>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

  );
}

export default Slider;
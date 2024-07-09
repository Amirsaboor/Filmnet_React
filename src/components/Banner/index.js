import './style.css'
import banner from '../../img/banner1.jpg'
import Container from 'react-bootstrap/Container';


const Banner=()=>{
    return(
        <Container >
            <img src={banner} className='w-100'/>
        </Container>
    )

}


export default Banner;
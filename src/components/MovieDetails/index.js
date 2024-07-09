import './style.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import MovieList from '../MovieList';
import MovieTop from '../MovieTop250';



const MovieDetails=()=>{
    
    const { movieId } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
            fetch(`https://moviesapi.codingfront.dev/api/v1/movies/${movieId}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data);
            })   
}, [])
if (!data.id) return <Container><Spinner animation="border" /></Container>

    return(
        <Container className=' py-5'>
            <Row>
                <Col xs={12} className='pb-3 breadcrumb px-5 pt-3 rounded border' >
                    <Nav.Link  as={Link} to="/"> صفحه اصلی /</Nav.Link>
                    <Nav.Link  as={Link} to="/"> سینمایی /</Nav.Link>
                    <Nav.Link  as={Link} to=""> {data.title}</Nav.Link>

                </Col>
                
                <Col xs={12} sm={12} md={3} lg={3} >
                    <img src={data.poster}  className='w-100 rounded border'/>
                </Col>

                <Col xs={12} sm={12} md={9} lg={9} className='mt-md-0 mt-sm-5 rounded border p-3'>
                    <div >
                        <h4>{data.title}  ( {data.year} )</h4>
                        <div className='my-4'><h6>کارگردان : {data.director} </h6></div>
                        <div className='my-4'><h6>نویسنده : {data.writer} </h6></div>
                        <div className='my-4'><h6>بازیگران : {data.actors} </h6></div>
                        <div className='my-4'><h6>ساخت : {data.country} </h6></div>
                        <div className='my-4'><h6>ژانر : {data.genres} </h6></div>
                        <div className='my-4 w-75'><h6 className='lh-lg'>توضیحات : {data.plot} </h6></div>



                    </div>
                </Col>

                <Col xs={12} className='mt-5'>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>دانلود نسخه دوبله </Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col xs={12} sm={12} md={6} lg={7}>دانلود فیلم سینمایی {data.title}</Col>
                                    <Col xs={5} sm={5} md={2} lg={2}>
                                    <span>دانلود با کیفیت :</span>
                                    </Col>
                                    <Col xs={5} sm={5} md={2} lg={1}>
                                    <Button variant="warning">1080</Button>
                                    </Col>

                                    <Col xs={5} sm={5} md={2} lg={1}>
                                    <Button variant="warning">720</Button>
                                    </Col>

                                    <Col xs={5} sm={5} md={2} lg={1}>
                                    <Button variant="warning">480</Button>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>دانلود نسخه زیرنویس</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col xs={12} sm={12} md={6} lg={7}>دانلود فیلم سینمایی {data.title}</Col>
                                    <Col xs={5} sm={5} md={2} lg={2}>
                                    <span>دانلود با کیفیت :</span>
                                    </Col>
                                    <Col xs={5} sm={5} md={2} lg={1}>
                                    <Button variant="warning">1080</Button>
                                    </Col>

                                    <Col xs={5} sm={5} md={2} lg={1}>
                                    <Button variant="warning">720</Button>
                                    </Col>

                                    <Col xs={5} sm={5} md={2} lg={1}>
                                    <Button variant="warning">480</Button>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

            <MovieTop/>
        </Container>
    )

}

export default MovieDetails;
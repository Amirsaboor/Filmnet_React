import './style.css'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const MovieList=(props)=>{
    const [data, setData] = useState([])
    useEffect(() => {
            fetch("https://moviesapi.codingfront.dev/api/v1/genres/"+props.id+"/movies?page={page}")
            .then(res => res.json())
            .then(data => {
                setData(data.data)
            })   
        
}, [])
    
    if (!data.length) return <Container><Spinner animation="border" /></Container>
    
    return(
        <Container className='mt-5'>
            <h4 className='mt-5 mb-3'> منتخب فیلم های {props.name} : </h4>

            <div className='rowMovie'>
            {data.map(movie =>{
                return(
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='m-3 ' key={movie.id}>
                        <Link className='text-decoration-none' to={`/Movie/${movie.genres[0]}/${movie.id}`} >
                        <Card className='card h-100 p-2 bg-dark text-white'>
                            <Card.Img variant="top" src={movie.poster} className='cardImage'  />
                            <Card.Body className='d-flex flex-column justify-content-between'>
                                <Card.Title className='fw-bold'>{movie.title}</Card.Title>
                                <Card.Text>{movie.year} | {movie.country}
                                    <p>{movie.imdb_rating}</p>
                                </Card.Text>
                                <Button className='w-100 button' variant="primary">View Movie</Button>
                            </Card.Body>
                        </Card></Link>
                    </Col>
                )
            })}
            </div>

            <hr className='hrLine'></hr>
      </Container>
    )

}

export default MovieList;
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MovieList from '../MovieList';
import Container from 'react-bootstrap/Container';
import './style.css'
const TabMovies=()=>{
  return (
    <Container>
    <Tabs
      defaultActiveKey="comedi"
      id="uncontrolled-tab-example"
      className="my-5 "
    >
      <Tab eventKey="comedi" title="کمدی">
      <MovieList  id='9' name="کمدی" />
      </Tab>
      <Tab eventKey="war" title="جنگی">
      <MovieList  id='14' name="جنگی" />
      </Tab>
    </Tabs>
    </Container>
  );
}

export default TabMovies;
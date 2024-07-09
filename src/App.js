import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Banner from './components/Banner'
import './globalStyle.css'
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Slider from "./components/Slider"
import TabMovies from "./components/Tab"

const router = createBrowserRouter([
  {
    element: 
    <div className='body'>
      <Menu />
      <Footer />
    </div>,
    children: [
      {
        path: "/",
        element:     
        <div className='body'>
          <Slider />
          <MovieList  id='2' name="درام"/>
          <Banner/>
          <TabMovies></TabMovies>
        </div>,
      },
      {
        path: "/Movie/:movieGenres/:movieId",
       element: 
        <MovieDetails />
      },



    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

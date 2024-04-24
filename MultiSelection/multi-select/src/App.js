import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian'
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/* Accordian component*/}
      <Accordian/>

      {/* Reandom Colour Component*/}
      <RandomColor/>

      {/* Star Rating Component */}
      <StarRating/>

      {/*Image Slider Component (url from freecodecamp)*/}
      <ImageSlider url={'https://picsum.photos/v2/list'} page = {"1"} limit={'10'}/>
    </div>
  );
}

export default App;

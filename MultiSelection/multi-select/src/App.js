import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian'
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QrCodeGenerator from './components/qr-code';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/custom-scroll';
import TabTest from './components/tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutoComplete from './components/search-autocomplete';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnClickOutsideTest from './components/use-click-outside/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopBottom from './components/scroll-to-top-and-bottom';

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

      {/*Load more products Component*/}
      <LoadMoreData></LoadMoreData>

      {/*Treeview Component*/}
      <TreeView menus={menus}/>

      {/*QR code Component*/}
      <QrCodeGenerator/>

      {/*Light and Dark Mode*/}
      <LightDarkMode/>

      {/*Scroll Component*/}
      {/*<ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />*/}

      {/*Tabs Component*/}
      <TabTest/>

      {/*Custom Modal Component*/}
      <ModalTest/>

      {/*Github User Finder*/}
      <GithubProfileFinder/>

      {/*Search Autocomplete*/}
      <SearchAutoComplete/>

      {/* Tic Tac Toe*/}
      <TicTacToe/>

      {/*Feature Flag Implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState>

      {/* Use Fetch - Custom Hook */}
      <UseFetchHookTest/>

      {/* Use Onclick - Outside*/}
      <UseOnClickOutsideTest/>

      {/*Use Window Size */}
      <UseWindowResizeTest/>

      {/*Scroll to top and bottom */}
      <ScrollToTopBottom/>

    </div>
  );
}

export default App;

import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import MapChart from './components/MapChart';
import Informations from './components/Informations';

function App() {
  const infoRef = useRef('infoRef');

  const scrollToInfoContent = () => {
      window.scrollTo({
        behavior: "smooth",
        top: infoRef.current.offsetTop
      });
  }
  return (
    <div className="App">
      <MapChart scrollToContentProp={scrollToInfoContent} />
      <div ref={infoRef}>
        <Informations />
      </div>
    </div>
  );
}

export default App;

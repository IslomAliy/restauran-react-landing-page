import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card'
import Cards from './components/Card/Cards';
import SliderControls from "./components/Card/SliderControls";
import Description from './components/Description';
import Gallery from './components/Gallery';
import Download from './components/Download';
import Contact from './components/Contact';
import Instagram from './components/Instagram';


function App() {
  return (
   <div className="App">
      <Header />
      <Cards>
        <Card title="КОРПОРАТИВЫ" desc="Отметьте лучший праздник в лучшем дворце Петербурга!"/>
        <Card title="СВАДЬБЫ" desc="Отметьте лучший праздник в лучшем дворце Петербурга!"/>
        <Card title="ЗВАНЫЕ ВЕЧЕРА" desc="Отметьте лучший праздник в лучшем дворце Петербурга!"/>
      </Cards>
      <SliderControls />
      <Description />
      <Gallery />
      <Download />
      <Contact />
      <Instagram/>
      <Footer /> 
   </div>
  );
}

export default App;

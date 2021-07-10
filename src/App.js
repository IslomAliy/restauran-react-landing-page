import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card'
import Cards from './components/card/Cards';
import SliderControls from "./components/card/SliderControls";
import Description from './components/description';
import Gallery from './components/gallery';

function App() {
  return (
   <div className="App">
      <Header/>
      <Cards>
        <Card title="корпоративы" desc="Отметьте лучший праздник в лучшем дворце Петербурга!"/>
        <Card title="свадьбы" desc="Отметьте лучший праздник в лучшем дворце Петербурга!"/>
        <Card title="званые вечера" desc="Отметьте лучший праздник в лучшем дворце Петербурга!"/>
      </Cards>
      <SliderControls/>
      <Description/>
      <Gallery/>

      <Footer/> 
   </div>
  );
}

export default App;

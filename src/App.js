import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/footer/footer';
import Hero from './Components/Hero/Hero';

import Product from './Components/Filters/Filter';


function App() {
  return (
    <div className="App">
      <div style={{padding: '0px 5%'}}>

     <Header />
     <hr />
     <Hero />
     <hr />

   
     <Product />
      </div>
     <Footer />
    </div>
  );
}

export default App;

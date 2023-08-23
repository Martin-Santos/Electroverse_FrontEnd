import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/home" element={<>
            <Header></Header>
            <Slider></Slider>
            <Footer></Footer>
          </>} />
        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;

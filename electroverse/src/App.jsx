import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Slider from './components/slider/slider';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/user/usuario';
import Xiaomi from './components/productos/Xiaomi/xiaomi';
import Moviles from './components/productos/moviles';
import Iphone from './components/productos/Iphone/iphone';
import Register from './components/register/register'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<>
            <Header></Header>
            <Slider></Slider>
            <Footer></Footer>
          </>} />
          <Route path="/login" element={<>
            <Header />
            <Login />
            <Footer />
            
          </>} />
          <Route path="/moviles" element={<>
            <Header />
            <Moviles />
            <Footer />
            
          </>} />
          <Route path="/xiaomi" element={<>
            <Header />
            <Xiaomi />
            <Footer />
            
          </>} />
          <Route path="/iphone" element={<>
            <Header />
            <Iphone />
            <Footer />
            
          </>} />
          <Route path="/register" element={<>
            <Header />
            <Register />
            <Footer />
            
          </>} />
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

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
import DataProvider from './components/Context/DataContext';
import { Products } from './components/productos/products';
import CartContent from './components/CartContent/CartContent';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
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
            <Route path="/cart" element={<>
              <CartContent/>
              
            </>} />

          </Routes>
        </BrowserRouter>
      </DataProvider>
      
      
    </div>
  );
}

export default App;

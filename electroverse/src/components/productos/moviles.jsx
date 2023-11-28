import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import "./products.css";
import "./moviles.css";
import axios from "axios";


export const Moviles = () => {
    const {data, buyProducts} = useContext(dataContext);
    const [data1, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setData(response.data);
                
                
            } catch (error) {
                console.error('Error interno del servidor:', error);
            }
        };

        fetchData();
    }, []);

    console.log(data1);
    console.log(data1["products"])
    return (
        <div id='bodyMoviles'>
          <div className="body-items">
            <div className="container-items">
              {data1 && data1["products"] ? (
                data1["products"].map((product) => (
                  <div className="item" key={product.id}>
                    <figure>
                      <img src={product.img} alt="img-product-card"/>
                    </figure>
                    <div className="info-product">
                      <h3>{product.name}</h3>
                      <h4>{product.price}$</h4>
                      <a href="">INFO</a>
                      <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay productos disponibles.</p>
              )}
            </div>
          </div>
        </div>
      );
};

export default Moviles;

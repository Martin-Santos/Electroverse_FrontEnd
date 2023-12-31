import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./products.css";
import "./moviles.css";
export const Products = () => {
    const {data, buyProducts} = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="item" key={product.id}>
                <figure>
                    <img src={product.img} alt="img-product-card"/>
                </figure>
                <div class="info-product">
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <a href="">INFO</a>
                    <button onClick={() => buyProducts(product)}>Buy</button>
                </div>
            </div>
        );
    });
};
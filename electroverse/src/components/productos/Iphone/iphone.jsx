import './iphone.css'; 
import iphone13ProMax from '../../../multimedia/iphone13ProMax.jpg'

export default function Iphone() {
    return (
        <div id='bodyMoviles'>
            <div class="body">
                <div class="container-items">
                    <div class="item">
                        <figure>
                            <img src={iphone13ProMax} alt="producto"/>
                        </figure>
                        <div class="info-product">
                            <h2>Iphone 13 Pro Max</h2>
                            <p class="price">usd$1000</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    

                    <div class="item">
                        <figure>
                            <img src={iphone13ProMax} alt="producto"/>
                        </figure>
                        <div class="info-product">
                            <h2>Iphone 13 Pro Max</h2>
                            <p class="price">$80</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={iphone13ProMax} alt="ipad 8th"/>
                        </figure>
                        <div class="info-product">
                            <h2>Iphone 13 Pro Max</h2>
                            <p class="price">usd$500</p>
                            <a href="">INFO</a>
                            <button class="button-add-cart">Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={iphone13ProMax} alt="Airpods Pro"/>
                        </figure>
                        <div class="info-product">
                            <h2>Iphone 13 Pro Max</h2>
                            <p class="price">usd$120</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={iphone13ProMax} alt="S22"/>
                        </figure>
                        <div class="info-product">
                            <h2>Iphone 13 Pro Max</h2>
                            <p class="price">usd$800</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
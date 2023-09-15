import './xiaomi.css'; 
import xiaomiNote10s from '../../../multimedia/xiaomiNote10S.jpg'

export default function Xiaomi() {
    return (
        <div id='bodyMoviles'>
            <div class="body">
                <div class="container-items">
                    <div class="item">
                        <figure>
                            <img src={xiaomiNote10s} alt="producto"/>
                        </figure>
                        <div class="info-product">
                            <h2>Xiaomi Note 10s</h2>
                            <p class="price">usd$1000</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    

                    <div class="item">
                        <figure>
                            <img src={xiaomiNote10s} alt="producto"/>
                        </figure>
                        <div class="info-product">
                            <h2>Xiaomi Note 10s</h2>
                            <p class="price">$80</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={xiaomiNote10s} alt="ipad 8th"/>
                        </figure>
                        <div class="info-product">
                            <h2>Xiaomi Note 10s</h2>
                            <p class="price">usd$500</p>
                            <a href="">INFO</a>
                            <button class="button-add-cart">Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={xiaomiNote10s} alt="Airpods Pro"/>
                        </figure>
                        <div class="info-product">
                            <h2>Xiaomi Note 10s</h2>
                            <p class="price">usd$120</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={xiaomiNote10s} alt="S22"/>
                        </figure>
                        <div class="info-product">
                            <h2>Xiaomi Note 10s</h2>
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
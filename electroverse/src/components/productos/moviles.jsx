import './slider.css';
import galaxy_s22 from '../../multimedia/galaxy-s22-recortado.jpg'

export default function moviles() {
    return (
        <div id='body'>
            <div class="body">

            
                <div class="container-items">

                    <div class="item">
                        <figure>
                            <img src={galaxy_s22} alt="producto"/>
                        </figure>
                        <div class="info-product">
                            <h2>SAMSUNG</h2>
                            <p class="price">usd$1000</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    

                    <div class="item">
                        <figure>
                            <img src={galaxy_s22} alt="producto"/>
                        </figure>
                        <div class="info-product">
                            <h2>SAMSUNG</h2>
                            <p class="price">$80</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={galaxy_s22} alt="ipad 8th"/>
                        </figure>
                        <div class="info-product">
                            <h2>SAMSUNG</h2>
                            <p class="price">usd$500</p>
                            <a href="">INFO</a>
                            <button class="button-add-cart">Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={galaxy_s22} alt="Airpods Pro"/>
                        </figure>
                        <div class="info-product">
                            <h2>SAMSUNG</h2>
                            <p class="price">usd$120</p>
                            <a href="">INFO</a>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>


                    <div class="item">
                        <figure>
                            <img src={galaxy_s22} alt="S22"/>
                        </figure>
                        <div class="info-product">
                            <h2>SAMSUNG</h2>
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
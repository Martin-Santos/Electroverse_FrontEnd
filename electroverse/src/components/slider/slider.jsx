import './slider.css';
import iphone_x from '../../multimedia/iphone_x.jpg';
import airpods from '../../multimedia/airpods.jpg';
import ipad from '../../multimedia/ipad.jpg';
import macbook from '../../multimedia/macbook.jpg';

export default function Slider() {
    return (
        <div id='body'>
			<div className="slider">

				<ul>
					<li><img src={iphone_x} alt=""/></li>
					<li><img src={airpods} alt=""/></li>
					<li><img src={ipad} alt=""/></li>
					<li><img src={macbook} alt=""/></li>
				</ul>

			</div>
			<div class="botonesmain">
				<button>Más Comprados</button>
			</div>
			<div class="containerMasComprados">
					<div class="item">
						
						<div class="masComprados">
							<h2>SAMSUNG</h2>
						</div>
					</div>

					<div class="item">
                        <div class="masComprados">
                            <h2>SAMSUNG</h2>
                        </div>
                    </div>
					<div class="item">
                        <div class="masComprados">
                            <h2>SAMSUNG</h2>
                        </div>
                    </div>

			</div>
		</div>


    )
}
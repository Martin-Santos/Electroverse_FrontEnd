import './slider.css';
import iphone_x from '../../multimedia/iphone_x.jpg';

export default function Slider() {
    return (
        <div>
			<div class="slider">

				<ul>
					<li><img src={iphone_x} alt=""/></li>
					<li><img src="./multimedia/airpods.jpg" alt=""/></li>
					<li><img src="./multimedia/ipad.jpg" alt=""/></li>
					<li><img src="./multimedia/macbook.jpg" alt=""/></li>
				</ul>

			</div>
			<div class="botonesmain">
				<button>Más Comprados</button>
			</div>
		</div>


    )
}
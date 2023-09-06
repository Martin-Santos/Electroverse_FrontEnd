import './slider.css';
import iphone_x from '../../multimedia/iphone_x.jpg';
import airpods from '../../multimedia/airpods.jpg';
import ipad from '../../multimedia/ipad.jpg';
import macbook from '../../multimedia/macbook.jpg';
import samsungS22 from '../../multimedia/galaxy-s22-recortado.jpg'
import iphone12 from '../../multimedia/iphone12.jpg'
import xiaomiNote10S from '../../multimedia/xiaomiNote10S.jpg'
import xiaomi10pro from '../../multimedia/xiaomi10pro.png'
import realme from '../../multimedia/realme.jpg'
import iphoneXR from '../../multimedia/iphoneXR.jpg'
import samsungS23Ultra from '../../multimedia/samsungS23Ultra.jpg'
import { Link } from 'react-router-dom';

export default function Slider() {
    return (
        <div id='bodySlider'>
			<div className="slider">

				<ul>
					<li><img src={iphone_x} alt=""/></li>
					<li><img src={airpods} alt=""/></li>
					<li><img src={ipad} alt=""/></li>
					<li><img src={macbook} alt=""/></li>
				</ul>

			</div>
			<div class="botonMasComprados">
				<button><h3>Más Comprados</h3></button>
			</div>
			<div className='itemsMasComprados'>
				<div class="containerMasComprados">
					
						<div class="cuadro">
							<Link to="/moviles" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>SAMSUNG</h2>
										<img src={samsungS23Ultra} alt="" />
									</div>
								</div>
							</Link>
						</div>
					

						<div class="cuadro">
							<Link to="/iphone" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>APPLE</h2>
										<img src={iphoneXR} alt="" />
									</div>
								</div>
							</Link>
						</div>

						<div class="cuadro">
							<Link to="/xiaomi" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>XIAOMI</h2>
										<img src={xiaomiNote10S} alt="" />
									</div>
								</div>
							</Link>
						</div>

						<div class="cuadro">
							<Link to="/moviles" className="linkTitle">
								<div>
									<div class="masComprados">
										<h2>REALME</h2>
										<img src={realme} alt="" />
									</div>
								</div>
							</Link>
						</div>

				</div>

				<div class="botonMasComprados">
					<button><h3>Ofertas</h3></button>
				</div>

				<div className='itemsOfertas'>
					<div className='itemOfertas'>
						<Link to="/moviles" className="linkTitle">
							<figure>
								<img src={samsungS22} alt="" />
							</figure>
							<div className='info-oferta'>
								<h2> 15% en SAMSUNG</h2>
							</div>
						</Link>
					</div>
					
					<div className='itemOfertas'>
						<Link to='/iphone' className="linkTitle">
							<figure>
								<img src={iphone12} alt="" />
							</figure>
							<div className='info-oferta'>
								<h2> 5% en APPLE</h2>
							</div>
						</Link>
					</div>

					<div className='itemOfertas'>
						<Link to='/xiaomi' className="linkTitle">
							<figure>
								<img src={xiaomi10pro} alt="" />
							</figure>
							<div className='info-oferta'>
								<h2>25% en XIAOMI</h2>
							</div>
						</Link>
					</div>
				</div>
			</div>
			
		</div>


    )
}
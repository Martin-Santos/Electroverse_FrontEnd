import './header.css';
import imglogo from '../../multimedia/imglogo.png';
import { Link } from 'react-router-dom';
import TotalItems from '../CartContent/TotalItems';
import { useContext, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import {TextField,Autocomplete} from '@mui/material';
import { setup } from './Algorithm-predictions/predicts';


export default function Header() {
	const { cart } = useContext(dataContext);

	useEffect(() => {
		setup();
	}, []);
	
    return (
		<div id='body'>
		
			<header>
				<div className="header_superior">

					<div className="navbar">
						<Link to="/" className="linkTitle">
							<div className="logo-title">
								<img className="logo" src={imglogo} alt="logo empresa" />
								<h1 className="title">ELECTROVERSE</h1>	
							</div>
						</Link>
					</div>

					{/* <div className="search">
						<input type="search" placeholder="¿Que desea buscar?" />
						<div className="icon-search">
							<a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
						</div>
					</div> */}
					<form className='search'>
						<TextField id="pred_features" label="Products" />
						<TextField id="pred_labels" disabled label="Products" />
					</form>
					
					

					<div className="container-icon">
						<div className="icon-cart">
							<Link to="/cart">
								<span className="material-symbols-outlined">
									shopping_cart
								</span>
								{cart.length > 0 ? <TotalItems/> : null}
							</Link>
						</div>
						<div className="icon-user">
							<Link to="/login">
								<span className="material-symbols-outlined">
									person
								</span>	
							</Link>
						</div>	
					</div>
					
				</div>
				

				<div className="container__menu">
					<div className="menu">
						<input type="checkbox" id="check__menu"/>
						<label id="#label__check" for="check__menu">
							<i className="fa-solid fa-bars icon__menu" ></i>
						</label>
						<nav>
							<ul>
								<li><Link to="/">home</Link></li>
								<li><Link to="/moviles">TVs</Link>
									<ul>
										<li><a href="#">Samsung</a></li>
										<li><a href="#">Sony</a></li>
										<li><a href="#">LG</a></li>
										<li><a href="#">TCL</a></li>
										<li><a href="#">Philips</a></li>
									</ul>
								</li>
								<li><Link to="/moviles">Productos</Link>
									<ul>
										<li><Link to="/moviles">Samsung</Link></li>
										<li><Link to="/iphone">Apple</Link></li>
										<li><Link to="/xiaomi">Xiaomi</Link></li>
										<li><a href="#">Realme</a></li>
										
									</ul>
								</li>
								<li><Link to="/moviles">Electrodomesticos</Link></li>
								{/* <li><a href="#">Soporte</a></li>
								<li><a href="#">Ayuda</a></li> */}
							</ul>
						</nav>

					</div>
				</div>

			</header>
		</div>


    )
}
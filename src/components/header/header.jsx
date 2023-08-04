import './header.css';

export default function Header() {
    return (
        <header>
			<div class="header_superior">

				<div class="navbar">
					<div class="logo-title">
						<img class="logo" src="./multimedia/imglogo.png" alt="logo empresa" />
						<a href="./index.html" >
						<h1 class="title">ELECTROVERSE</h1>
						</a>
					</div>
				</div>

				<div class="search">
					<input type="search" placeholder="¿Que desea buscar?" />
					<div class="icon-search">
						<a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
					</div>
				</div>
				

				<div class="container-icon">
					<div class="icon-cart">
						<a href="./carrito.html">
							<span class="material-symbols-outlined">
								shopping_cart
							</span>
						</a>
					</div>
					<div class="icon-user">
						<a href="./usuario.html">
							<span class="material-symbols-outlined">
								person
							</span>	
						</a>
					</div>	
				</div>
				
			</div>
			

			<div class="container__menu">
				<div class="menu">
					<input type="checkbox" id="check__menu"/>
					<label id="#label__check" for="check__menu">
						<i class="fa-solid fa-bars icon__menu" ></i>
					</label>
					<nav>
						<ul>
							<li><a href="./index.html">Home</a></li>
							<li><a href="#">TVs</a>
								<ul>
									<li><a href="#">Samsung</a></li>
									<li><a href="#">Sony</a></li>
									<li><a href="#">LG</a></li>
									<li><a href="#">TCL</a></li>
									<li><a href="#">Philips</a></li>
								</ul>
							</li>
							<li><a href="./moviles.html">Celulares</a>
								<ul>
									<li><a href="#">Samsung</a></li>
									<li><a href="#">Apple</a></li>
									<li><a href="#">Xiaomi</a></li>
									<li><a href="#">Motorola</a></li>
									
								</ul>
							</li>
							<li><a href="#">Electrodomesticos</a></li>
							<li><a href="#">Soporte</a></li>
							<li><a href="#">Ayuda</a></li>
						</ul>
					</nav>

				</div>
			</div>

		</header>


    )
}
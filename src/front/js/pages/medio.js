import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from "react-bootstrap/Carousel";

export const Medio = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<h1 className="text-primary">Paquete Medio</h1>
			<div>
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://p4.wallpaperbetter.com/wallpaper/977/169/102/table-holiday-wedding-decor-wallpaper-preview.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Medio</h3>
							<p />
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://p4.wallpaperbetter.com/wallpaper/105/2/530/the-sky-clouds-balls-joy-wallpaper-preview.jpg"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://s1.best-wallpaper.net/wallpaper/m/1809/Colorful-balloons-clouds-sky_m.webp"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div>
					<p className="text-center mt-5">
						<ul>
							<li>
								<em>Plato fuerte, ensalada proteina y carbohidrato</em>
							</li>
							<li>
								<em>Bebidas naturales</em>
							</li>
							<li>
								<em>Postre:Cheesecake o Tres leches</em>
							</li>
							<li>
								<em>Decoracion</em>
							</li>
							<li>
								<em>Mesas, Sillas, Manteles y centros de mesa</em>
							</li>
							<li>
								<em>DJ</em>
							</li>
							<li>
								<em>Cubre la totalidad del evento</em>
							</li>
						</ul>
						<button type="button" className="btn btn-primary btn-sm">
							Añadir
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

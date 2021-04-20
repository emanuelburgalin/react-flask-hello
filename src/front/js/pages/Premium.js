import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/Premium.scss";

export const Premium = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1 className="text-primary">Paquete Premiun</h1>
			<div>
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://p4.wallpaperbetter.com/wallpaper/977/169/102/table-holiday-wedding-decor-wallpaper-preview.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Premiun</h3>
							<p>Disfruta al maximo</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.roccotroyani.com/wp-content/uploads/2018/11/blog01.jpg"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Premiun</h3>
							<p>El mejor paquete de eventos</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.torrerosa.com/wp-content/uploads/2019/11/CartaCocteles2019.jpg"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Premium</h3>
							<p>La mejor experiencia</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div>
					<p className="text-center mt-5">
						<ul>
							<li>
								<em>Bocadillos</em>
							</li>
							<li>
								<em>Plato fuerte, ensalada proteina y carbohidrato</em>
							</li>
							<li>
								<em>Bebidas naturales y alcohlica</em>
							</li>
							<li>
								<em>Postre:Tiramisu, Cheesecake o Alfajores</em>
							</li>
							<li>
								<em>Decoracion</em>
							</li>
							<li>
								<em>Mesas, Sillas, Manteles</em>
							</li>
							<li>
								<em>Evento tematizado</em>
							</li>
							<li>
								<em>Recuerdos del evento</em>
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

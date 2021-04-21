import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Carousel from "react-bootstrap/Carousel";

export const Servicios = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<h1 className="text-primary">Servicios</h1>
			<div>
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.evento.love/blog/wp-content/uploads/2020/03/decoracion-mesa-boda-evento-4.png"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Evento</h3>
							<p>Disfruta al maximo</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.evento.love/blog/wp-content/uploads/2020/03/decoracion-mesa-boda-evento-3.png"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Evento</h3>
							<p>Lo mejor en eventos</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.evento.love/blog/wp-content/uploads/2020/03/flores.png"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Evento</h3>
							<p>La mejor experiencia</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="container text-center mt-5">
				<p className="h1">Servicio de organizacion de eventos</p>
				<p className="text-center mt-5">
					<ul>
						<li>
							<em>
								ofrecemos Servicio intregal en la organizacion, coordinacion y planificacion de su
								evento. Personalizaremos su evento a medida para hacer realidad su sueño y el de los
								tuyos. Nos encantara escucharte y ayudarte a que ese evento se convierta en un recuerdo
								unico y especial.
							</em>
						</li>
						<li>
							<em>
								Los acesoraremos con las mejores paquetes de eventos y servicios unicos con los mejores
								proveedores
							</em>
						</li>
					</ul>
				</p>
				<p className="h1">Servicios a ofrecer</p>

				<p className="h6">Organizacion intregal de su evento</p>
				<p className="h6">Diseño y decoracion de espacios</p>
				<p className="h6">Planificacion de tu evento desde el inicio</p>
				<div className="container text-center mt-5">
					<p className="h1">Detalles</p>
					<p className="text-center mt-5">
						<ul>
							<li>
								<em>Tipos paquetes de eventos</em>
							</li>
							<li>
								<em>Ambientacion e iluminacion</em>
							</li>
							<li>
								<em>Espectaculos</em>
							</li>
							<li>
								<em>Los mejores proveedores</em>
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};

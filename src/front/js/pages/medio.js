import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Medio = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1 className="text-primary">Paquete Medio</h1>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://p4.wallpaperbetter.com/wallpaper/977/169/102/table-holiday-wedding-decor-wallpaper-preview.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://p4.wallpaperbetter.com/wallpaper/105/2/530/the-sky-clouds-balls-joy-wallpaper-preview.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://s1.best-wallpaper.net/wallpaper/m/1809/Colorful-balloons-clouds-sky_m.webp"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
			<div>
				<p className="text-center mt-5">
					<ul>
						<li>
							<em>Plato fuerte, ensalada proteina y carbohidrato</em>
						</li>
						<li>Bebidas naturales</li>
						<li>Postre:Cheesecake o Tres leches</li>
						<li>Decoracion</li>
						<li>Mesas, Sillas, Manteles y centros de mesa</li>
						<li>DJ</li>
						<li>Cubre la totalidad del evento</li>
					</ul>
					<button type="button" className="btn btn-primary btn-sm">
						Añadir
					</button>
				</p>
			</div>
		</div>
	);
};

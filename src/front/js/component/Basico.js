import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/Basico.scss";

export function Basico(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<h1 className="text-primary">
				Basico
				{props.name}
			</h1>
			<div>
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://olimpsport.com/media/mageplaza/blog/post/image//s/w/swiateczna-dieta-lekkostrawne-posilki-przy-wigilijnym-stole_4.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
							src="https://www.bezzia.com/wp-content/uploads/2017/05/batidos-contra-dolor-cabeza.jpg.webp"
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
								<em>
									Plato fuerte, ensalada proteina y carbohidrato
									{props.line_1}
								</em>
							</li>
							<li>
								<em>
									Bebidas naturales
									{props.line_2}
								</em>
							</li>
							<li>
								<em>
									Postre:Cheesecake o Tres leches
									{props.line_3}
								</em>
							</li>
							<li>
								<em>
									Decoracion
									{props.line_4}
								</em>
							</li>
							<li>
								<em>
									Mesas, Sillas, Manteles y centros de mesa
									{props.line_5}
								</em>
							</li>
							<li>
								<em>
									DJ
									{props.line_6}
								</em>
							</li>
							<li>
								<em>
									Cubre la totalidad del evento
									{props.line_7}
								</em>
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

	Basico.propTypes = {
		index: PropTypes.number,
		name: PropTypes.string,
		line_1: PropTypes.string,
		line_2: PropTypes.string,
		line_3: PropTypes.string,
		line_4: PropTypes.string,
		line_5: PropTypes.string,
		line_6: PropTypes.string,
		line_7: PropTypes.string
	};
}

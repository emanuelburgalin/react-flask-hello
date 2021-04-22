import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";

export const Contacto = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container text-center mt-5">
			<h1 className="p-3 mb-2 bg-info text-white">Contactanos</h1>
			<div>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://image.freepik.com/foto-gratis/empresario-llamando-al-telefono-oficina-concepto-contacto_220873-586.jpg"
							height="400"
							width="1000"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Contactanos</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://image.freepik.com/foto-gratis/hombre-negocios-hablando-telefono-celular-cerca-centro-negocios_1150-3002.jpg"
							height="400"
							width="1000"
							alt="First slide"
						/>

						<Carousel.Caption>
							<h3>El mejor servicios</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://image.freepik.com/foto-gratis/chica-negocios-llamando-al-telefono-oficina_220873-1239.jpg"
							height="400"
							width="1000"
							alt="First slide"
						/>

						<Carousel.Caption>
							<h3>Los mejores eventos</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div>
				<CardDeck>
					<Card className="border border-white">
						<div className="container text-center mt-5">
							<img src="https://img.icons8.com/small/452/secured-letter.png" width="100" height="100" />
						</div>
						<Card.Body>
							<Card.Title>Escribanos a:</Card.Title>
							<Card.Text>CateringServices@gmail.com</Card.Text>
						</Card.Body>
					</Card>
					<Card className="border border-white">
						<div className="container text-center mt-5">
							<img
								src="http://assets.stickpng.com/images/5a452598546ddca7e1fcbc80.png"
								width="100"
								height="100"
							/>
						</div>
						<Card.Body>
							<Card.Title>Llamanos</Card.Title>
							<Card.Text>Llámenos sin costo desde su celular al operador 800-000-09378</Card.Text>
						</Card.Body>
					</Card>
					<Card className="border border-white">
						<div className="container text-center mt-5">
							<img src="https://img.icons8.com/small/452/whatsapp.png" width="100" height="100" />
						</div>
						<Card.Body>
							<Card.Title>WhatsApp</Card.Title>
							<Card.Text>Contáctenos vía WhatsApp al +506 9081-1199, atención las 24 horas.</Card.Text>
						</Card.Body>
					</Card>
				</CardDeck>
			</div>
			<div>
				<Card className="border border-white">
					<Card.Body />
					<Card.Footer className="text-muted">2 days ago</Card.Footer>
				</Card>
			</div>
		</div>
	);
};

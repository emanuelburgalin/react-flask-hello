const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			paquetes: [
				{
					name: "Paque basico",
					linea_1: "Plato fuerte, ensalada proteina y carbohidrato",
					linea_2: "	Bebidas naturales",
					linea_3: "Postre:Cheesecake o Tres leches",
					linea_4: "Decoracion",
					linea_5: "Mesas, Sillas, Manteles y centros de mesa",
					linea_6: "DJ",
					linea_7: "Cubre la totalidad del evento"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

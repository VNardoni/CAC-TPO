fetch('alimentos.json')
.then(response => response.json())
.then(data => {

	//CREO EL ARRAY DE ALIMENTOS
	let arrayAlimentos = document.getElementsByClassName("alimentos");
	

	// RECORRO TODOS LOS ELEMENTOS PARA INSERTAR LOS DATOS

	for (let i = 0; i < arrayAlimentos.length; i++) {
		nameAlimento = arrayAlimentos[i].querySelector("h3").innerHTML;
		nameAlimento = nameAlimento.toLowerCase();
		
		// RECORRO EL JSON PARA OBTENER SUS DATOS

		for (let j = 0; j < data.alimentos.length; j++) {
			alimentoJson = (data.alimentos[j].nombre).toLowerCase();

			if (nameAlimento == alimentoJson) {
				calorias = data.alimentos[j].calorias;
				grasa = data.alimentos[j].grasa;
				carbohidratos = data.alimentos[j].carbohidratos;
				proteinas = data.alimentos[j].proteinas;

				elementIN = (arrayAlimentos[i].getElementsByClassName("informacion_nutricional"));
				console.log(elementIN[0]);
				
				for (let k = 0; k < 4; k++) {
					const p = document.createElement("p");
					if (k == 0) {
						p.textContent = "CALORIAS: " + calorias;
					} else if (k == 1) {
						p.textContent = "GRASA: " + grasa;
					} else if (k == 2) {
						p.textContent = "CARBOHIDRATOS: " + carbohidratos;
					} else {
						p.textContent = "PROTEINAS: " + proteinas;
					}
					elementIN[0].appendChild(p);
				}
			}		
		}	
	} 
});




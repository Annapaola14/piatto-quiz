let piatti = [
	{
		nome: "popizza",
		foto: "static/images/popizze.jpg",
		descrizione: "sei proprio una popizza della nonna di Anna",
		valore: 50,
	},
	{
		nome: "cavolo",
		foto: "static/images/cavolo.jpg",
		descrizione: "Sei un bel cavolo della nonna di Gabri",
		valore: 30,
	},
	{
		nome: "Cozza",
		foto: "static/images/cozza.jpg",
		descrizione: "Sei proprio una cozza della nonna Fabri",
		valore: 20,
	},
];

let punteggioF = localStorage.getItem("punteggio");
let personaObj = localStorage.getItem("person");
personaObj = JSON.parse(personaObj);


function chePiattoSei(numero) {
	let distanza20 = Math.abs(numero - piatti[2].valore);
	let distanza30 = Math.abs(numero - piatti[1].valore);
	let distanza50 = Math.abs(numero - piatti[0].valore);

	//ritornare l'url dell'immagine a cui si è più vicino

	if (distanza20 < distanza30 && distanza20 < distanza50) {
		return 20;
	} else if (distanza50 < distanza20 && distanza50 < distanza30) {
		return 50;
	} else {
		return 30;
	}
}

let pulsanteRivelatore = document.querySelector("a");

pulsanteRivelatore.addEventListener("click", function (e) {
	e.preventDefault();

	let piattoImmagine = chePiattoSei(punteggioF);

	document.body.innerHTML = "";


	if (piattoImmagine === 50) {
		let immagine = document.createElement("img");
		immagine.src = piatti[0].foto;
		document.body.appendChild(immagine);

		let descrizione = document.createElement("p");
		descrizione.textContent = piatti[0].descrizione;
		document.body.appendChild(descrizione);
	} else if (piattoImmagine === 30) {
		let immagine = document.createElement("img");
		immagine.src = piatti[1].foto;
		document.body.appendChild(immagine);

		let descrizione = document.createElement("p");
		descrizione.textContent = piatti[1].descrizione;
		document.body.appendChild(descrizione);
	} else {
		let immagine = document.createElement("img");
		immagine.src = piatti[2].foto;
		document.body.appendChild(immagine);

		let descrizione = document.createElement("p");
		descrizione.textContent = piatti[2].descrizione;
		document.body.appendChild(descrizione);
	}
});

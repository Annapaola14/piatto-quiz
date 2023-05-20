let punteggio = 0;

let questions = [
	{
		question: "Che ne pensi delle popizze",
		answers: [
			{
				text: "Buone",
				value: 10,
			},
			{
				text: "Indifferente",
				value: 0,
			},
			{
				text: "Disgustose",
				value: -10,
			},
		],
	},
	{
		question: "Ti piace patate riso e cozze?",
		answers: [
			{
				text: "Tanto",
				value: -10,
			},
			{
				text: "Preferisco mangiare in bianco",
				value: 5,
			},
			{
				text: "mangio solo cozze come un drogato",
				value: 20,
			},
		],
	},
	{
		question: "Ti piacciono i cavoli?",
		answers: [
			{
				text: "buonissimi",
				value: -10,
			},
			{
				text: "per niente",
				value: 5,
			},
			{
				text: "preferisco la verza",
				value: 20,
			},
		],
	},
	{
		question: "cosa preferisci fare?",
		answers: [
			{
				text: "dormire",
				value: -10,
			},
			{
				text: "saltellare",
				value: 5,
			},
			{
				text: "mangiare le cozze correndo",
				value: 20,
			},
		],
	},
	{
		question: "Cosa ti rende più felice?",
		answers: [
			{
				text: "Riso patate e cozze della nonna di Fabrizio",
				value: -10,
			},
			{
				text: "Le popizze della nonna di Anna",
				value: 5,
			},
			{
				text: "La pasta coi cavoli della nonna di Gabri",
				value: 20,
			},
		],
	},
];

let questionSpan = document.querySelector(".question");
let answer1 = document.querySelector(".answer-1");
let answer2 = document.querySelector(".answer-2");
let answer3 = document.querySelector(".answer-3");
let cambiaDomanda = document.querySelector(".button-74");

/*
nella funzione showQuestions:

    - generare casualmente un numero casuale in base alla lunghezza dell'array, per scelgliere una domanda casuale
    - a questo punto scrivere la domanda e le 3 risposte
    - eliminare l'oggetto dall'array
    - ripetere la sequenza
*/

function showQuestions(arrayQuestions) {
	questionSpan.innerHTML = arrayQuestions[0].question;
	answer1.innerHTML = arrayQuestions[0].answers[0].text;
	answer2.innerHTML = arrayQuestions[0].answers[1].text;
	answer3.innerHTML = arrayQuestions[0].answers[2].text;

	let checkedInput = document.querySelector('input[name="question-1"]:checked');

	if (checkedInput) {
		let selectedValue = parseInt(checkedInput.value);
		console.log("Selected value:", selectedValue);
		punteggio = punteggio + selectedValue;
	} else {
		console.log("No input selected");
	}

	arrayQuestions.shift();

	//devi anche registrare nella variabile punteggio, il punteggio della singola domanda che sei andato a cliccare
}

cambiaDomanda.addEventListener("click", function (e) {
	e.preventDefault();

	document.querySelector("h2").classList.remove("fuoriTitolo");
	let labels = document.querySelectorAll("label");
	labels.forEach(function (label) {
		label.classList.remove("fuori");
	});

	if (questions.length === 0) {
		cambiaDomanda.remove();
	} else {
		showQuestions(questions);
	}
});

let formFood = document.querySelector("form");

formFood.addEventListener("submit", function (e) {
	e.preventDefault();

	localStorage.setItem("punteggio", punteggio);
	pageRedirect()
});

function pageRedirect() {
	window.location.replace("risultato.html");
}

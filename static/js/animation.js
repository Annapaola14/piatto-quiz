
let labels = document.querySelectorAll(".label");
labels.forEach((label) => {
	let chars = label.textContent.split("");
	label.innerHTML = "";
	chars.forEach((char) => {
		label.innerHTML += `<span>${char === " " ? "&nbsp" : char}</span>`;
	});
});

let form = document.querySelector("form");

let btn = document.querySelector("#btn");
let btnText = document.querySelector("#btnText");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	btnText.innerHTML = "Thanks";
	btn.classList.add("active");
});
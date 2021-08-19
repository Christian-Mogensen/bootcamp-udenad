// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
// document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	const hilsen = `Hej med dig, `;
	const navne = ["Chris", "Sheila", "Ozlem", "Vagn", "Ona"]
	let navn = navne[~~(Math.random()*navne.length)];

	const text = document.querySelector("em");
	function hils(navn){
		return text.textContent = `${hilsen} ${navn}`;
		// return `Hej med dig, ${navn}`;
	}
	var hilsenFraOle = hils(navn);
	console.log(hilsenFraOle);
	// hils("Christian");

// }); 
// Afslutter: DOMContentLoaded
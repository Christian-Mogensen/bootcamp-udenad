// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
// document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	setInterval(
		()=> {
	const besked = `Hej med dig, `;
	const navne = ["Chris", "Sheila", "Ozlem", "Vagn", "Ona"]
	const navn = navne[~~(Math.random()*navne.length)];
	const text = document.querySelector("em");

	return text.textContent = `${besked} ${navn}`;
}
, 1500);

// }); 
// Afslutter: DOMContentLoaded
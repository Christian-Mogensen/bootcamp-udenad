// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
// document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	const hilsen = `Hej med dig, `;
	
	function hils(navn){
		console.log(hilsen, `${navn}`);
	}
	
	hils("Christian");

// }); 
// Afslutter: DOMContentLoaded
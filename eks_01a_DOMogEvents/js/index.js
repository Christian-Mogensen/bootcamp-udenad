// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

  // skriv din kode her... Christian oprindelige Loesning
  // let counterDisplay = document.querySelector('#text-count');
  // let buttonPlus = document.querySelector('#btn-count-increase');
  // let buttonMinus = document.querySelector('#btn-count-decrease');

  // buttonPlus.addEventListener('click', plus);
  // buttonMinus.addEventListener('click', minus);

  // let count = 0;
  // counterDisplay.textContent = 0;

  // // var limitPlus = 10;
  // // var limitMinus = 0;

  // function plus(){

  // 	if (count < 10){
  // 		count++;
  // 		counterDisplay.textContent = count;
  // buttonPlus.disabled = true;
  // counterDisplay.textContent = 10;
  // 		return;
  // 	}
  // 	else if (count > 10){
  // 		buttonPlus.disabled = false;
  // 	}
  // }
  // function minus(){

  // 	if (count > 0){
  // 		count--;
  // 		counterDisplay.textContent = count;
  // buttonMinus.disabled = true;
  // counterDisplay.textContent = 0;
  // 		return;
  // 	}
  // 	else if (count > 0){
  // 		buttonMinus.disabled = false;
  // 		return
  // 	}
  // }

  // Gennemgang med klassen

  // stack af variabler
  // text-count starter med 5
  let number = 5;
  // hiver fat i domen med de noedvendige elementer
  let textCountElement = document.querySelector("#text-count");
  let plusButton = document.querySelector("#btn-count-increase");
  let minusButton = document.querySelector("#btn-count-decrease");
  
  // en function vi bruger til at opdatere tallet
  function updateNumber() {
    textCountElement.textContent = number;
  }
  // trigger funktionen foerste gang med 5, saa vi kan bruger den fremadrettet
  updateNumber();
  // funktion der tilfoejer 1 og har en begraenser til 10
// eventlistener til plusButton, der trigger en anonym funktion
plusButton.addEventListener("click", () => {
	// er betingelsen, som begraenser til 10
    if (number < 10) {
		// assignment operatoren
		number++;
		// funktionen som opdatere tallet
		updateNumber();
    }
});
// funktion der traekker 1 fra, samt en begraenser til 0
// eventlistener til minusButton, der trigger en anonym funktion
minusButton.addEventListener("click", () => {
    // er betingelsen, som begraenset til 0
    if (number > 0) {
      // assignment operatoren
      number--;
      // funktionen som opdatere tallet
      updateNumber();
    }
  });
}); // Afslutter: DOMContentLoaded

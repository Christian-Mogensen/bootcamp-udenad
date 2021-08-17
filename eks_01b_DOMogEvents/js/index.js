// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

  // stack af variabler
  // text-count starter med 5
  let startNumber = 5;
  let number = startNumber;
  let minimum = 0;
  let maximum = 15;
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
    if (number < maximum) {
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
    if (number > minimum) {
      // assignment operatoren
      number--;
      // funktionen som opdatere tallet
      updateNumber();
    }
  });
}); // Afslutter: DOMContentLoaded
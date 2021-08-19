// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // stack af variabler
  // text-count starter med 5
  let startNumber = 5;
  let number = startNumber;
  let minimum = 0;
  let maximum = 15;

  let textCountElement = document.querySelector("#text-count");
  let plusButton = document.querySelector("#btn-count-increase");
  let minusButton = document.querySelector("#btn-count-decrease");

  function updateNumber() {
    textCountElement.textContent = number;
  }
  updateNumber();

//   function calcNumber(event){
// 	//   console.log(event);
// 	  if(event.target.attributes.id.nodeValue === "btn-count-increase"){
// 		  if(number < maximum){
// 		  number++;
// 		  updateNumber();
// 		}
// 	  } else if (event.target.attributes.id.nodeValue === "btn-count-decrease") {
// 		if(number > minimum){  
// 		number--;
// 		  updateNumber();
// 		}
// 	  }
//   }
function calcNumber(direction){
	if(direction === "inc" && number < maximum){
		number++;
		updateNumber();
	}
	if(direction === "dec" && number > minimum){
		number--;
		updateNumber();
	}
}

plusButton.addEventListener("click", () => calcNumber("inc"));

minusButton.addEventListener("click", () => calcNumber("dec"));

}); // Afslutter: DOMContentLoaded

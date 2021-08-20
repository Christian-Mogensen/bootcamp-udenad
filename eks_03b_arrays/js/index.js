// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // skriv din kode her...
  const disneyFigures = ["Anders", " Fedtmule", " Mickey"];
  const text = document.querySelector("#liste");

  function lokke(array){
  array = disneyFigures.forEach((navn) => {
  text.innerHTML += `<li> ${navn} </li>`;
});
}
lokke();
}); // Afslutter: DOMContentLoaded

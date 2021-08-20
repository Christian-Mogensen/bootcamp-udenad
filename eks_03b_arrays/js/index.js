// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // skriv din kode her...
  const navne = ["Anders", " Fedtmule", " Mickey"];
  const text = document.querySelector("#liste");
  const loekke = array => {
  // array = disneyFigures
  array.forEach((navn) => {
  text.innerHTML += `<li> ${navn} </li>`;
});
}

loekke(navne);
console.log(navne)
navne.push("Lil Yachty", "Dr. Dre", "Eminem")
loekke(navne);
console.log(navne)
}); // Afslutter: DOMContentLoaded

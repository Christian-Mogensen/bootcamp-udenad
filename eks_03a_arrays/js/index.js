// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // skriv din kode her...
  const disneyFigures = ["Anders", " Fedtmule", " Mickey"];
  const text = document.querySelector("#liste");
  i = 0;
  for (let i = 0; i < disneyFigures.length; i++) {
    let disneyNameText = `${disneyFigures[i]}`;
    if (disneyFigures[i].selected) {
      i++;
    }
    text.innerHTML += "<li>" + disneyNameText + "</li>";

    console.log(disneyNameText);
  }


}); // Afslutter: DOMContentLoaded

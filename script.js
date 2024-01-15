let computerOn = "<img src=\"computer-on.png\" width=\"70px\" height=\"50px\" onclick=\"cambia()\">";
let computerOff = "<img src=\"computer-off.png\" width=\"70px\" height=\"50px\" onclick=\"cambia()\">";

const stampaComputer = () => {
    let righe = parseInt(document.getElementById("righe").value);
    let colonne = parseInt(document.getElementById("colonne").value);
    let area = document.getElementById("computer");

    if (righe <= 0 || colonne <= 0) {
        alert("Inserire un numero di righe e/o di colonne maggiore di 0");
    } else {
        area.innerHTML = "";
        for (let i = 0; i < righe; i++) {
            for (let j = 0; j < colonne; j++) {
                area.innerHTML += computerOff;
            }
            area.innerHTML += "<br>";
        }
    }
}

const cambia = () => {
    let immagine = event.target;
    if (immagine.src.match("computer-off.png")) {
        immagine.src = "computer-on.png";
    } else {
        immagine.src = "computer-off.png";
    }
}
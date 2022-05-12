// recupérer un élément par son id
let pikachuType = document.getElementById("pikachu-type");

// récupérer des éléments par leur classe (peu utilisé)
let elementsDeListe = document.getElementsByClassName("list-item");

// récupérer le premier élément correspondant au sélecteur CSS employé
let premiereListe = document.querySelector("nav ul");

// récupérer tous les élements qui correspondent à un sélecteur CSS
let listes = document.querySelectorAll("ul");

// modifier le contenu textuel d'un élément
pikachuType.textContent = "Type: Electrique";

// modifier le contenu HTML d'un élément
listes[0].innerHTML += "<li> Attaque: Tonnerre</li>";
listes[1].innerHTML += "<li> Attaque: Déflagration </li>";

// Accéder aux propriétés/attributs d'un élément
let lien = document.querySelector("a");
lien.href = "https://www.lemonde.fr";

// Ecouteurs d'évènements
let textCombat = document.querySelector("p:last-of-type");

function tonnerre() {
    textCombat.textContent = "C'est super efficace !";
}

function flammeche() {
    textCombat.textContent = "Ce n'est pas très efficace..."
}

let btnGauche = document.querySelector("button");
let btnDroite = document.querySelector("button:nth-of-type(2)");


btnGauche.addEventListener("click", tonnerre);
btnDroite.addEventListener("click", flammeche);


// récupérer TOUS (All) mes lis
let mesLi = document.querySelectorAll(".list-item");
// récupérer mon paragraphe de texte à modifier
let monParagraphe = document.querySelector("p");

// fonction qui colore en rouge le texte
function paintRed(event){
    // event --> objet représentant l'évènement qui s'est déclenché
    // event.target --> propriété contenant l'élément qui a "reçu" l'évènement
    let cibleDeLEvenement = event.target;
    cibleDeLEvenement.classList.toggle("red-text");
    // version raccourcie
    // event.target.classList.toggle("red-text");

    // Liste de tous mes éléments qui ont la classe red-text
    let mesLisSelectionnes = document.querySelectorAll("li.red-text");
    // La longueur de cette liste --> le nombre d'éléments qui ont la classe rest-text
    let nombreDElementsSelectionnes = mesLisSelectionnes.length;
    // Modifier le texte de mon paragraphe en fonction du nombre d'éléments dans ma liste
    monParagraphe.textContent = nombreDElementsSelectionnes +" élément(s) selectionné(s)";


}

// boucle pour associer les écouteurs d'évènements
for (let i = 0; i < mesLi.length; i++) {

    let unLiDeLaListe= mesLi[i];
    // l'écouteur d'évènements ajoute secrètement le paramètre event{} à l'appel de la fonction paintRed
    unLiDeLaListe.addEventListener("click", paintRed);
    // --> paintRed(event)
    // mesLi[i].addEventListener("click", paintRed);
}


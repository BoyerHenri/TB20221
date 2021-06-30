/* Ecouteur sur le bouton */
var ecoute_bouton=document.getElementById("btn");
ecoute_bouton.addEventListener("click",affiche);

/* Fonction */
function affiche() {
    var saisie=document.forms['champ'].elements['valeur'].value;
    console.log(saisie);
    window.alert("Vous avez saisi "+saisie);  
}
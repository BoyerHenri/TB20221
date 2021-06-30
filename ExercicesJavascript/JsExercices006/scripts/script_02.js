/* Choix de la machine sur un chiffre */
var magic_nb=parseInt(Math.random()*100)
var saisie=0;

/* Ecouteur sur le bouton */
var ecoute_bouton=document.getElementById("btn");
ecoute_bouton.addEventListener("click",verif);

/* Fonction */
function verif() {
    var saisie=document.forms['champ'].elements['valeur'].value;
    console.log(magic_nb+" "+saisie);
    /* Verification du chiffre entré */
    if (saisie>magic_nb){
        document.getElementById("lcd").innerHTML="<p style='background-color:red;'>Trop grand !<p>";
    } else if (saisie<magic_nb) {
        document.getElementById("lcd").innerHTML="<p style='background-color:orange;'>Trop petit !<p>";
    } else if (saisie==magic_nb) {
        document.getElementById("lcd").innerHTML="<p style='background-color:green;'>Bingo !<p>";
    }
    /*document.getElementById("lcd").innerHTML="BOUM";*/
}
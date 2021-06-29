let myTableau=[];
let nb=0;
let taille=0;
let total=0;
let moyenne=0;

/*********************************************************************************************** PROGRAMME PRINCIPAL                   **/
/* window.alert("COUCOU");*/
saisie();
affichage();
calculs();

/*********************************************************************************************** SOUS PROGRAMMES                       **/

/* Saisie des valeurs */
function saisie() {
    do {
        nb=window.prompt("No "+taille+" Entrez une valeur"); 
        /* Si Zero, alors sortie */
        if (nb==0) {
            break;
        }
        /* Si pas zero, on incrémente et continue */
        if (nb!=NaN) {
            myTableau[taille]=parseInt(nb);
            taille++;
        }
    }while(nb!=0)
}

/* Affichage */
function affichage () {
    document.write("Il y a "+myTableau.length+" entrées.<br><br>");
    for (lop=0;lop<myTableau.length;lop++){
        document.write(lop+">"+myTableau[lop]+"..."+typeof(myTableau[lop])+"<br>");
    }
    document.write("<br><br>");
}

/*Calculs*/
function calculs(){
    /* Somme */
    for (lop=0;lop<taille;lop++){
        total+=myTableau[lop];
    }
    /* Moyenne */
    moyenne=total/myTableau.length;
    /* Affiche resultats */
    document.write("Somme   ="+total+"<br>");
    document.write("Moyenne ="+moyenne+"<br>")
}
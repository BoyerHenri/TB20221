var tailleTableau=0;

/* Entree de la taille du tableau */
while (tailleTableau==0){
    tailleTableau=window.prompt("Entrez la taille du tableau");
}
var myTableau=[tailleTableau];
document.write("All systems nominals...<br><br>");

/* Entree des valeurs dans le tableau */
for (lop=0;lop<=tailleTableau;lop++) {
    document.write("Données...<br>"); 
    myTableau[lop]=window.prompt("Pour la case "+parseInt(lop)+" entrez une valeur.");
}
document.write("<br><br>Les données rentrées sont :<br><br>");

/* Affichage des données */
for (lop=0;lop<=tailleTableau;lop++) {
    document.write("Case "+parseInt(lop)+"= "+myTableau[lop]+"<br>"
    );
}
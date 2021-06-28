/*
    ****************************************************************************JAVASCRIPT EXCICES***   */
/*  INITIALISATIONS */

/* Appel de fonction selon les exercices et chapitres */

/* Chapitre 7 */
/*
afftexte(); 
operateurs(); 
parite(); 
aged(); 
calc();
*/

/*  ***************************************************************************************************
                                                        EXERCICES
    *************************************************************************************************** */

/* Ex 001 afficher du texte */
function afftexte() {
    var nom;
    var prenom;

    /* Demande du nom */
    nom=window.prompt("Saisissez votre nom");

    /* Demande du prenom */
    prenom=window.prompt("Saisissez votre prénom");

    /* Demande du sexe */
    if (window.confirm("Etes vous un homme ?")==true) {
        window.alert("Bonjour, Monsieur "+nom+" !");    
        }
        else {
        window.alert("Bonjour, Madame "+nom+" !");
        }
        return;
}

/* Ex 002 les operateurs */
function operateurs() {
   var a="100";
   var b=100;
   var c=1.0;
   var d=true;

   document.write("Ceci est une chaine de caractéres "+a+"<br>");
   b--;
   document.write("Nouvelle valeur de b : "+parseInt(b)+"<br>");
   c=c+parseInt(a);
   document.write("Nouvelle valeur de c : "+c+"<br>");
   d=false;
   document.write("Valeur boleene de d : "+d+"<br><br><br>");
   return;
}

/* Ex 003.1 Parité */
function parite() {
    var nombre;
    var modulo;

    nombre=window.prompt("Saisissez un nombre");
    modulo=nombre%2;   
    if (modulo==0){
        document.write(parseInt(nombre)+" ce nombre est pair<br><br>");
    }
    else {
        document.write(parseInt(nombre)+" ce nombre est impair<br><br>");
    }
}

/* Ex 003.2 Age */
function aged() { 
    var age;
    var annee;
    var auj=new Date();
    var an_actuel=auj.getFullYear();

    window.alert(auj);
    document.write("<br><br><br><br> Nous sommes en "+an_actuel+"<br><br>");
    annee=window.prompt("Entrez votre année de naissance :");
    age=an_actuel-annee;

    document.write("Vous avez donc "+age+" ans. <br><br><br>");

    if (age=>18){
        document.write("Vous êtes donc majeur !<br><br>");
    } else {
        document.write("Rentre chez toi, PETIT BOUFFON.<br><br>");
    }
}

/* Ex 003.3 Calculette */
function calc() {
     var nb1;
     var nb2;
     var ope;
     var result;

     /* Entree des chiffres */
     while (isNaN(nb1)) {
        nb1=window.prompt("Entrez un premier chiffre :");
     }
     while (isNaN(nb2)) {
     nb2=window.prompt("Entrez un second chiffre :");
     }
     /*Entree et verification des operateurs */
     var entreecorrecte=0;
     while (entreecorrecte==0) {
        ope=window.prompt("Entrez un operateur + - * ou /");
        switch (ope) {
            case "+":
                result=nb1+nb2;
                entreecorrecte=1;
                break;
            case "-":
                result=nb1-nb2;
                entreecorrecte=1;
                break;
            case "*":
                result=nb1*nb2;
                entreecorrecte=1;
                break;
            case "/":
                if (nb2==0){
                    window.alert("Division par zero, BOUFFON !");
                    result=0;
                    entreecorrecte=2;
                }else if (nb2!=0){
                    result=nb1/nb2;
                    entreecorrecte=1;
                }
                break;
        }
     }    
     /* Affiche le resultat sur la feuille */
     if (entreecorrecte==1) {
        document.write("<br><br>Le resultat de cette opération est : "+parseInt(result));
     } else if (entreecorrecte!=1){
        document.write("<br><br> Aucun resultat affichable, CRETIN !"); 
     }
}
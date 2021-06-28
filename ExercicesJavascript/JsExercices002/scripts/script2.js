/* Selon exo */
var exo=5;
var score=100;

/* Exercice 001*/
if (exo==1) {

    
    var nbsaisie=0;
    var prenom="Abc";

    do {
        nbsaisie++
        prenom=window.prompt(" Saisissez le prénom N° "+parseInt(nbsaisie));
    } while(prenom!="")
    document.write("Fin de boucle");
    
    /* Just for Fun*/
    if (score==0){
        exo++
        document.write("! CHECK !");        
        document.write("<br><br><br><br>Next !");
    }

}

/* Exercice 002 */
if (exo==2) {

    var N;
    var cible;

    while (isNaN(cible)) {
        cible=window.prompt("Entrez un chiffre à atteindre :");
    }
    for (N=0;N<cible;N++) {
        document.write(parseInt(N)+" mouton(s) <br>");
    }
    document.write("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");

     /* Just for Fun*/
     if (score==0){
        exo++
        document.write("! CHECK !");        
        document.write("<br><br><br><br>Next !");
    }

}

/* Exercice 003 */
if (exo==3) {

    var N=0;
    var total=0;
    var moyenne=0;
    var entree0;
    var validation=1;

        while (validation==1) {
            entree=window.prompt(">"+parseInt(N)+"\n Somme :"+parseInt(total)+"\n Moyenne :"+parseInt(moyenne)+"\n Entrez un chiffre :");
            if (entree==0) {
                break;
            }
            /*Calculs*/
            N++;
            entree=parseInt(entree);
            total=total+entree;
            moyenne=parseInt(total/N);
           /* window.alert(N+"");*/
        }  

     /* Just for Fun*/
     if (score==0){
        exo++
        document.write("! CHECK !");        
        document.write("<br><br><br><br>Next !");
    }

}

/* Exercice 004 */
if (exo==4) {

    var i;
    var N;
    var X;
    var total;

    while (isNaN(N) || isNaN(Y)) {
        N=window.prompt("Entrez un chiffre N premiers :");
        Y=window.prompt("Entrez Y le multiple cherché :");
    }
    for (i=0;i<N;i++) {
        total=i*Y
        document.write(parseInt(i)+"x"+parseInt(Y)+"="+parseInt(total)+"<br>");
    }
    document.write("--- END OF LINE ---");

     /* Just for Fun*/
     if (score==0){
        exo++
        document.write("! CHECK !");        
        document.write("<br><br><br><br>Next !");
    }

}

/* Exercice 005 */
if (exo==5){

    var myVar;
    var indexChaine;
    var nblettres;
    var nbvoyelles=0;
    var lop=0;
    var extract;

    myVar=window.prompt("Entrez une chaine de caractéres :");
    nblettres=myVar.length;

    for (lop=0;lop<=nblettres;lop++) {
        extract=myVar.substr(lop,1);
        document.write(parseInt(lop)+extract+"<br>");
        /* Switch sur la variable extract */
        switch (extract) {
            case "a":
                nbvoyelles++;
            break;
            case "e":
                nbvoyelles++;
            break;
            case "i":
                nbvoyelles++;
            break;
            case "o":
                nbvoyelles++;
            break;
            case "u":
                nbvoyelles++;
            break;
        }
    }

    indexChaine=myVar.indexOf("a");
    document.write("<br> >"+parseInt(nblettres)+"<br>");
    document.write("<br>Apres passage au mixeur, dans "+myVar+" il y a "+parseInt(nbvoyelles)+" voyelles ! <br>");
    /**/

}

document.write("<br><br>VENI VIDI VICI !");
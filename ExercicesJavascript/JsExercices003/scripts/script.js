/* Initialisations */
var x;
var y;
var str1="robert;dupont;amiens;80000;"
var str2=";";
var n=3;
var result;
var chain; 
var lop; 
var nblettres
var mot="";

/* Entrée des valeurs x et y 
    X */
while (isNaN(x)) {
    x=window.prompt("Entrez la valeur X");
}
/*  Y */
while (isNaN(y)) {
    y=window.prompt("Entrez la valeur Y");
}
/* Appel et affichage de l'image et du resultat */
produit(x,y);
afficheImg("medias/papillon.jpg")
document.write("Le cube de "+parseInt(x)+" est égal à "+parseInt(cube)+"<br>");
document.write("Le produit de "+parseInt(x)+"x"+parseInt(y)+" est égal à "+parseInt(prod)+"<br><br><br><br>");

/* Exercice suivant */
strtok("robert;dupont;amiens;80000",";",3);
document.write("Pour str1="+str1+" avec "+str2+"et n="+parseInt(n)+" on trouve :<br>"+trouve);

/* Sous programmes */
function produit(x,y){
    cube=x*x;
    prod=x*y;
}

function afficheImg(link){
    document.write("<img src='"+link+"'><br>");
}

function strtok(str1,str2,n) {
    /* On fait les lettres une par une... */
    var nblettres=str1.length;
    var rech=0;

    for (lop=0;lop<nblettres;lop++) {
        chain=str1.substr(lop,1);
        result=result+chain;
        /* ...si pas de str2, on stocke les lettres... */
        if (chain!=str2){
            mot=mot+chain 
        }
        /* Jusk'au str2 trouvé qui fait une RAZ et on incremente */
        if (chain==str2) { 
            document.write("! >"+mot+"<br>");
            rech++;
            if (rech!=n){
                mot=""
            } else if (rech==n) {
                trouve=mot;
                break;            
            }        
        }
    }
}
// Initialisations
var moinsving=0;
var plusquarante=0;
var vingtquarante=0;
var centenaire=0;
var totalpersonnes=0;
var enter=false;

// Main
do{
    entree=window.prompt("Entrez l'âge du sujet");
    //
    if (entree!=NaN && entree>0){
        totalpersonnes++;
      if(entree>=100){
          centenaire++;
          break;
      }  
      if(entree<20){
        moinsving++;
      }  
      if(entree>40){
        plusquarante++;
      }  
      if(entree>=20 && entree<=40){
        vingtquarante++;
    }  
    }
}while(enter==false)

//Traitement des données
alert("Process ended");
affiR();

// Sous programmes
function affiR(){
    document.write("<br><br>Nombre de sujets : "+totalpersonnes+"<br>");
    document.write("Sujets de moins de 20 ans : "+moinsving+"<br>");
    document.write("Sujets de plus de 40 ans : "+plusquarante+"<br>");
    document.write("Sujets agés entre 20 et 40 ans : "+vingtquarante+"<br>");
    document.write("Sujets centennaires : "+centenaire+"<br>");
}
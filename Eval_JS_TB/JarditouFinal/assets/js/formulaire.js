/* Affiche la demande dans la textarea*/
function affiche_dmd(){
    var ent=document.getElementById("Demande").value;
    document.getElementById("QUESTION").innerHTML+=ent+" ";
    /* alert(ent); */
}

 // Validation du formulaire /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/
var filtre_nom=new RegExp("^[a-zA-Z]+$");
var filtre_seske=new RegExp("[Homme|Femme|Inconnu]")
var birth_d=new RegExp("^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$");// --------------------------------------------------------- REVOIR DATE
var filtre_cp=new RegExp("^[0-9]{5}$");
//var filtre_question=new RegExp("^[a-zA-Z0-9]$");
//
var validMail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//
 function check(f){
   // Flag OFF / message d'erreur
   var validage=false;
   var check_prcd=0;
   var errorText="";

   // ------------------------------------------> Verification du nom
   var valeur=f.elements["NOM"].value;
   var resultat=filtre_nom.test(valeur);
   if (resultat==true){
      document.getElementById("name_no").innerHTML="<br><p style='color:green; text-align:center;'>OK</p>";
      validage=true;
      check_prcd++;
   }else if(resultat==false) {
      // errorText+="NOM\n";
      document.getElementById("name_no").innerHTML="<br><p style='color:red; text-align:center;'>Entrez votre nom !</p>";
      validage=false;
   }
   // ------------------------------------------> Verification du prenom
   var valeur=f.elements["PRENOM"].value;
   var resultat=filtre_nom.test(valeur);
   if (resultat==true){
     document.getElementById("prename_no").innerHTML="<br><p style='color:green; text-align:center;'>OK</p>";
     validage=true;
     check_prcd++;
   } else if(resultat==false) {
     //errorText+="PRENOM\n";
     document.getElementById("prename_no").innerHTML="<br><p style='color:red; text-align:center;'>Entrez votre prénom !</p>";
     validage=false;
   }

   // ------------------------------------------> Verification du seske
   var valeur=f.elements["SEXE"].value;
   var resultat=filtre_nom.test(valeur);
   if (resultat==true){
    document.getElementById("seske_no").innerHTML="<br><p style='color:green; text-align:center;'>OK</p>";
     validage=true;
     check_prcd++;
   } else if(resultat==false) {
     //errorText+="VOTRE SESKE\n";
     document.getElementById("seske_no").innerHTML="<br><p style='color:red; text-align:center;'>Entrez votre seske !</p>";
     validage=false;
   }

   // ------------------------------------------> Verification de la date de naissance
   /*
   var valeur=f.elements["DATE"].value;
   var resultat=filtre_nom.test(valeur);
   alert(DATE);
   if (check_prcd==0){
     validage=true;
   } else if(valeur==NaN) {
     errorText+="VOTRE DATE DE NAISSANCE\n";
     validage=false;
     check_prcd=1;
   }
   */

   // ------------------------------------------> Verification du code postal
   var valeur=f.elements["ZIPCODE"].value;
   var resultat=filtre_cp.test(valeur);
   if (resultat==true){
     document.getElementById("zip_no").innerHTML="<br><p style='color:green; text-align:center;'>OK</p>";
     validage=true;
     check_prcd++;
   } else if(resultat==false) {
     //errorText+="VOTRE CODE POSTAL\n";
     document.getElementById("zip_no").innerHTML="<br><p style='color:red; text-align:center;'>Entrez votre code postal !</p>";
     validage=false;
   }

   //* ------------------------------------------> Verification de l'Email
   var valeur=f.elements["EMAIL"].value;
   var resultat=valeur.match(validMail);
   if (valeur==resultat){
     document.getElementById("mail_no").innerHTML="<br><p style='color:green; text-align:center;'>OK</p>";
     validage=true;
     check_prcd++;
   } else if(valeur!=resultat) {
     //errorText+="VOTRE EMAIL\n";
     document.getElementById("mail_no").innerHTML="<br><p style='color:red; text-align:center;'>Entrez votre E-Mail !</p>";
     validage=false;
   }

   //* ------------------------------------------> Verification de la question
   // var valeur=f.elements["QUESTION"].value;
   //var resultat=filtre_cp.test(valeur);
   //var valeur=document.getElementById("Demande").value;
   //var longchain=valeur.length;
   //console.log("\n"+"QuestLgth "+valeur.length+"\n");
   /*
   if (valeur.lenght()){
     var okk=255;
   }
   if (resultat==true && check_prcd==0){
     validage=true;
   } else if(resultat==false) {
     errorText+="VOTRE QUESTION\n";
     validage=false;
     check_prcd=1;
   }
   */

   //* ------------------------------------------> Check case à cocher
   //var valeur=f.elements["Accord"].value;
   var valeur=f.Accord.checked;
   //console.log("\n"+"--- "+valeur+" ---"+"\n");
   console.log("\n"+check_prcd+"\n");
   if (valeur==true){
    document.getElementById("accept_no").innerHTML="<br><p style='color:green; text-align:center;'>OK</p>";    
    console.log("\n Form Ok \n");
    if (check_prcd==5) {
      //return true;
      validage=true;
      return validage;
    }
  } else if(valeur==false) {
    //errorText+="VEUILLEZ DONNER VOTRE ACCORD\n";
    document.getElementById("accept_no").innerHTML="<br><p style='color:red; text-align:center;'>Donnez votre accord !</p>";
    validage=false;
    console.log("\n Form NO \n");
  }
    return false;
 }

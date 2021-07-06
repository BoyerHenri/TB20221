// initialisations
let myTableau=["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// Main
menu();

//Sous programmes
/* Affichage de tous les postes du tableau*/
function AfficheTab() {
    document.write("<br>");
    let nb=myTableau.length;
    for (lop=0;lop<nb;lop++){
        document.write(" ------------------------------>"+myTableau[lop]+"<br>");
    }
    //
    menu();
}

/* Menu */
function menu(){
    document.write("<br><br><a href='#' onclick='return AfficheTab();'>Affichage de la liste des noms</a><br>"); 
    document.write("<br><a href='#' onclick='return saisie();'>Saisie d'un nom</a><br>");
    document.write("<br><br>");
}

/*Saisie et effacement d'un nom*/
function saisie(){
    let ok=false;
    let check=-1;/* Si pas d'occurence trouvée, renvoie -1*/
    let nb=myTableau.length;
    name_sup=window.prompt("Saisissez un prénom à effacer."); 
    
   for (lop=0;lop<nb;lop++){        
       if (name_sup!=NaN && myTableau[lop]==name_sup){           
            document.write("<p style='color: green;'>Element effaçé ("+lop+") !</p>");
            check=lop;
            ok=true;
            break;
       }
   }
   // Si occurence trouvée, suprimme l'entrée
   if (ok==true){
     myTableau.splice(check,1);
     // On rajoute un vide à la fin
     let nb=myTableau.length;
     myTableau[nb]=" ";  
   }
   // Si pas d'occurence, alors on renvoie un message d'erreur
   if (ok==false){
    document.write("<p style='color: red;'>Element non trouvé !</p>") 
   }
   //
   menu();
}

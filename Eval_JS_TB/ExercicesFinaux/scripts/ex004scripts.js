// Initialisations

let pu=0;
let qtecom=0;
let pap=0;
let rem=0;
let total_remiser=0;
let valeur_remise=0;
let valeur_remise_pourcent=0;
let port=6;
let tot=0;
let total_a_payer=0;
let porcentage=0;
let total_intermediaire_TOT=0;

/*
let pu=Number(0);
let qtecom=Number(0);
let pap=Number(0);
let rem=Number(0);
let total_remiser=Number(0);
let valeur_remise=Number(0);
let valeur_remise_pourcent=Number(0);
let port=Number(0);
let tot=Number(0);
let total_a_payer=Number(0);
let porcentage=Number(0);
let total_intermediaire_TOT=Number(0);
*/

// Main
//pu=window.prompt("Entrez le prix unitaire");
//qtecom=window.prompt("Entrez la quantité");
//pu=501;
//qtecom=1;//

function btn(){
    qtecom = Number(document.getElementById("nbr1").value);
    pu = Number(document.getElementById("nbr2").value);
    total(pu,qtecom);
    document.getElementById("sum").value = total_a_payer.toFixed(2);
    afficheTotal();
}




// Sous programme
function total(prix_unitaire,quantite_comm){
    total_a_payer=prix_unitaire*quantite_comm;
   
    //Calcul de la remise intermediare//
    valeur_remise=Number(0);
    if (total_a_payer>=100 && total_a_payer<=200){
        valeur_remise_pourcent=5;
        
    }else if (total_a_payer>200){
        valeur_remise_pourcent=10;  
    }
    remise(total_a_payer,valeur_remise_pourcent);
    valeur_remise=pourcentage;
    total_remiser=Number(total_a_payer)-Number(valeur_remise);
   
    //Calcul du frais de port
    port=6;
    if (total_remiser>500){
        port=Number(0);
    }else if (total_remiser<=500){
        remise(total_remiser,2);
        port=pourcentage;
        
        //Application de frais minimums

        if (port<6){
            port=6;
        }
    }
    
    //Calcul final avec frais de port
    let round=port.toFixed(2);
    port=round;
    total_a_payer=total_remiser;
    /* total_a_payer+=port;*/
    total_a_payer=Number(total_remiser)+Number(port);
    //
    return total_a_payer;
}

// Affiche le total
function afficheTotal(){

    document.getElementById("lcd").innerHTML+="Quantité : "+qtecom+" x Shadoks à ressorts.\n";
    document.getElementById("lcd").innerHTML+="Prix unitaire : "+pu+"€\n";
    document.getElementById("lcd").innerHTML+="Remise de "+valeur_remise+"€\n";
    document.getElementById("lcd").innerHTML+="Soit de "+valeur_remise_pourcent+"%\n";
    document.getElementById("lcd").innerHTML+="Total remisé "+total_remiser+"€\n";
    document.getElementById("lcd").innerHTML+="Dont "+port+" € de frais de port."+"\n";
    document.getElementById("lcd").innerHTML+="VOUS NOUS DEVEZ "+total_a_payer.toFixed(2)+"€"+"\n";

    //document.write("Quantité : "+qtecom+" x Shadoks à ressorts.<br>");
    //document.write("Prix unitaire : "+pu+"<br>");
    //document.write("Remise de "+valeur_remise+"€<br>");
    //document.write("Soit de "+valeur_remise_pourcent+"%<br>");
    //document.write("Total remisé "+total_remiser+"%<br>");
    //document.write("<br><br>");
    //document.write("Dont "+port+" € de frais de port ="+total_a_payer+"€");
    //document.write("<br><br><br> <h1>VOUS NOUS DEVEZ "+total_a_payer+"€</h1>");
}

// Calcul pourcentage
function remise(prix,pourcent){
    pourcentage=(pourcent/100)*prix;
    rem=pourcentage;
}
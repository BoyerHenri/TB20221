// Initialisations
let n=0;
let x=0;
let mult=0;

// Demande au user la table à afficher
x=window.prompt("Entrez la table à afficher");
TableMultiplication(x);

// Sous programmes
function TableMultiplication(n){
    let lop=0;
    let resultat=0;
    //
    document.write("Table de multiplication de "+n+"<br><br>");
    for (lop=1;lop<11;lop++){
        resultat=n*lop;
        document.write(lop+" x "+n+" = "+resultat+"<br>");
    }
}

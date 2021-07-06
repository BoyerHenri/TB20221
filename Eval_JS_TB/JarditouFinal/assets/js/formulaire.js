/* Affiche la demande dans la textarea*/
function affiche_dmd(){
    var ent=document.getElementById("Demande").value;
    document.getElementById("QUESTION").innerHTML+=ent+" ";
    /* alert(ent); */
  }
 
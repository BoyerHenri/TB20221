  /* Affiche la demande dans la textarea*/
  function affiche_dmd(){
    var ent=document.getElementById("demande").value;
    document.getElementById("demande_complete").innerHTML+=ent+" ";
    /*alert(ent); */
  }
 

/* Teste le formulaire */
function checkForm(f){
    var formulaire_valide=true;

    /* Verifie l'entrée SOCIETE ---------------------> Pas d'envoi si pas au moins un caractére */
    var ent=f.elements("societe").value;
    if (ent.length<1){ 
        alert("Le nom de societé doit contenir au moins un caractére !");
        formulaire_valide=false;
    }
    /* Verifie l'entrée PERSONNE A CONTACTER -------> Pas d'envoi si pas au moins un caractére */
    var ent=f.elements("personne_a_contacter").value;
    if (ent.length<1){ 
        alert("Le nom de la personne à contacter doit contenir au moins un caractére !");
        formulaire_valide=false;
    }
    /* Verifie l'entrée code postal ----------> Pas d'envoi si pas de chiffres ET 5 caractéres*/
    var ent=f.elements("code_postal").value;
    if (ent.length<5 && typeof(ent)!=NaN){ 
        alert("Entrez un code postal à 5 chiffres valides !");
        formulaire_valide=false;
    }
    /* Verifie l'entrée VILLE ---------------------> Pas d'envoi si pas au moins un caractére */
    var ent=f.elements("ville").value;
    if (ent.length<1){ 
        alert("Le nom de la ville doit contenir au moins un caractére !");
        formulaire_valide=false;
    }
      /* Verifie l'entrée EMAIL ---------------------> Pas d'envoi si pas @ présent           */
      var ent=f.elements("mail").value;
      var si_at=ent.indexOf("@");
      if (si_at<1 && ent.length<1){ 
          alert("E mail non valide !");
          formulaire_valide=false;
      }

    /* Verification TRUE/FALSE */
    if (formulaire_valide==false) {
        return false;
    }
}
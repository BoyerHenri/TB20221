var myTableau=[];
var entree=0;
var sommeTableau=0;
var moyenne=0;

/* Cree un tableau par défaut */
remplir();

/*Function menu*/
function menu() {
    /*location.reload();*/
    document.write(
    "<nav><br><a href='#' onclick='return AfficheTab();'>Affichage du contenu</a><br> <a href='#' onclick='return RechercheTab();'>Affichage d'un index</a><br> <a href='#' onclick='return InitTab();'>Initialiser le tableau</a><br> <a href='#' onclick='return SaisieTab();'>Saisir le contenu</a><br><a href='#' onclick='return InfoTab();'>Infos sur le tableau</a><br><br><a href='#' onclick='return glouGlou();'>Tri a bulles</a><br><br> </nav>"
    );
}

/* Rempli tableau aléatoirement*/
function remplir() {
    var max=Math.floor(Math.random()*100)+50;
    var nb=0;
    max=parseInt(max)
    for (lop=0;lop<max;lop++){
        nb=Math.floor(Math.random()*10000);
        myTableau[lop]=nb;
    }
}

/* Lecture d'un entier au clavier*/
function GetInteger() {
    entree=window.prompt("Entrez la valeur souhaitée.");
    entree=parseInt(entree);
}

/* Affichage de tous les postes du tableau*/
function AfficheTab() {
    document.write("<br>");
    var nb=myTableau.length;
    for (lop=0;lop<nb;lop++){
        document.write("'"+lop+"'"+" : "+myTableau[lop]+"<br>");
    }
    /* Menu */
    menu ();
}

/*Affichage d'un poste dont le contenu est saisi au clavier*/
function RechercheTab() {
        document.write("<br>");  
        GetInteger();
        document.write("<br>Pour l'index "+entree+"<br>La valeur est de "+myTableau[entree]+"<br>");
         /* Menu */
        menu ();    
}

/* Initialiser tableau */
function InitTab() {
    document.write("<br>");
    GetInteger();
    myTableau=new Array(entree);
    /* Menu */
    menu ();  
}

/* Saisie des valeurs */
function SaisieTab() {
    document.write("<br>");
    for (lop=0;lop<myTableau.length;lop++){
        window.alert("Entree No "+lop);
        GetInteger();
        myTableau[lop]=entree;
    }
    /* Menu */
    menu ();  
}

/*Maximum et moyenne des postes*/
function InfoTab() {
    document.write("<br>");
    document.write("<br>Taille du tableau : "+myTableau.length+" postes.<br>");
    /* Calcul de la somme */
    var nb=myTableau.length;
    for (lop=0;lop<nb;lop++) {
        /* document.write("'"+lop+"'"+" : "+myTableau[lop]+"<br>");*/
        sommeTableau+=myTableau[lop];
    }
    document.write("<br>Somme des postes du tableau = "+sommeTableau+"<br>");
    /* Calcul de la moyenne */
    moyenne=sommeTableau/myTableau.length;
    document.write("<br>Moyenne = "+moyenne+"<br>");
    /* Menu */
    menu ();  
}

/* Test 001 */
function triAsc() {
    myTableau.sort();
}

/* Tri a bulles */
function glouGlou() {
    document.write("<br>");
    var bol=false;
    var max=myTableau.length;
    var carry=0;
    var carryUp=0;
    do {
        bol=false;
        for (lop=0;lop<max-1;lop++) {
            /* Affiche la cellule et Cree la bulle de comparaison */
            carry=myTableau[lop];
            carryUp=myTableau[lop+1];
            /*document.write("["+lop+">"+carry+" "+carryUp+" <br>"); */
            /*Compare les deux valeurs, interverti le cas écheant*/              
            if (carry>carryUp) {
                document.write("* ");  
                myTableau[lop]=carryUp;
                myTableau[lop+1]=carry;
                bol=true;
            }       
        }
    }while(bol==true)
    /* Menu */
    menu ();
}
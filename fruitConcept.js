function comment(){
    var comm = document.getElementById("comm").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;

    if ((nom) && (prenom)){
        document.getElementById("phrase").innerHTML = "Commentaire de "+prenom+" "+nom+" :<br> '"+comm+"'";
        document.getElementById("reponse").style.backgroundColor = "rgba(45,45,66,.7)";
        document.getElementById("comm").value = "";
        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
    }
    else{
        alert("Veuillez entrer votre nom et votre prénom");
    }
}

function reset(){
    document.getElementById("comm").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
}

// PAGE CONTACT


function contact(){
    var userFirstName = document.getElementById("userFirstName").value;
    var userLastName = document.getElementById("userLastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.getElementById("userFirstName").value = "";
    document.getElementById("userLastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = ""; 

    document.getElementById("reponseContact").innerHTML = "Votre message est bien envoyé, nous vous répondrons dans les plus brefs délais, merci.";

    setTimeout(() => {
        document.getElementById("reponseContact").style.transition = "3s";
        document.getElementById("reponseContact").style.opacity = "0";
    }, 2000);

    setTimeout(() => {
        document.getElementById("reponseContact").innerHTML = "";
    }, 5000)
}

// function commander(){

//     var prix1 = 1.99;
//     var prix2 = 1.85;
//     var prix3 = 1.53;
//     var prix4 = 1.53;
//     var prix5 = 1.85;
//     var prix6 = 1.54;
//     var prix7 = 2.01;
//     var prix8 = 2.23;
//     var prix9 = 3.12;

//     var tva = 6;

//     var quantity1 = Number(document.getElementById("quantity1").value);
//     var quantity2 = Number(document.getElementById("quantity2").value);
//     var quantity3 = Number(document.getElementById("quantity3").value);
//     var quantity4 = Number(document.getElementById("quantity4").value);
//     var quantity5 = Number(document.getElementById("quantity5").value);
//     var quantity6 = Number(document.getElementById("quantity6").value);
//     var quantity7 = Number(document.getElementById("quantity7").value);
//     var quantity8 = Number(document.getElementById("quantity8").value);
//     var quantity9 = Number(document.getElementById("quantity9").value);

//     var total1 = quantity1*prix1;
//     var total2 = quantity2*prix2;
//     var total3 = quantity3*prix3;
//     var total4 = quantity4*prix4;
//     var total5 = quantity5*prix5;
//     var total6 = quantity6*prix6;
//     var total7 = quantity7*prix7;
//     var total8 = quantity8*prix8;
//     var total9 = quantity9*prix9;

//     var sommeHtva = total1+total2+total3+total4+total5+total6+total7+total8+total9;
//     var sommeTva = sommeHtva*(1+tva/100);

//     var quantity1 = document.getElementById("quantity1").value = "";
//     var quantity2 = document.getElementById("quantity2").value = "";
//     var quantity3 = document.getElementById("quantity3").value = "";
//     var quantity4 = document.getElementById("quantity4").value = "";
//     var quantity5 = document.getElementById("quantity5").value = "";
//     var quantity6 = document.getElementById("quantity6").value = "";
//     var quantity7 = document.getElementById("quantity7").value = "";
//     var quantity8 = document.getElementById("quantity8").value = "";
//     var quantity9 = document.getElementById("quantity9").value = "";


//     alert("Votre commande est bien enregistrée. Le montant total de vos achats s'élève à "+sommeTva+"€ TVAC");
// }

// Script de la page commandes de Carole

// MISE EN PLACE DE LA PAGE COMMANDES.JS

function commander(){

    // taux de TVA
    var tva = 6;

    // prix des confitures
    var prix_1 = 1.99;
    var prix_2 = 1.85;
    var prix_3 = 1.53;
    var prix_4 = 1.53;
    var prix_5 = 1.85;
    var prix_6 = 1.54;
    var prix_7 = 2.01;
    var prix_8 = 2.23;
    var prix_9 = 3.12;

    // récupération des quantités entrées par l'utilisateur
    var qtt_1 = Number(document.getElementById("qtt_1").value);
    var qtt_2 = Number(document.getElementById("qtt_2").value);
    var qtt_3 = Number(document.getElementById("qtt_3").value);
    var qtt_4 = Number(document.getElementById("qtt_4").value);
    var qtt_5 = Number(document.getElementById("qtt_5").value);
    var qtt_6 = Number(document.getElementById("qtt_6").value);
    var qtt_7 = Number(document.getElementById("qtt_7").value);
    var qtt_8 = Number(document.getElementById("qtt_8").value);
    var qtt_9 = Number(document.getElementById("qtt_9").value);
    
    // test pour savoir la quantité de produits achetés
    // var qtt = qtt_1 + qtt_2 + qtt_3 + qtt_4 + qtt_5 + qtt_6 + qtt_7 + qtt_8 + qtt_9;
    // alert("Vous achetez "+ qtt + " produits");

    // calcul du prix pour chaque article en fonction de la quantité choisie
    var message = "Votre commande : <br><br>"
    var prix_HTVA = 0;
    var prix_TVAC = 0;
    

    if (qtt_1 != 0){
        var prix_total_HTVA_1 = qtt_1 * prix_1;
        var prix_total_arrondi_HTVA_1 = Number(prix_total_HTVA_1.toFixed(2));

        var prix_total_TVAC_1 = qtt_1 * prix_1 * (1+tva/100);
        var prix_total_arrondi_TVAC_1 = Number(prix_total_TVAC_1.toFixed(2));
        
        prix_HTVA += prix_total_arrondi_HTVA_1
        prix_TVAC += prix_total_arrondi_TVAC_1

        message += qtt_1 + " gelée(s) de groseille à " + prix_1 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_1.toFixed(2) + " €<br>"
    } 
    

    if (qtt_2 != 0){
        var prix_total_HTVA_2 = qtt_2 * prix_2;
        var prix_total_arrondi_HTVA_2 = Number(prix_total_HTVA_2.toFixed(2));

        var prix_total_TVAC_2 = qtt_2 * prix_2 * (1+tva/100);
        var prix_total_arrondi_TVAC_2 = Number(prix_total_TVAC_2.toFixed(2));
        // alert(Number(prix_total_TVAC_2))

        prix_HTVA += prix_total_arrondi_HTVA_2
        prix_TVAC += prix_total_arrondi_TVAC_2

        message += qtt_2 + " confiture(s) de cerises à " + prix_2 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_2.toFixed(2) + " €<br>"
    }
   

    if (qtt_3 != 0){
        var prix_total_HTVA_3 = qtt_3 * prix_3;
        var prix_total_arrondi_HTVA_3 = Number(prix_total_HTVA_3.toFixed(2));

        var prix_total_TVAC_3 = qtt_3 * prix_3 * (1+tva/100);
        var prix_total_arrondi_TVAC_3 = Number(prix_total_TVAC_3.toFixed(2));
        // alert(Number(prix_total_TVAC_3))

        prix_HTVA += prix_total_arrondi_HTVA_3
        prix_TVAC += prix_total_arrondi_TVAC_3

        message += qtt_3 + " confiture(s) de pêche à " + prix_3 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_3.toFixed(2) + " €<br>"
    }
   

    if (qtt_4 != 0){
        var prix_total_HTVA_4 = qtt_4 * prix_4;
        var prix_total_arrondi_HTVA_4 = Number(prix_total_HTVA_4.toFixed(2));

        var prix_total_TVAC_4 = qtt_4 * prix_4 * (1+tva/100);
        var prix_total_arrondi_TVAC_4 = Number(prix_total_TVAC_4.toFixed(2));
        // alert(Number(prix_total_TVAC_4))

        prix_HTVA += prix_total_arrondi_HTVA_4
        prix_TVAC += prix_total_arrondi_TVAC_4

        message += qtt_4 + " confiture(s) de prunes à " + prix_4 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_4.toFixed(2) + " €<br>"
    }
    

    if (qtt_5 != 0){
        var prix_total_HTVA_5 = qtt_5 * prix_5;
        var prix_total_arrondi_HTVA_5 = Number(prix_total_HTVA_5.toFixed(2));

        var prix_total_TVAC_5 = qtt_5 * prix_5 * (1+tva/100);
        var prix_total_arrondi_TVAC_5 = Number(prix_total_TVAC_5.toFixed(2));
        // alert(Number(prix_total_TVAC_5))

        prix_HTVA += prix_total_arrondi_HTVA_5
        prix_TVAC += prix_total_arrondi_TVAC_5

        message += qtt_5 + " confiture(s) d'abricots à " + prix_5 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_5.toFixed(2) + " €<br>"
    }
    
    
    if (qtt_6 != 0){
        var prix_total_HTVA_6 = qtt_6 * prix_6;
        var prix_total_arrondi_HTVA_6 = Number(prix_total_HTVA_6.toFixed(2));

        var prix_total_TVAC_6 = qtt_6 * prix_6 * (1+tva/100);
        var prix_total_arrondi_TVAC_6 = Number(prix_total_TVAC_6.toFixed(2));
        // alert(Number(prix_total_TVAC_6))

        prix_HTVA += prix_total_arrondi_HTVA_6
        prix_TVAC += prix_total_arrondi_TVAC_6

        message += qtt_6 + " confiture(s) de pomme à " + prix_6 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_6.toFixed(2) + " €<br>"
    }
    
    
    if (qtt_7 != 0){
        var prix_total_HTVA_7 = qtt_7 * prix_7;
        var prix_total_arrondi_HTVA_7 = Number(prix_total_HTVA_7.toFixed(2));

        var prix_total_TVAC_7 = qtt_7 * prix_7 * (1+tva/100);
        var prix_total_arrondi_TVAC_7 = Number(prix_total_TVAC_7.toFixed(2));
        // alert(Number(prix_total_TVAC_7))

        prix_HTVA += prix_total_arrondi_HTVA_7
        prix_TVAC += prix_total_arrondi_TVAC_7

        message += qtt_7 + " confiture(s) de surreau à " + prix_7 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_7.toFixed(2) + " €<br>"
    }
   
    
    if (qtt_8 != 0){
        var prix_total_HTVA_8 = qtt_8 * prix_8;
        var prix_total_arrondi_HTVA_8 = Number(prix_total_HTVA_8.toFixed(2));

        var prix_total_TVAC_8 = qtt_8 * prix_8 * (1+tva/100);
        var prix_total_arrondi_TVAC_8 = Number(prix_total_TVAC_8.toFixed(2));
        // alert(Number(prix_total_TVAC_8))

        prix_HTVA += prix_total_arrondi_HTVA_8
        prix_TVAC += prix_total_arrondi_TVAC_8

        message += qtt_8 + " confiture(s) de figues à " + prix_8 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_8.toFixed(2) + " €<br>"
    }
    
    
    if (qtt_9 != 0){
        var prix_total_HTVA_9 = qtt_9 * prix_9;
        var prix_total_arrondi_HTVA_9 = Number(prix_total_HTVA_9.toFixed(2));

        var prix_total_TVAC_9 = qtt_9 * prix_9 * (1+tva/100);
        var prix_total_arrondi_TVAC_9 = Number(prix_total_TVAC_9.toFixed(2));
        // alert(Number(prix_total_TVAC_9))

        prix_HTVA += prix_total_arrondi_HTVA_9
        prix_TVAC += prix_total_arrondi_TVAC_9

        message += qtt_9 + " confiture(s) de mandarines à " + prix_9 + " €/pièce :" + " " + " " + prix_total_arrondi_HTVA_9.toFixed(2) + " €<br>"
    }
    

    // alert(prix_HTVA)
    // prix total de tous les articles HTVA
    message += "<br>Prix total HTVA :     " + prix_HTVA.toFixed(2) + " €<br>"

    // prix total de tous les articles TVAC
    message += "<br>Prix total TVAC :     " + prix_TVAC.toFixed(2) + " €<br>"


    // affichage reponse de la commande
    document.getElementById("reponseCommandes").innerHTML = message
    document.getElementById("divrpc").style.marginLeft = "200px";
    document.getElementById("divrpc").style.marginRight = "200px";
    document.getElementById("divrpc").style.backgroundColor = "rgba(71,168,63,.8)";
    document.getElementById("divrpc").style.borderRadius = "10px";
   
}
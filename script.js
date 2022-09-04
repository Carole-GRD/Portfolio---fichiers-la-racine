// =====================================================================================
// ------------------  "SCROLL SMOOTH"  --------------------------
// =====================================================================================


// à quoi servent les 3 points devant 'document' ?
// attribut de propagation qui permettent de développer une expression
// raccourci syntaxique qui donne le privilège d'obtenir une liste à partir d'un tableau
const navLinks = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('section')];


let sectionsPosition;
// MAP() RENVOIE UN TABLEAU 
// -> DANS CE CAS, UN TABLEAU DES POSITIONS DE CHAQUE SECTION
// ON PLACE CES POSITIONS DANS LA VARIABLE "sectionsPosition" QUE L'ON A DECLAREE CI-DESSUS
function positionCalculation(){
    sectionsPosition = sections.map(section => section.offsetTop);
}
positionCalculation();
/* REMARQUE :
On appelle les éléments du tableau "sections" comme on veut...
Dans ce cas, on les appelle "section", cela a du sens 
car on demande la position supérieure (offsetTop) de chaque section 
du fichier HTML. */


navLinks.forEach(link => link.addEventListener('click', addScrollSmooth));
// console.log(navLinks);
/* REMARQUE :
On appelle les éléments du tableau "navLinks" comme on veut...
Dans ce cas, on les appelle "link", cela a du sens 
car on demande d'effectuer une fonction (qu'on appelle addScollSmooth) à chaque fois que l'on clique sur un lien. */


function addScrollSmooth(e){
    // obtenir l'index du lien sur lequel l'utilisateur a "cliqué"
    const linkIndex = navLinks.indexOf(e.target);
    // ATTENTION : le logo a pour index "-1" => il ramène à la section "home" qui a pour index "0" 
    // ATTENTION : le texte "DEV JS FS" a pour index "0" => il ramène EGALEMENT à la section "home" qui a pour index "0" 
    if (linkIndex === -1 || linkIndex === 0){
        window.scrollTo({
            top: sectionsPosition[0],
            behavior: "smooth",
        })  
    }
    // ATTENTION : TOUS les index sont décallés de "1"  → d'où [linkIndex - 1]
    else{
        window.scrollTo({
            top: sectionsPosition[linkIndex - 1],
            behavior: "smooth",
        })  
    }
}

// refaire les calculs de position si l'on modifie la taille de l'écran
window.addEventListener('resize', positionCalculation);




// =====================================================================================
// ------------------  "SCROLLSPY"  --------------------------
//          index "-1" contourné en ligne 88
// =====================================================================================

let styleScrollSpy = document.querySelector('styleScrollSpy');

const navLinksLi = [...document.querySelectorAll('nav li')];
// console.log(navLinksLi)

// L'ONGLET "HOME" DOIT AVOIR LE STYLE AU CHARGEMENT DE LA PAGE
window.addEventListener('load', loadStyleHome);
function loadStyleHome(){
    navLinks[1].classList.add('styleScrollSpy');
    navLinksLi[1].classList.add('styleScrollSpy');
}


// ATTENTION : l'Array "navLinks" est créé dans le code SCROLL SMOOTH (ligne 8)
navLinks.forEach(link => link.addEventListener('click', addScrollSpy));
function addScrollSpy(e){
    for (let i = 0; i < navLinks.length; i++){
        // retirer le style de tous les liens
        navLinks[i].classList.remove('styleScrollSpy');
        navLinksLi[i].classList.remove('styleScrollSpy');
        // obtenir l'index du lien cliqué
        const linkIndex = navLinks.indexOf(e.target);
        // ajouter le style au lien cliqué
        if (linkIndex >= 1){                                         /* pour éviter l'index "-1" */
            navLinks[linkIndex].classList.add('styleScrollSpy');
            navLinksLi[linkIndex].classList.add('styleScrollSpy');
        }
        if (linkIndex == -1){
            loadStyleHome();
        }
    }
}



// scrollspy lorsqu'on scroll avec la souris ou le pavé tactile

// A TERMINER !!!!!!!!!!

window.addEventListener('scroll', addScrollSpy2);
function addScrollSpy2(){
    if (window.scrollY < 929){
        console.log('section 1');
    }
    if (window.scrollY >= 929 && window.scrollY < 1858){
        console.log('section 2');
    }
    if (window.scrollY >= 1858 && window.scrollY < 2787){
        console.log('section 3');
    }
    if (window.scrollY >= 2787 && window.scrollY < 3716){
        console.log('section 4');
    }
    if (window.scrollY >= 3716){
        console.log('section 5');
    }
}






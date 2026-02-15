
function executeExo1() {
    /* =================================================================================
    Étape 1 : Testez le premier mot
    Déclarez une variable listeMots qui est un tableau. 
    Ce tableau contient trois mots que l’utilisateur devra taper au clavier : “Cachalot”, “Pétunia” et “Serviette”. 
    =================================================================================*/

    let listeMots = ['a', 'b', 'c']

    /* Déclarez une deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur.*/

    let score = 0

    /* À l’aide de l’instruction prompt, demandezà l’utilisateur de rentrer le mot contenu dans la première case du tableau. 
    N’oubliez pas, la première case d’un tableau est la case numéro zéro !*/

    let wordUser = prompt('Entrez le mot : ' + listeMots[0])

    /* Écrivez une première structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application.*/
    /*Si c’est le cas, on augmente la valeur de score de 1.
    Vérifiez avec des console.log si le score final est correct. */

    if (wordUser === listeMots[0]) {
        console.log('Bravo !');
        score += 1
    } else {
        console.log('Vous avez fait une erreur de frappe');
    }

    /* =================================================
    Étape 2 : Testez le second mot
    Demandez à l’utilisateur de rentrer le second mot. 
    Faites une seconde structure conditionnelle pour vérifier si le second mot tapé par l’utilisateur correspond 
    bien au second mot du tableau.
    ==================================================== */

    wordUser = prompt('Entrez le mot : ' + listeMots[1])
    if (wordUser === listeMots[1]) {
        console.log('Bravo !');
        score += 1
    } else {
        console.log('Vous avez fait une erreur de frappe');
    }

    /* ==========================================================
    Étape 3 : Testez le troisième mot
    Recommencez une troisième fois pour la dernière case du tableau !
    ===========================================================*/

    wordUser = prompt('Entrez le  mot : ' + listeMots[2])
    if (wordUser === listeMots[2]) {
        console.log('Bravo !');
        score += 1
    } else {
        console.log('Vous avez fait une erreur de frappe');
    }

    console.log("Votre score total est : " + score)

}



function executeExo2() {

    /* Étape 1 : répétez votre code avec une boucle
    Demandez à l’utilisateur de le retaper avec prompt ;
    Comptez un point par mot correctement tapé ;
    Affichez le score à la fin avec un console.log. */

    /* Étape 2 : proposez deux types de listes de mots
    => Pour rendre le jeu plus engageant, nous voulons que l’utilisateur puisse avoir le choix entre 
    deux listes de mots différentes : une liste avec des mots et une liste avec des phrases.
    => Déclarez un tableau listePhrases qui contient 3 courtes phrases : 
    “Pas de panique !”, “La vie, l’univers et le reste”, “Merci pour le poisson”.
    => Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. 
    => Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.
    => Lancez votre boucle for, avec la liste que l’utilisateur a choisie. */

    let listeMots = ['a', 'b', 'c']
    let listePhrases = ['La vie', "Un univers", 'Le monde']
    let score = 0


    let choixExercices = prompt("Choisissez votre exercice Tapez : phrases ou mots")

    while (choixExercices !== 'phrases' && choixExercices !== 'mots') {
        choixExercices = prompt("Choisissez votre exercice Tapez : phrases ou mots")
    }

    if (choixExercices === 'phrases') {
        for (i = 0; i < listePhrases.length; i++) {
            let sentenceUser = prompt('Entrez le mot : ' + listePhrases[i])
            if (sentenceUser === listePhrases[i]) {
                score++
            }

        }
        console.log("Bravo ! Votre score est de : " + score + " sur " + listePhrases.length)
    } else {
        for (i = 0; i < listeMots.length; i++) {
            let wordUser = prompt('Entrez le mot : ' + listeMots[i])
            if (wordUser === listeMots[i]) {
                score++
            }

        }
        console.log("Bravo ! Votre score est de : " + score + " sur " + listePhrases.length)
    }

}



/* Étape 1 : découpez votre code en fonctions

Notre but est maintenant d’améliorer l’organisation et la lisibilité de notre 
code. Je vous propose donc de créer les fonctions suivantes : 

afficherResultat : cette fonction prend en paramètre le résultat et 
le nombre total de mots proposés, et affiche le résultat du joueur ; 

choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer 
avec des phrases ou des mots. 

lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu, c'est-à-dire la boucle for 
qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle prend en paramètre
le tableau de mots/phrases qui sera proposé au joueur, et retourne le nombre de mots/phrases 
correctement tapés ;

lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer 
toutes les autres. En d’autres termes, c’est elle qui va appeler les fonctions que vous venez
d’écrire.
*/




let score = 0

//function choisirPhrasesOuMots() {
//let choixExercices = prompt("Choisissez votre exercice Tapez : phrases ou mots")

//while (choixExercices !== 'phrases' && choixExercices !== 'mots') {
//choixExercices = prompt("Choisissez votre exercice Tapez : phrases ou mots")
// }
//return choixExercices
//}

/* 
function lancerBoucleDeJeu(liste) {

    for (i = 0; i < liste.length; i++) {
        let sentenceUser = prompt()'Entrez le mot : ' + liste[i]
        console.log(i)
        if (sentenceUser === liste[i]) {
            score++
        }
    }
    return score
}
*/


/*function lancerJeu() {
    let choix = choisirPhrasesOuMots();
    let nbMotPropose = 0;
    if (choix === "mots") {
        lancerBoucleDeJeu(listeMots);
        nbMotPropose = listeMots.length
    } else {
        lancerBoucleDeJeu(listePhrases);
        nbMotPropose = listePhrases.length
    }
    afficherResultat(score, nbMotPropose);
}*/

/*=======================================================
Exercice 3 : interagisser avec les éléments d'une page web
=>> function lancerJeu() et tous les prompt desactiver pour réaliser 
l'exercice
=======================================================
--------
Etape 1
--------
Dans la fonction lancerJeu, récupérez le bouton de validation et écoutez
l’événement click en utilisant la méthode addEventListener.
Testez que cela fonctionne avec un console.log(“j’ai cliqué !”).

Récupérez la balise inputEcriture et placez-la dans une variable. 

Dans l’addEventListener, faites un console.log avec la valeur contenue dans 
cette balise.

Pour accéder à la valeur contenue dans la balise inputEcriture, utilisez la 
propriété value. 

Testez en écrivant quelque chose dans le champ, et en vérifiant que la valeur
apparaît bien lorsque vous cliquez sur Envoyer. 

------------------------------------------------------------
Étape 3 : affichez les mots que l’utilisateur doit recopier
------------------------------------------------------------
À ce stade, vous savez comment récupérer le mot que l’utilisateur a écrit, mais 
vous n’affichez pas encore le mot qu’il devra recopier. Pour réaliser cette mise 
à jour du code HTML :

à l’extérieur du addEventListener, créez une variable i qui servira de compteur. 
Dans l’addEventListener, ajoutez 1 à i à chaque fois que l’utilisateur clique sur le
 bouton Envoyer ; 

ajoutez un console.log qui va afficher le mot numéro i du tableau listeMots ;

créez une fonction afficherProposition, qui va prendre en paramètre le mot à afficher,
 et afficher ce mot dans la div zoneProposition ;  

utilisez cette fonction pour afficher les mots à proposer. */

function lancerJeu() {
    let i = 0
    afficherProposition(listeMots[i])
    // Validation du mot avec le boutton valider
    bouttonValider = document.getElementById("btnValiderMot")
    bouttonValider.addEventListener("click", function () {
        console.log(inputEcriture.value)
        lancerBoucleDeJeu(listeMots[i])
        i++
        afficherProposition(listeMots[i])
        // Remmet le input a 0 apres chaque validation :
        inputEcriture.value = ""
        // le .focus() met automatiquement le curseur dans l'input :
        inputEcriture.focus()
        let zoneProposition = document.querySelector('.zoneProposition')
        if (i >= listeMots.length) {
            zoneProposition.textContent = "Le jeu est fini !"
        }
        afficherResultat()
    })

    // Validation du mot avec la toucher Enter
    inputEcriture = document.getElementById("inputEcriture")
    inputEcriture.addEventListener("keydown", (Event) => {
        if (Event.key === 'Enter') {
            console.log(inputEcriture.value)
            lancerBoucleDeJeu(listeMots[i])
            i++
            afficherProposition(listeMots[i])
            inputEcriture.value = ""
             let zoneProposition = document.querySelector('.zoneProposition')
        if (i >= listeMots.length) {
            zoneProposition.textContent = "Le jeu est fini !"
        }
        afficherResultat()
        }
    })
    console.log(i)
}

function afficherProposition(liste) {

    let zoneProposition = document.querySelector('.zoneProposition')
    zoneProposition.textContent = liste
}

function lancerBoucleDeJeu(liste) {
    if (inputEcriture.value === liste) {
        score++
        console.log(score)
    }

}

function afficherResultat() {
    let nbMotPropose = listeMots.length;
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nbMotPropose}`
    spanScore.innerText = affichageScore
}

let test = document.querySelector("footer span")
let mot= 'bonjour'
let autremot = ' tout le monde'
let phrase = `${mot} ??? ${autremot}`
test.innerHTML = phrase
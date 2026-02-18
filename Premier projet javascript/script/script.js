/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}`
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */
function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
/** Exercice : Modification des fonctions validerNom et validerEmail : elles ne vont plus retourner 
 * true ou false, mais se contenter de lancer une exception en cas d’erreur,
 * avec un message expliquant le problème. */
function verifierNom(balise) {
    let nomRegExp = new RegExp("^.{2,}$")

    if (!nomRegExp.test(balise.value)) {
        throw new Error('Le nom est trop court')
    }
    return true
}

function verifierEmail(balise) {
    let mailRegExp = new RegExp("^[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z0-9-_]+$")

    if (!mailRegExp.test(balise.value)) {
        throw new Error("L'email n'est pas valide")
    }
    return true

}

function afficherMessageErreur(message) {

    let spanMessage = document.getElementById('ErreurMessage')
    if (!spanMessage) {
        let popup = document.querySelector('.popup')
        spanMessage = document.createElement('span')
        spanMessage.id = 'ErreurMessage' 

        popup.append(spanMessage)
    }
    spanMessage.innerText = message

}

//Exercice : Création d'une fonction gererFormulaire. Cette fonction va prendre en paramètre 
//le score à envoyer, et s’occuper de gérer le formulaire.
function gererFormulaire(scoreEmail) {
    let baliseNom = document.getElementById('nom')
    let nom = baliseNom.value.trim()

    let baliseEmail = document.getElementById('email')
    let email = baliseEmail.value
    try {
        verifierEmail(baliseEmail)
        verifierNom(baliseNom)
        afficherEmail(nom, email, scoreEmail)
        afficherMessageErreur("")
    
    } catch (error) {
        afficherMessageErreur('Une erreur est survenue ' + error.message)
    }
}
/*if (verifierNom(baliseNom) &&verifierEmail(baliseEmail)) {
           console.log('Formulaire validé')
           afficherEmail(nom, email, scoreEmail)
       } else {
           console.log('ERREUR')
       }*/

//___________
/** Exercice :Écoutez l’événement submit sur ce nouveau formulaire, et empêchez le comportement
 par défaut de se produire ; */
/**let formulaire = document.querySelector('form')
formulaire.addEventListener('submit', (Event) => {
    Event.preventDefault();
    console.log("Il n'y a pas eu de rechargement de la page")
})*/


/** Récupérez les valeurs des champs présents ; */
/*let form = document.querySelector('form')
form.addEventListener('submit', (Event) => {
    let balisenom = document.getElementById('nom')
    let nom = balisenom.value
    console.log(nom)
    let baliseemail = document.getElementById('email')
    let email = baliseemail.value
    console.log(email)
})*/

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

function lancerJeu() {
    // Initialisations
    initAddEventListenerPopup()
    let score = 0
    let i = 0
    let listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    afficherProposition(listeProposition[i])

    // Gestion de l'événement click sur le bouton "valider"
    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listeProposition[i]) {
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value = ''
        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherProposition(listeProposition[i])
        }
    })

    // Gestion de l'événement change sur les boutons radios. 
    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
            // Si c'est le premier élément qui a été modifié, alors nous voulons
            // jouer avec la listeMots. 
            if (event.target.value === "1") {
                listeProposition = listeMots
            } else {
                // Sinon nous voulons jouer avec la liste des phrases
                listeProposition = listePhrases
            }
            // Et on modifie l'affichage en direct. 
            afficherProposition(listeProposition[i])
        })
    }

    // Gestion de l'evenement submit sur le formulaire de partage
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)
    })


    afficherResultat(score, i)

    function verifierChamp(champ) {
        // Si le champ est vide, on lance une exception
        if (champ.value === "") {
            throw new Error(`Le champ ${champ.id} est vide`)
        }
    }

}

/* #Déclarez les morceaux de votre playlist
    Commençons par faire un inventaire des CD en votre possession.
    Déclarez un tableau playlist qui contiendra trois de vos morceaux préférés. */

let playlist = ['song1', 'song2', 'song3']

/* #Ajoutez les morceaux de vos amis
    Pour plaire à tout le monde, vous décidez de laisser vos amis choisir deux morceaux supplémentaires pour compléter votre collection.
    Ajoutez deux morceaux au tableau playlist de manière à porter le total à cinq morceaux. */

playlist.push('friendsong1', 'friendsong2')

// #Enlevez le dernier morceau de votre playlist
// Malheureusement, certains ne sont pas d’accord avec le dernier morceau ajouté. Il va falloir faire du tri ! 😱
// Supprimez le dernier morceau ajouté à votre collection.

playlist.pop()

// Stockez le nombre de morceaux disponibles dans une variable totalMorceaux.

let totalMorceaux = 'Morceaux disponibles dans la playlist : ' + playlist.length

/* Resultat */

console.log(playlist)
console.log(totalMorceaux)

/* déclarer un objet */

let objet = {
    nom:'grd',
    prenom: 'raph',
    age: '32'
}

console.log(objet.nom)
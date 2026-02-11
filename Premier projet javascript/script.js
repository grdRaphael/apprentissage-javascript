console.log("Hello World");

/* 
Étape 1 : Testez le premier mot
Déclarez une variable listeMots qui est un tableau. 
Ce tableau contient trois mots que l’utilisateur devra taper au clavier : “Cachalot”, “Pétunia” et “Serviette”. */

let listeMots = ['a', 'b', 'c']

/* Déclarez une deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur.*/

let score = 0

/* À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. 
N’oubliez pas, la première case d’un tableau est la case numéro zéro !*/

let wordUser = prompt('Entrez le premier mot : ' + listeMots[0])

/* Écrivez une première structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application.*/
/*Si c’est le cas, on augmente la valeur de score de 1.
Vérifiez avec des console.log si le score final est correct. */

if (wordUser === listeMots[0]) {
    console.log('Bravo !');
    score += 1
} else {
    console.log('Vous avez fait une erreur de frappe');
}

/* Étape 2 : Testez le second mot
Demandez à l’utilisateur de rentrer le second mot. 
Faites une seconde structure conditionnelle pour vérifier si le second mot tapé par l’utilisateur correspond 
bien au second mot du tableau. */

wordUser = prompt('Entrez le mot : ' + listeMots[1])
if (wordUser === listeMots[1]) {
    console.log('Bravo !');
    score += 1
}else {
    console.log('Vous avez fait une erreur de frappe');
}

/* Étape 3 : Testez le troisième mot
Recommencez une troisième fois pour la dernière case du tableau !*/

wordUser = prompt('Entrez le  mot : ' + listeMots[2])
if (wordUser === listeMots[2]) {
    console.log('Bravo !');
    score += 1
} else {
    console.log('Vous avez fait une erreur de frappe');
}

console.log("Votre score total est : " + score)






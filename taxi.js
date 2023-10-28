//tableu de la liste de musique
//objet personnage avec prénom et santé mentale
//30 feu rouge donc 30 musiques jouée
//faire une sélection aléatoire dans les 5 musiques
//objet trajet avec nombre de feu rouge
//faire le trajet tant que santé > 0 sinon break et afficher "explosion"
// Si musique jouée Anissa : -1 de santé et change de taxi
//Sinon continuer le trajet
//Si trajet complété, afficher "est bien arrivé"

let Personnage = {
    prénom: "John",
    vie : 10,
}

let trajet = {
    feuRouge: 30,
    radio:["Anissa - Wejdene", "Blue OST 172", "Lacrimosa - Mozart", "Survive - Arknights", "Last of me - Arknights" ],
    changement:0
}

let phrasesFuite = [" s'enfuit du taxi", " insulte le chauffeur avant de partir du taxi", " sort du taxi pour vomir", " est prit de vertige et décide de sortir du taxi"]
let phrasesFin = [" emporte le monde autour de lui dans une explosion fulgurante.", " explose en se rappelant des paroles de la chanson.", " décide de se remettre en question dans un parc avant d'exploser sans raison particulière."]

function indexAleatoire(even){
    return (Math.random()* even.length) |0

    
}



while(Personnage.vie>0 && trajet.feuRouge!=0){
console.log("Il reste " + trajet.feuRouge + " feux rouges.")
trajet.feuRouge--
let index = indexAleatoire(trajet.radio)
let musique = trajet.radio[index]
console.log("La musique " + musique + " est en train de se jouer.")
if(musique== "Anissa - Wejdene"){
    Personnage.vie--
    trajet.changement++
    let indexphrasefuite = indexAleatoire(phrasesFuite)
    let phrasefuite = phrasesFuite[indexphrasefuite]
    console.log(Personnage.prénom + phrasefuite)
    if(Personnage.vie>0){
    console.log(Personnage.prénom + " prend un autre taxi.")
    }
}else{
    console.log(Personnage.prénom + " écoute la musique avec attention.")
}

if(Personnage.vie==0){
    console.log(Personnage.prénom + " n'a pas tenu jusqu'à chez lui.")
    let indexphraseFin = indexAleatoire(phrasesFin)
    let phrasefin = phrasesFin[indexphraseFin]
    console.log(Personnage.prénom + phrasefin)
    break
}

if(trajet.feuRouge==0 && Personnage.vie!=0){
    console.log(Personnage.prénom + " est enfin arrivé à sa maison")
    console.log(Personnage.prénom + " a fait " + trajet.changement + " changements de taxi avant d'arriver.")
    break
}

}
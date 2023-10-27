let nomSurvivant = ["Paul", "Vincent", "Pierre", "Claire", "Mary", "Camille", "Stella", "Panama", "Eclair", "Patrique", "MrBeast"];

// Générer un index aléatoire entre 0 et la longueur du tableau - 1 sans utiliser Math.floor
let indexAleatoire = (Math.random() * nomSurvivant.length) | 0;

// Attribuer le nom aléatoire à la variable joueur
let joueur = nomSurvivant[indexAleatoire];

console.log("Le nom du joueur est : " + joueur);

let joueu = Math.random
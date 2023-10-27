/*var a="Jean"
var b="Paul"
var result=checkName(a, b)
function checkName(prenom1, prenom2){
  if (prenom1==prenom2){
    return "les deux prénoms sont identiques"
  }else{
    return "les deux prénom ne sont pas identiques"
  }
}
//console.log(result)


let names = []
names.push("Vincent", "Paul", "Arthur")
names.forEach(function (name){
    console.log(names + " va à la pêche")
})*/


/*let student ={
    name: "Dab",
    favoriteFood: "melon",
    city:"Paris",
} 
let result = 0
let valeurs = Object.values(student)
valeurs.forEach(valeur =>{
    result += valeur.length
})
if(result%2===0){
    console.log("paire")
} else{
    console.log("impaire")
}*/


/*class Guerrier{
    //avec constructor, on peut modifier les stats, sans, impossible
    constructor(attack, defense){
        this.attack = attack
        this.defense = defense
        //this permet de désigner la classe, dans de cas guerrier
    }
// pas besoin de mettre "function" au début dans une classe.
//elle est cependant seulement valide dans cette classe.
     getAttack() {
        //cette fonction n'a pas de nom mais les parenthèses sont nécessaires
        console.log(this.attack)
    }
}


let matthieu = new Guerrier(10, 10)
let alexis = new Guerrier(20, 20)
//sans constructor, les deux guerriers n'auront pas des stats différentes
*/


class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name=name
        this.attack=attack
        this.defense=defense
        this.hp=hp
        this.luck=luck
    }
    isLucky(){
        return Math.random()<this.luck
    }

    attackPokemon(defenseur) {
        if(this.isLucky()){
            let dégats = this.attack-defenseur.defense
            defenseur.hp-=dégats
            console.log(defenseur.name+" à perdu "+dégats+" hp")
            console.log("il lui reste "+ defenseur.hp)
        }else{
            console.log("attaque raté")
        }

    }
}

let jeanPaul = new Pokemon("JeanPaul", 12, 5, 40, 0.4)
let poupou = new Pokemon("poupou", 6, 10, 40, 0.7)
console.log (jeanPaul)

while(poupou.hp>0 && jeanPaul.hp>0){

    console.log("jeanPaul attaque poupou")
    jeanPaul.attackPokemon(poupou)
    
if(poupou.hp<=0){
    console.log("poupou est décédé")
    break
}
console.log("poupou attaque jeanPaul")
poupou.attackPokemon(jeanPaul)

if(jeanPaul.hp<=0){
    console.log("jeanPaul est décédé")
    break
}
}

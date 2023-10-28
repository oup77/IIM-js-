
class Tueur{
    constructor(name){
        this.name = name
        this.pv = 100
    }

   
}

class survivant{
    constructor(name,catégorie){
        this.name = name
        this.catégorie = catégorie
        this.mort = 0.5
        this.dégât = 0.5
        this.sacrifice = 0.2
        this.vie = 1
    }
   
    Luck(){
        return Math.random()
    
    }
   
    
     MakeAction(){
        if(this.vie<1){
            console.log(this.name + " est toujours mort(e).")
        }else{
           let nombreAleatoire = this.Luck()

        if(nombreAleatoire<this.mort){
            if(nombreAleatoire<=this.sacrifice){
                Jason.pv -= 15
                console.log(this.name + " attaque " + Jason.name + " avant sa fin fatidique.")
                console.log("Il reste " + Jason.pv + " hp à " + Jason.name)
            }
            this.vie-=1
            console.log(this.name + " a été tué(e).")
        }
        if(nombreAleatoire>=this.dégât){
            Jason.pv -=10
            console.log(this.name + " attaque " + Jason.name)
            console.log("Il reste " + Jason.pv + " hp à " + Jason.name)
        }
    }}

}

let nomTueur = ["Antoine", "Jason", "Anabelle", "Dr. Von Krieger", "John Cena", "Gabrielle"]
let nomSurvivant1 = ["Paul" , "Vincent", "Pierre", "Claire", "Mary", "Valentin"]
let nomSurvivant2 = ["Camille", "Stella", "Panama", "Eclair", "Patrique", "Arthure"]
let nomSurvivant3 = ["MrBeast", "Harry", " Le JDG", "Macron", "Mr.Ours"]
let nomSurvivant4 = ["Le Prolétaire", "mini chat", " Jean-Delamarne", "Patriote", "Laurence", "Katyusha"]
let nomSurvivant5 = ["Laura", "Futuna", "Wallis", "Timoté", "Simon","Filou"]

function indexAleatoire(nom){
    
    let nomAléatoire = (Math.random()* nom.length) |0

    return nomAléatoire
}

let index = indexAleatoire(nomSurvivant1)
let index2 = indexAleatoire(nomSurvivant2)
let index3 = indexAleatoire(nomSurvivant3)
let index4 = indexAleatoire(nomSurvivant4)
let index5 = indexAleatoire(nomSurvivant5)
let indexT = indexAleatoire(nomTueur)

let Jason = new Tueur(nomTueur[indexT])

console.log("Le tueur " + Jason.name + " rôde dans les parages.")

let nerd = new survivant(nomSurvivant1[index], "nerd")
let gendarme = new survivant(nomSurvivant2[index2], "gendarme")
let prof = new survivant(nomSurvivant3[index3], "prof")
let blonde = new survivant(nomSurvivant4[index4], "blond(e)")
let goat = new survivant(nomSurvivant5[index5], "goat")

console.log("voici nos survivants : ")
console.log(nerd)
console.log(gendarme)
console.log(prof)
console.log(blonde)
console.log(goat)

while(Jason.pv>0 && (nerd.vie!= 0 || gendarme.vie!= 0 || prof.vie!= 0 || blonde.vie!= 0 || goat.vie != 0) ){
nerd.MakeAction()
gendarme.MakeAction()
prof.MakeAction()
blonde.MakeAction()
goat.MakeAction()
if(nerd.vie== 0 && gendarme.vie== 0 && prof.vie== 0 && blonde.vie== 0 && goat.vie == 0){
    console.log("Tous les survivants sont décédés," + Jason.name +" a gagné.")
    break
}
if(Jason.pv<=0){
    console.log (Jason.name + " a été vaincu, les survivants ont gagné.")

    break
}
}
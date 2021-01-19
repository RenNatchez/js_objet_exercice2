let client = {
    nom: 'client',
    sac: [],
    ticketDeCaisse: [],
    argent: 30.00,
    achat() {
        let a = parseInt(prompt("veuillez choisir un alliment et inscire son nombre dans la barre de recherche \n -- 1:poire, 2:pomme, 3:bière, 4:coca, 5:pizza, 6:radis, 7:chocolat, 8:tartine--"))
        this.sac.push(magasin.stocks[a - 1])
        this.ticketDeCaisse.push(magasin.prix[a - 1])
        this.argent = this.argent - magasin.prix[a - 1]
    }
}
console.log(client)
let magasin = {
    nom: 'épicierie',
    stocks: [`poire`, `pomme`, `bière`, `coca`, `pizza`, `radis`, `chocolat `, `tartine `],
    prix: [0.5, 0.5, 1.5, 1, 3.5, 1, 2, 2.3],
}
console.log(magasin)
for (let i = 0; i < 3; i++) {
    client.achat()
    console.log(client)
    console.log(magasin)
}
console.log(`je rentre dans une ${magasin.nom}, j'ai 30e, j'achete un ${client.sac[0]} a ${client.ticketDeCaisse[0]}, ${client.sac[1]} a ${client.ticketDeCaisse[1]},${client.sac[2]} a ${client.ticketDeCaisse[2]},. Il ne me reste que ${client.argent}e`)


// let a = prompt(`Comment vas votre morale ? (bien ou mal)`)
// let dame = {
//     prenom: 'Monique',
//     nom: 'Leblanc',
//     age: 75,
//     moral: a,
//     objet: 'canne',
//     raler() {
//         switch (this.moral) {
//             case 'bien':
//                 alert(`Bonjour monsieur ${mec.prenom}`)
//                 break;
//             case 'mal':
//                 alert("Vous me dérangez")
//                 break;
//             default:
//                 alert(`ERROR`)
//                 break;
//         }
//     },
//     promener() {
//         this.objet = 'perdu'
//     }
// }
// let mec = {
//     prenom: 'Roger',
//     nom: 'Lemaire',
//     age: 71,
//     saluer(){
//         alert(`bonjour ${dame.prenom} ${dame.nom}`)
//         dame.raler()
//         a = 'bien' 
//     }
// }
// console.log(dame)
// // dame.raler()
// // console.log(dame)
// // dame.promener()
// // console.log(dame)
// mec.saluer()
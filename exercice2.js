// 1. Création des objets Etudiant et Professeur
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
}

function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
}

// 2. Ajout des méthodes étudier() et enseigner()
Etudiant.prototype.etudier = function() {
    console.log(this.nom + ' ' + this.prenom + ' est en train d\'étudier.');
}

Professeur.prototype.enseigner = function() {
    console.log('Le professeur ' + this.nom + ' est en train d\'enseigner.');
}

// 3. Trier les étudiants par nom et prénom
let etudiants = [new Etudiant('mohamed', 'jbiri', 20, '123456'), new Etudiant('yassin', 'bonno', 22, '7891011')];

etudiants.sort((a, b) => {
    let x = a.nom.toLowerCase() + a.prenom.toLowerCase();
    let y = b.nom.toLowerCase() + b.prenom.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

console.log(etudiants); 

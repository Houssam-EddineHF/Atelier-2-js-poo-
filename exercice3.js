class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }

      // Méthode d'affichage
  afficher() {
    console.log(`Vecteur: x = ${this.x}, y = ${this.y}`);
  }

  /* // Méthode d'addition de deux vecteurs
  addition(vecteur) {
    this.x += vecteur.x;
    this.y += vecteur.y;
  } */
  addition(vecteur) {
    return new Vecteur2D(this.x + vecteur.x, this.y + vecteur.y);
  }

}




// Instanciation de Vecteur2D avec deux paramètres
let vecteur1 = new Vecteur2D(5, 10);
let vecteur2 = new Vecteur2D(3, 4);

vecteur1.afficher();
vecteur2.afficher();

let somme = vecteur1.addition(vecteur2);
somme.afficher();




  
/* // Instanciation de Vecteur2D sans paramètre
let vecteur1 = new Vecteur2D();
console.log(`Vecteur1: x = ${vecteur1.x}, y = ${vecteur1.y}`);

// Instanciation de Vecteur2D avec deux paramètres
let vecteur2 = new Vecteur2D(5, 10);
console.log(`Vecteur2: x = ${vecteur2.x}, y = ${vecteur2.y}`);
 */
  
class Rectangle {
    constructor(longueur = 1, largeur = 1) {
      this.longueur = longueur;
      this.largeur = largeur;
      this.nom = "rectangle";
    }
  
    afficher() {
      console.log(`${this.nom}: longueur = ${this.longueur}, largeur = ${this.largeur}`);
    }
  
    surface() {
      return this.longueur * this.largeur;
    }
  }
  
  let rectangle = new Rectangle(5, 10);
  rectangle.afficher();
  console.log(`Surface du ${rectangle.nom} = ${rectangle.surface()}`);


  class Carre extends Rectangle {
    constructor(cote = 1) {
      super(cote, cote);
      this.nom = "carré";
    }
  }
  
  class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  }
  let carre = new Carre(5);
carre.afficher();

let point = new Point();
console.log(`Point: x = ${point.x}, y = ${point.y}`);

class Segment {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
      this.orig = new Point(x1, y1);
      this.extrem = new Point(x2, y2);
    }
  }
//1    
class Voiture {
    constructor(model, marque, année, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.année = année;
        this.type = type;
        this.carburant = carburant;
    }
}

//3
class Hyundai extends Voiture {
    constructor(model, marque, année, type, carburant, série, hybride) {
        super(model, marque, année, type, carburant);
        this.série = série;
        this.hybride = hybride;
    }

    alarmer() {
        console.log("narinari la Hyundai", this.model);
    }
}


class Ford extends Voiture {
    constructor(model, marque, année, type, carburant, options) {
        super(model, marque, année, type, carburant);
        this.options = options;
    }
}

//2  Création d'une liste de voitures
let listeVoitures = [];


listeVoitures.push(new Voiture("Civic", "Honda", 2022, "Sedan", "Essence"));
listeVoitures.push(new Hyundai("Elantra", "Hyundai", 2020, "Sedan", "Hybride", "Premium", true));
listeVoitures.push(new Ford("Fusion", "Ford", 2021, "Sedan", "Essence", ["climat ", "ta9a "]));
listeVoitures.push(new Hyundai("Sonata", "Hyundai", 2019, "Sedan", "Essence", "Standard", false));

//4 
listeVoitures.sort((a, b) => a.année - b.année);


console.log("Liste des voitures triées par année croissante :");
listeVoitures.forEach(voiture => {
    console.log(voiture);
});

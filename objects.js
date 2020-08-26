class Plant {  
    constructor(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded,) {    
        this.type = type;    
        this.isPerennial = isPerennial;
        this.leafDescription = leafDescription;
        this.leafColor = leafColor;
        this.flowerColor = flowerColor;
        this.flowerDescription = flowerDescription;
        this.gallonsWaterPerWeek = gallonsWaterPerWeek;
        this.amountOfSunNeeded = amountOfSunNeeded;
    }   
    // This function is already done for you.  
    // The changes are all highlighted in bold  
    // This is the same as the describePlant(plant) function   
    describe() {    
        let description = `A ${this.type} which has ${this.leafColor} leaves ${this.leafDescription}.  The flowers are ${this.flowerColor} ${this.flowerDescription} `;    
        return description;  
    }
    clone() {
    let clone = new Plant();
}}

class Garden {  
    constructor(name) {    
        this.name = name;    
        this.plants = [];  
    }
    describe() {
        {
            let description = (this.plants.length > 0) ? `The ${this.name} area has ${this.plants.length} plants in it. Plants in this garden - ` : `The ${this.name} area is empty right now.`;
            description += Plant.describe(this.plants)
        }
    }
    addPlant(plant) {
        this.plants.push(plant);
    }
}

class Estate {
    constructor(name) {
        this.name = name;
        this.roseArbor = new Garden ("Rose Arbor")
        this.perennialGarden = new Garden ("Perennial Garden")
        this.slopePlanters = new Garden ("Sloped Planters")
    }
    addPlant(plant) {
        if (plant.type == "rose"){
            this.roseArbor.plants.push (plant);
        } else {if (plant.isPerennial == true && plant.amountOfSunNeeded <= 5) {
            this.perennialGarden.plants.push (plant); 
           } else {
            this.slopePlanters.plants.push (plant);
        }} 
    }
    describe() {
        let description = `North of the Fountain of Flowers is the Rose Arbor. ${this.roseArbor} 
        West of the Fountain of Flowers is the Perennial Garden. ${this.perennialGarden} 
        South and East of the Fountain of Flowers are the Sloped Planters. ${this.slopePlanters}`;
    }
    calculateWaterUsagePerWeek() {
        let numGallons = 0;
        for (let i = 0; i < this.Garden.length; i++) {
        numGallons += this.Garden[i].gallonsWaterPerWeek;
        }
        return Math.floor(numGallons);
    }
    cloneAllTheRosesAndChangeTheirColors() {
        let clonedRoses = [];
        for (let rose of this.roseArbor) {
            let clonedRose = clone(rose);
            clonedRoses.push(clonedRose);
        }
        this.roseArbor = this.roseArbor.concat(clonedRoses);
    }
}

let myEstate = new Estate(); 
let firstPlant = new Plant("rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4);
myEstate.addPlant(firstPlant); 
let secondPlant = new Plant("orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2);
myEstate.addPlant(secondPlant); 
let thirdPlant = new Plant("marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4);
myEstate.addPlant(thirdPlant); 
myEstate.describe(); 
// This should print the whole description of the estate. 
myEstate.calculateWaterUsagePerWeek(); 
// This should print 2.8 
myEstate.cloneAllTheRosesAndChangeTheirColors(); 
// This should clone the rose and make a second one.
console.log(myEstate.roseArbor.plants.length == 2); 
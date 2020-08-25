class Plant {
  constructor(
    type,
    isPerennial,
    leafDescription,
    leafColor,
    flowerColor,
    flowerDescription,
    gallonsWaterPerWeek,
    amountOfSunNeeded
  ) {
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
    return new Plant(
      this.type,
      this.isPerennial,
      this.leafDescription,
      this.leafColor,
      this.flowerColor,
      this.flowerDescription,
      this.gallonsWaterPerWeek,
      this.amountOfSunNeeded
    );
  }
}
class Garden {
  constructor(name, listOfPlants) {
    this.name = name;
    this.listOfPlants = listOfPlants;
  }
  describe() {
    let description = `The ${this.name} has ${this.listOfPlants.length} plants in it.It contains: A`;
    for (let plant of this.listOfPlants) {
      description += plant.describe();
    }
    return description;
  }
}
class Estate {
  constructor() {
    this.roseArbor = new Garden("roseArbor", []);
    this.perennialGarden = new Garden("perennialGarden", []);
    this.slopePlanters = new Garden("slopePlanters", []);
  }
  addPlant(Plant) {
    if (Plant.type === "rose") {
      this.roseArbor.listOfPlants.push(Plant);
    } else if (Plant.isPerennial === true && Plant.amountOfSunNeeded <= 5) {
      this.perennialGarden.listOfPlants.push(Plant);
    } else {
      this.slopePlanters.listOfPlants.push(Plant);
    }
    return Estate;
  }
  describe() {
    let description = "The estate has 3 gardens, they are:";
    for (let gardenKey in this) {
      let garden = this[gardenKey];
      description += garden.describe();
    }
    return description;
  }
  calculateWaterUsagePerWeek() {
    let numGallons = 0;
    // Your Code Here!
    for (let gardenKey in this) {
      let garden = this[gardenKey];
      for (let plant of garden.listOfPlants) {
        numGallons += plant.gallonsWaterPerWeek;
      }
    }
    return Math.floor(numGallons);
  }
  cloneAllTheRoses() {
    let clonedRoses = [];
    for (let rose of this.roseArbor.listOfPlants) {
      let clonedRose = rose.clone();
      clonedRoses.push(clonedRose);
    }
    this.roseArbor.listOfPlants = this.roseArbor.listOfPlants.concat(
      clonedRoses
    );
  }
}

  







let myEstate = new Estate();
 
let firstPlant = new Plant("rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4);
myEstate.addPlant(firstPlant);
 
let secondPlant = new Plant("orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2);
myEstate.addPlant(secondPlant);
 
let thirdPlant = new Plant("marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4);
myEstate.addPlant(thirdPlant);
 
myEstate.describe(); // This should print the whole description of the estate.
 
myEstate.calculateWaterUsagePerWeek(); // This should print 2.8
 
myEstate.cloneAllTheRoses(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.listOfPlants.length == 2);
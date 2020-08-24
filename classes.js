// Plant Class

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

let rose = new Plant(
  "rose",
  true,
  "rounded with a point",
  "green",
  "red",
  "concentric circles of pedals",
  0.8,
  4
);

let marigold1 = new Plant(
  "marigold",
  false,
  "thin and jagged along branches",
  "green",
  "yellow and orange",
  "rounded pedals in groups of five with a darker orange center",
  0.8,
  4
);

console.log(rose.describe());
console.log(rose.clone());
console.log(marigold1.describe());
console.log(marigold1.clone());

// Garden Class

class Garden {
  constructor(name, listOfPlants) {
    this.name = name;
    this.listOfPlants = listOfPlants;
  }

  describe() {
    let description =
      "The " +
      this.name +
      " has many types of plants in it" +
      "." +
      " It contains: " +
      this.listOfPlants.length;

    for (let plant of this.listOfPlants) {
      description += "\n" + plant.describe();
    }
    return description;
  }
}

let orchid = new Plant(
  "orchid",
  true,
  "long and wide with a point at the end",
  "green",
  "fuscia",
  "pedals surrounding a central mouth",
  1.2,
  2
);

let marigold = new Plant(
  "marigold",
  false,
  "thin and jagged along branches",
  "green",
  "yellow and orange",
  "rounded pedals in groups of five with a darker orange center",
  0.8,
  4
);

let gardenArray = [rose, orchid, marigold];

let perennialGarden = new Garden("Perennial Garden", gardenArray);
console.log(perennialGarden.describe());

let slopePlanters = new Garden("Slope Planters", gardenArray);
console.log(slopePlanters.describe());

// Estate Class

class Estate {
  constructor() {
    this.roseArbor = new Garden("Rose Arbor", []);
    this.perennialGarden = new Garden("Perennial Garden", []);
    this.slopePlanters = new Garden("Slope Planters", []);
  }

  addPlant(plant) {
    if (plant.type === "rose") {
      this.roseArbor.listOfPlants.push(plant);
    } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
      this.perennialGarden.listOfPlants.push(plant);
    } else {
      this.slopePlanters.listOfPlants.push(plant);
    }
  }

  describe() {
    let description = "The " + "estate" + " has an abundance of gardens" + ".";

    for (let gardenKey in this) {
      let garden = this[gardenKey];
      description += "\n" + garden.describe();
    }
    return description;
  }

  calculateWaterUsagePerWeek() {
    let numGallons = 0;

    for (let gardenKey in this) {
      let gardens = this[gardenKey];
      for (let plant of gardens.listOfPlants) {
        numGallons += plant.gallonsWaterPerWeek * 100;
      }
    }
    return numGallons / 100;
  }

  cloneAllTheRoses() {
    let newRose = [];
    for (let originalRose of this.roseArbor.listOfPlants) {
      if (originalRose.isFlawed) {
        newRose.push(rose.clone(originalRose));
      } else {
        newRose.push(originalRose);
      }
    }
    for (let originalRose of newRose) {
      this.roseArbor.listOfPlants.push(originalRose);
    }
  }
}

// let estate = new Estate();
// estate.addPlant(rose);
// estate.addPlant(orchid);
// estate.addPlant(marigold);
// estate.cloneAllTheRosesAndChangeTheirColors();
// console.log(estate);
// console.log(estate.describe());
// console.log(estate.calculateWaterUsagePerWeek());

let myEstate = new Estate();

let firstPlant = new Plant(
  "rose",
  true,
  "rounded with a point",
  "green",
  "red",
  "concentric circles of pedals",
  0.8,
  4
);
myEstate.addPlant(firstPlant);

let secondPlant = new Plant(
  "orchid",
  true,
  "long and wide with a point at the end",
  "green",
  "fuscia",
  "pedals surrounding a central mouth",
  1.2,
  2
);
myEstate.addPlant(secondPlant);

let thirdPlant = new Plant(
  "marigold",
  false,
  "thin and jagged along branches",
  "green",
  "yellow and orange",
  "rounded pedals in groups of five with a darker orange center",
  0.8,
  4
);
myEstate.addPlant(thirdPlant);

myEstate.describe(); // This should print the whole description of the estate.

myEstate.calculateWaterUsagePerWeek(); // This should print 2.8

myEstate.cloneAllTheRoses(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.listOfPlants.length == 2);

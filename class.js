class Plant {
    constructor(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded/*etc.. finish the rest of these*/) {
      this.type = type;
      this.isPerennial = isPerennial;
      this.leafDescription = leafDescription;
      this.leafColor = leafColor;
      this.flowerColor = flowerColor
      this.flowerDescription = flowerDescription
      this.gallonsWaterPerWeek = gallonsWaterPerWeek
      this.amountOfSunNeeded = amountOfSunNeeded
      //etc... finish the rest of these
    }
  ​
    // This function is already done for you.
    // The changes are all highlighted in bold
    // This is the same as the describePlant(plant) function
     describe() {
      let description = `A ${this.type} which has ${this.leafColor} leaves ${this.leafDescription}.  The flowers are ${this.flowerColor} ${this.flowerDescription} `;
      return description;
    }
  }
  class Garden {
    constructor(name) {
      this.name = name;
      this.plants = [];
    }
    describeGarden() {
        let description = `The ${this.name} has ${this.plant.length} plants in it: `;
    for (let plant of listOfPlants) {
      description += describePlant(plant);
    }
    return description;
  }
    }
  
  
  class Estate {
      constructor() {
          this.roseArbor = new Garden("Rose Arbor");
          this.perennialGarden = new Garden("Perennial Garden");
          this.slopePlanter = new Garden("Slope Planter");
      }
      describeEstate() {
          let description = `The estate has ${this.Object.keys(estate).length} gardens: `;
          for (let gardenName in estate) {
            let listOfPlants = estate[gardenName];
            description += describeGarden(gardenName, listOfPlants);
          }
          return description;
        }
      }
  

  
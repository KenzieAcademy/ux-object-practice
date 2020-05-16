/*
    Object Practice

    Gardening!

    You were hired to work as a landscaper for a large estate.

    See garden.jpg

    The owner wants you to help them organize their gardens.

    They have decided there will be three gardens: the rose arbor, 
    the perennial garden, and the slope planters.

    You want to use your newly learned programming skills to make
    this job easier.  

    Complete the following exercises to make your work on the garden easier.
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: createdPopulatedEstate is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/

/* ---------------------------------------------------------------------------
    Exercise One

    Creating a plant

    In order to keep track of your plants, you need to store them in your program.
    Complete the createPlant() function, which returns an object representing a plant.
    It should include all of the properties listed in the comment above the function.
*/
/**
 * createPlant - Produces an object respresenting a plant.  It should have the following properties:
 * @param {string} type - The Type of plant.  Possible values are [ "rose", "orchid", "lily", "lavender", "poppy", "begonia", "snapdragon", "marigold"]
 * @param {boolean} isPerennial - A boolean showing if the plant is a perennial or not
 * @param {string} leafDescription - A visual description of the leaves
 * @param {string} leafColor - A string representing the leaf color
 * @param {string} flowerColor - A string representing the color of the flower
 * @param {string} flowerDescription - A visual description of the flower
 * @param {number} gallonsWaterPerWeek - 0.0 to 3.0, representing the number of gallons of water needed per week for the plant
 * @param {number} amountOfSunNeeded - 0 to 10, representing the amount of sun needed
 */

  class Plant {
    constructor(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded) {
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
    changeColor() {
      let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
      // ~~ Magic Genetic Engineering ~~
      let randIndex = Math.floor(Math.random() * newColors.length);
      if (this.isFlawed) {
          this.flowerDescription = "wilted sad buds with no pedals.";
          this.flowerColor = null;
      } else {
          this.flowerColor = newColors[randIndex];
      }
      let randomChance = Math.floor(Math.random() * 3);
      if (randomChance < 1) {
          this.isFlawed = true;
      }
    }
  }

     clone();
        {
        let clone = new Plant();
        for (let property in this) {
            clone[property] = this[property];
        }
        clone.changeColor();
        return clone;
     }

     describe() {
       return `A ${this.type} which has ${this.leafColor} leaves that ${this.leafDescription}. Its flowers ${flowerDescription} and are ${flowerColor}. `;
     }

  /* ------------------------------------------------
      Exercise Two
  
      The owner wants you to decide where to put every new plant they get.
  
      Each plant must go in one of the three gardens of the estate.
  
      The createEstate() has already been written for you, which returns an object representing the entire estate.
      The estate contains three collections of plants: 
      the roseArbor, the perennialGarden, and the slopePlanters.
  
      Now complete the function addPlantToEstate()
      This should decide, based upon the plant's properties, where to put the plant in the estate.  
  
      The rose arbor should contain all of the roses.
      The perennial garden should contain only perennials.  However, the perennial garden doesn't get that much sun.  
      No plants with an amountOfSunNeeded greater than 5 should be placed in the perennial garden.
      The rest of the plans should be placed in the slop planters.
  */

  class Garden {
      constructor(garden) {
          this.garden = garden;
          this.plants = [];
      }
  }

    describe() {
      let description = `The ${this.garden} has ${this.plants.length} types of plants in it.  It contains: `;
      for (let plant of this.plants) {
        description += "\n" + plant.describe();
      }
      return description;
    }
  
    addPlant(plant) {
        this.plants.push(plant);
    }
  
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
  
    firstPlant.clone();

    let roseArbor = new Garden("Rose Arbor");
    roseArbor.addPlant(firstPlant);

  class Estate {
    constructor() {
      this.roseArbor = new Garden("Rose Arbor");
      this.perennialGarden = new Garden("Perennial Garden");
      this.slopePlanters = new Garden("Slope Planters");
    }
  }
  addPlant(plant) {
    if (plant.type === "rose") {
      this.roseArbor.plants.push(plant);
    }else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
      this.perennialGarden.plants.push(plant);
    }else {
      this.slopePlanters.plants.push(plant);
    }
  }
  describe() {
    const estateLength = this.length;
    let description = `The estate has ${estateLength} gardens.`;
    for(let gardenName in this) {
      let garden = this[gardenName];
      description += "\n" + garden.describe();
    }
    return description;
  }

  let estate = new Estate();
  estate.addPlant(firstPlant);
  /**
   * addPlantToEstate
   * @param {Object} estate - The estate object - created by calling createEstate()
   * @param {Object} plant - A plant object - created by calling createPlant()
   *
   * This should add the given plant into one of the three arrays within the estate.
   */
  
  /* ------------------------------------------------
      Exercise Three
  
      The owner wants to have an easy way to hear about the plants in their garden.
  
      So you decide to write some functions which describe the plants.
  
      Complete the describePlant(), describePlants(), and describeGarden() functions below.
  
      They should each return a string, which is a readible english paragraph that nicely describes
      the visual features of the plant or a list of plants, or the entire estate.
  
      Feel free to be as elaborate as you wish!
  
      If you want examples of different plants, set a breakpoint and run the test. 
      It will go through several example plants.
      
      Try to have as little redundent code as possible! 
      
      Hint: describeEstate can call describeGarden which can call describePlant
  
      Hint2: YOu can use Template literals here to make this easy! If you have not used those yet,
      read up on them here: https://flaviocopes.com/javascript-template-literals/  
      `A ${plant.name} which has ....`
      But you can just use string concatenation too   "A " + plant.name + " which has ..."
  */
  
  /**
   * describePlant
   * @param {*} plant - A plant object
   *
   * Given a plant, this should return a string that is the description of the plant.
   * The description should use at least a few of the properties on the plant to form a sentence.
   *
   * Example: "A Rose which has green leaves that are rounded with a point.  The flowers are red concentric circles of pedals. "
   */
  function describePlant(plant) {
    let description = `A ${plant.type} which has ${plant.leafColor} leaves that ${plant.leafDescription}. Its flowers are ${plant.flowerColor}.`;
  
    return description;
  }
  
  /**
   * describeGarden
   * @param {String} gardenName - The name of the garden to describe
   * @param {Object[]} listOfPlants - The List of plants to be described.
   *
   * // Example: "The Rose Garden has 10 types of plants in it.  It contains: A"
   */
  function describeGarden(gardenName, listOfPlants) {
    let description = `${gardenName} has ${listOfPlants.length} types of plants in it. It contains:`;
    for (let plant of listOfPlants) {
      description += "\n" + describePlant(plant);
    }
    return description;
  }
  
  /**
   * describeEstate
   * @param {Object} estate - An estate object
   * Return a string describing all the different visual features of all the gardens in the estate.
   * This should describe every garden and every plant.
   */
  function describeEstate(estate) {
    const estateLength = estate.length;
    let description = `The estate has ${estateLength} gardens.`;
    for (let gardenName in estate) {
      let listOfPlants = estate[gardenName];
      description += "\n" + describeGarden(gardenName, listOfPlants);
    }
    return description;
  }
  
  /* ---------------------------------------------------------------------------
      Exercise Four
  
      The owner wants you to tell them how much water the entire garden is going
      to need per week.
  
      Complete the calculateWaterUsagePerWeek() function.
  */
  
  /**
   * calculateWaterUsagePerWeek
   * @param {Object} estate - An estate object
   *
   * This should return a number which is the total number of gallons of water
   * needed for the whole estate.
   *
   * Make a loop for each garden to tally the number of gallons needed by all the plants, then
   * add those up to get the total water usage.
   */
  function calculateWaterUsagePerWeek(estate) {
    let numGallons = 0;
    for (let gardenName in estate) {
      for (let plant of estate[gardenName]) {
        numGallons += plant.gallonsWaterPerWeek * 10; // multiply decimal by 10 to work with whole numbers
      }
    }
    return numGallons / 10; // divide answer by 10 to convert back to decimal
  }
  
  /* ---------------------------------------------------------------------------
      Exercise Five
  
      Clone a plant
  
      The botanist of the estate wants more colors of roses, so they have devised a way to
      alter the color of a plant.
      They want you to clone each of the roses in the garden giving them more
      elaborate colors.
  
      First, complete cloneRose().
      Given a plant, this should clone it and return a copy with a new color.
  
      Complete cloneAllTheRosesAndChangeTheirColors().  
      This function should go attempt to clone all the roses in the garden.  
      Make sure your algorithm does not clone or change the color of flawed plants!
  */
  
  /**
   * cloneRose
   * @param {Object} plant - A plant object
   *
   * This should return a new object, which is a clone of the given plant.
   * The clone should have identitcal properties to the given plant, except for the color.
   *
   * Every clone should run changeColorOfPlant(clone)
   * This will use the botanist's special algorithm to make new colors of roses.
   *
   */
  function cloneRose(plant) {
    let clone = {};
    for (let key in plant) {
      clone[key] = plant[key];
    }
    return clone;
  }
  
  //
  // DO NOT CHANGE ANYTHING IN THIS
  /**
   * changeColorOfPlant
   * @param {Object} plant
   * The Owner's proprietary color changing algorithm.
   * Given a plant, this genetically changes the color.
   *
   * However!  Due to a flaw in the color changing process, there is a chance that a rose will become flawed
   * after changing the color.
   * If you attempt to modify a flawed flower, it will produce a flowerless
   * plant.
   */
  function changeColorOfPlant(plant) {
    let newColors = [
      "Amber",
      "Crimson",
      "Aqua",
      "Cerulean Blue",
      "Flamingo",
      "Gun Smoke",
      "Jade",
      "Merigold",
      "Mustard",
      "Periwinkle",
    ];
    // ~~ Magic Genetic Engineering ~~
    let randIndex = Math.floor(Math.random() * newColors.length);
  
    if (plant.isFlawed) {
      plant.flowerDescription = "wilted sad buds with no pedals.";
      plant.flowerColor = null;
    } else {
      plant.flowerColor = newColors[randIndex];
    }
  
    let randomChance = Math.floor(Math.random() * 3);
    if (randomChance < 1) {
      plant.isFlawed = true;
    }
  }
  // DO NOT CHANGE ANYTHING IN THIS
  
  /**
   * cloneAllTheRosesAndChangeTheirColors
   * @param {Object} estate - An estate object
   *
   * This should attempt to clone every rose and add the plant to the garden.
   * Just watch out for flawed plants!  Don't attempt to clone flawed plants.
   * Otherwise you will produce flowerless roses.
   */
  function cloneAllTheRosesAndChangeTheirColors(estate) {
    // Your Code Here!
    // for each rose...
    let clonedRoses = [];
    for (let rose of estate.roseArbor) {
      if (rose.isFlawed) {
        clonedRoses.push(cloneRose(rose));
      } else {
        clonedRoses.push(rose);
      }
    }
    for (let rose of clonedRoses) {
      estate.roseArbor.push(rose);
    }
    // Hint: Watch out for modifying an array you are currently looping through!  How can you avoid that?
    // Instead of putting the new plants immediately into the rose arbor, maybe store them in a new array
    // until you have finished iterating.  Then you can add them in after your loop finishes.
  }
  
 
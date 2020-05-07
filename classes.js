class Plant {
    constructor(type, isPerennial, leafDescription, leafColor, flowerColor, flowerDescription, gallonsWaterPerWeek, amountOfSunNeeded) {
        this.type = type;
        this.isPerennial = isPerennial;
        this.leafDescription = leafDescription;
        this.leafColor = leafColor;
        this.flowerColor = flowerColor;
        this.flowerDescription = flowerDescription;
        this.gallonsWaterPerWeek = gallonsWaterPerWeek;
        this.amountOfSunNeeded = amountOfSunNeeded
    }
    clone() {
        let clone = new Plant();
        for (let property in this) {
            clone[property] = this[property];
        }
        clone.changeColor()
        return clone;
    }
    describe = () => {
        let description = `A ${this.type} which has ${this.leafColor} leaves that are ${this.leafDescription}. The flowers are ${this.flowerColor} ${this.flowerDescription}.`;

        return description;
    }
    changeColor = () => {
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
            "Periwinkle"
        ];

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
    };
}
class Garden {
    constructor(name) {
        this.name = name;
        this.plants = [];
    }
    describe() {
        let description = `${this.name} has ${this.plants.length} types of plants in it. It contains:`;
        for (let plant of this.plants) {
            description += "\n" + plant.describe();
        }
        return description;
    }
    addPlant(plant) {
        this.plants.push(plant);
    }
}
class Estate {
    constructor() {
        this.roseArbor = new Garden("Rose Arbor");
        this.perennialGarden = new Garden("Perennial Garden");
        this.slopePlanters = new Garden("Slope Planters");
    }
    addPlant(plant) {
        if (plant.type === "rose") {
            this.roseArbor.plants.push(plant);
        } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
            this.perennialGarden.plants.push(plant);
        } else {
            this.slopePlanters.plants.push(plant);
        }
    }
    describe() {
        const estateLength = this.length;
        let description = `The estate has ${estateLength} gardens.`;
        for (let gardenName in this) {
            let garden = this[gardenName]
            description += "\n" + garden.describe();
        }
        return description;
    }
    calculateWaterUsagePerWeek() {
        let numGallons = 0;
        for (let garden in this) {
            for (let plant of this[garden].plants) {
                numGallons += plant.gallonsWaterPerWeek * 10;
            }
        }
        return numGallons / 10;
    }
    cloneAllTheRosesAndChangeTheirColors() {
        let clonedRoses = [];
        for (let rose of this.roseArbor.plants) {
            if (!rose.isFlawed) {
                clonedRoses.push(rose.clone());
            }
        }
        for (let rose of clonedRoses) {
            this.roseArbor.plants.push(rose)
        }
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

myEstate.cloneAllTheRosesAndChangeTheirColors(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.plants.length == 2);

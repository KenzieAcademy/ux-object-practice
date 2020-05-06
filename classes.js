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

    describe = () => {
        let description = "";
        description = `This plant is a ${this.type}, its color is ${this.flowerColor}.`
        return description
    }

    changeColor() {
        let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
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

    clone = () => {
        let clone = new Plant();
        for (let property in this) {
            clone[property] = this[property];
        }
        console.log(clone);
        clone.changeColor;
        console.log(clone)
        return clone;
    }
}

class Garden {
    constructor(name) {
        this.name = name;
        this.plants = [];
    }

    describe = () => {
        let description = `${this.name} has ${this.plants.length} types of plants. It contains:`;
        for (let plant of this.plant) {
            description += "/n" + plant.describe();
        }
        return description
    }

    addPlant(plant) {
        this.plants.push(plant)
    }
}

class Estate {
    constructor() {
        this.roseArbor = new Garden('Rose Arbor')
        this.perennialGarden = new Garden('Perennial Garden')
        this.slopePlanters = new Garden('Slope Planters')
    }

    addPlant(plant) {
        if (plant.type == "rose") {
            this.roseArbor.push(plant)
        } else if (plant.isPerennial == true && plant.amountOfSunNeeded <= 5) {
            this.perennialGarden.push(plant)
        } else {
            this.slopePlanters.push(plant)
        }
    }

    describe() {
        const estateLength = this.length;
        let description = 'The estate has ${estateLength} gardens.'
        for (let gardenName in this) {
            let garden = this[gardenName];
            description += '/n' + garden.description;
        }
        return description
    }
}
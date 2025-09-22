const ingredientTable = document.querySelector(".ingredient-table");
const GRAM = "gram";
const TBSP = "tbsp";
const CUP = "cup";
const SINGLE = "single";
const TSP = "tsp";
console.log(ingredientTable);
function ingredient(name, unit, cost) {
    this.ingredientName = name;
    
    switch(unit) {
        case CUP:
            this.CUP = cost;
            this.TBSP = cost/16;
            this.TSP = cost/48;
            break;
        case TBSP:
            this.TBSP = cost;
            this.CUP = cost*16;
            this.TSP = cost/3;
            break;
        case GRAM:
            this.GRAM = cost;
            break;
        case SINGLE:
            this.SINGLE = cost;
            break;
    }
}

const flour = new ingredient("Hard White Wheat", GRAM, 0.006);
const butter = new ingredient("Kerry Gold Butter", TBSP, 0.26);
const eggs = new ingredient("Eggs", SINGLE, 0.21);
const oliveOil = new ingredient("Olive Oil", CUP, 2.13);
const chocolateChip = new ingredient("Nestle Toll House Semi-Sweet Chocolate Chips", CUP, 1.76);
const vanillaExtract = new ingredient("McCormick Pure Vanilla Extract", CUP, 10.98);
const bakingPowder = new ingredient("Clabber Girl Baking Powder", CUP, 1.44);
const bakingSoda = new ingredient("Arm & Hammer Pure Baking Soda", CUP, 0.33);
const sugar = new ingredient("Domino Sugar", CUP, 0.4);
const brownSugar = new ingredient("Member's Mark Light Brown Sugar", CUP, 0.48);
const powderedSugar = new ingredient("Member's Mark Powdered Sugar", CUP, 0.48);
const yeast = new ingredient("Fleischmann's Classic Bread Machine Instant Yeast", CUP, 10.96);
const milk = new ingredient("Member's Mark Whole Milk", CUP, 0.56);
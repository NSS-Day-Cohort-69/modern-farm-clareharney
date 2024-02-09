console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { Catalog } from "./catalog.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
// import { createAsparagus } from "./seeds/asparagus.js"




const yearlyPlan = createPlan()
console.log(yearlyPlan)

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

plantSeeds(yearlyPlan)

const plantedSeeds = usePlants()
console.log(plantedSeeds)

const harvestedPlantsArray = harvestPlants(plantedSeeds)

const catalog = Catalog(harvestedPlantsArray)

const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = catalog

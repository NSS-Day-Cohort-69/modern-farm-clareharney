import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
  for (const row of yearlyPlan) {
    for (const plantType of row) {
      if (plantType === "Asparagus") {
        addPlant(createAsparagus())
      }
      if (plantType === "Corn") {
        addPlant(createCorn())
      }
      if (plantType === "Potato") {
        addPlant(createPotato())
      }
      if (plantType === "Soybean") {
        addPlant(createSoybean())
      }
      if (plantType === "Sunflower") {
        addPlant(createSunflower())
      }
      if (plantType === "Wheat") {
        addPlant(createWheat())
      }
    }
  }
}

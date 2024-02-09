
export const harvestPlants = (plantsArray) => {
    let seedObjects = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn"){
            for (let i = 0; i < plant.output / 2; i++)
            seedObjects.push(plant)
        }
        else {
            for (let i = 0; i < plant.output; i++)
            seedObjects.push(plant)
        }
    }
    return seedObjects
}
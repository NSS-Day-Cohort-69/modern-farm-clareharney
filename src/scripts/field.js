let field = []

export const addPlant = (seed) => {
    if (Array.isArray(seed) === true) {
        for (const eachItem of seed) {
            field.push(eachItem)
        }
    } 
    else {
        field.push(seed)
    }
}

export const usePlants = () => {
    return field
}

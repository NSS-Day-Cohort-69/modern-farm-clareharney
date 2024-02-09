

export const Catalog = (harvestedFoodArray) => {
    let htmlString = ''
    for (const food of harvestedFoodArray) {
        htmlString += `<section class = "plant">${food.type}</section>`
    }
    return htmlString
}
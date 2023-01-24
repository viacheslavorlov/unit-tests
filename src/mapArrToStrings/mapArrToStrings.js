const mapArrToStrings = (array) => {
    return array
        .filter(item => Number.isInteger(item))
        .map(item => item.toString())
}

module.exports = mapArrToStrings
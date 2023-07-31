//Imports all variations
const Triangle = require('./triangle')
const Circle = require('./circle')
const Square = require('./square')

//Series of if staments that cycle through shape options and then transplants the data from inputs
function setShape(data) {

    if (data.logoShape === 'Circle') {
        const newCircle = new Circle (data.logoColour, data.logoText, data.textColour)
        return newCircle.render()
    }

    if (data.logoShape === 'Square') {
        const newSquare = new Square (data.logoColour, data.logoText, data.textColour)
        return newSquare.render()
    }

    if (data.logoShape === 'Triangle') {
        const newTriangle = new Triangle (data.logoColour, data.logoText, data.textColour)
        return newTriangle.render()
    }
    else{
     throw new Error ('Something went very wrong')
    }
};

module.exports = setShape;
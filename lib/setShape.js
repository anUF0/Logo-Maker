const Triangle = require('./triangle')
const Circle = require('./circle')
const Square = require('./square')

function setShape(data) {

    if (data.logoShape === 'Circle') {
        const newCircle = new Circle (data.logoText, data.shapeColour, data.textColour)
        return newCircle.render()
    }

    if (data.logoShape === 'Square') {
        const newSquare = new Square (data.logoText, data.shapeColour, data.textColour)
        return newSquare.render()
    }

    if (data.logoShape === 'Triangle') {
        const newTriangle = new Triangle (data.logoText, data.shapeColour, data.textColour)
        return newTriangle.render()
    }
};

module.exports = setShape;
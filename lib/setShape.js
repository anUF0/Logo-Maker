const Triangle = require('./triangle')
const Circle = require('./circle')
const Square = require('./square')

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
};

module.exports = setShape;
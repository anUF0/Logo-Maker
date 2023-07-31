const Shape = require('./shape')

class Triangle extends Shape {
    constructor(logoColour, logoText, textColour){
        super(logoColour, logoText, textColour);
    }
    render(){
        //Returns .svg formatted code to be used as body
        return `
        <svg version='1.1'  width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        <polygon points='200 0, 0 ,0 100, 100' fill='${this.logoColour}'/>
        <text x='33%' y='22%' font-size='50' text-anchor='middle' fill='${this.textColour}'>${this.logoText}</text>
        </svg>`
    }
}

module.exports = Triangle;
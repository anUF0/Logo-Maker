const Shape = require('./shape')

class Circle extends Shape {
    constructor(logoColour, logoText, textColour){
        super(logoColour, logoText, textColour);
    }
    render(){
        //Returns .svg formatted code to be used as body
        return `
        <svg version='1.1'  width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='150' cy='100' r='100' fill ='${this.logoColour}'/>
        <text x='50%' y='55%' font-size='60' text-anchor='middle' fill='${this.textColour}'>${this.logoText}</text>
        </svg>`
    }
}

module.exports = Circle;
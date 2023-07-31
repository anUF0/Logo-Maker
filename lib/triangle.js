const Shape = require('./shape')

class Triangle extends Shape {
    constructor(logoColour, logoText, textColour){
        super(logoColour, logoText, textColour);
    }
    render(){
        return `
        <svg version="1.1"  width="300" height="200" xmlns='http://www.w3.org/2000/svg'>
        <polygon points='100 0, 0 ,0 50, 100' fill='${this.logoColour}'/>
        <text x="50%" y="40%" font-size="2.3rem" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>
        </svg>`
    }
}

module.exports = Triangle;
const Shape = require('./shape')

class Triangle extends Shape {
    constructor(logoColour, textColour, logoText){
        super(logoColour, textColour, logoText);
    }
    render(){
        return `
        <svg version="1.1"  width="300" height="200" xmlns='http://www.w3.org/2000/svg'>
        <polygon points='100 0, 0 ,0 50, 100' fill='${this.logoColour}'/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>
        <svg>`
    }
}

module.exports = Triangle;
const Shape = require('./shape')

class Square extends Shape {
    constructor(logoColour, textColour, logoText){
        super(logoColour, textColour, logoText);
    }
    render() {
        return `
        <svg version="1.1"  width="300" height="200" xmlns='http://www.w3.org/2000/svg'>
        <rect width="100" height="100" rx="10" ry='10 fill='${this.logoColour}' />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>
        <svg>`;
      }
}

module.exports = Square;
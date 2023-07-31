const Shape = require('./shape')

class Square extends Shape {
    constructor(logoColour, logoText, textColour){
        super(logoColour, logoText, textColour);
    }
    render() {
        return `
        <svg version="1.1"  width="300" height="200" xmlns='http://www.w3.org/2000/svg'>
        <rect rect width="100" height="100" rx="15" ry="15" fill='${this.logoColour}' />
        <text x="50%" y="50%" font-size="70" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>
        </svg>`;
      }
}

module.exports = Square;
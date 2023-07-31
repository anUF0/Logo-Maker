const Shape = require('./shape')

class Square extends Shape {
    constructor(logoColour, logoText, textColour){
        super(logoColour, logoText, textColour);
    }
    render() {
        return `
        <svg version="1.1"  width="300" height="200" xmlns='http://www.w3.org/2000/svg'>
        <rect width="200" height="200" rx="30" ry="15" fill='${this.logoColour}' />
        <text x="30%" y="63%" font-size="80" text-anchor="middle" fill="${this.textColour}">${this.logoText}</text>
        </svg>`;
      }
}

module.exports = Square;
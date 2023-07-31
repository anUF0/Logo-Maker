const Square = require('../lib/square');

describe('Square', () => {
    it(`should return a rounded square aquamarine logo with the maroon text "AxM"`, () => {
        const testSquare = new Square('aquamarine','AxM','#800000');
        expect(testSquare.render()).toEqual( `
        <svg version="1.1"  width="300" height="200" xmlns='http://www.w3.org/2000/svg'>
        <rect width="200" height="200" rx="30" ry="15" fill='aquamarine' />
        <text x="30%" y="63%" font-size="80" text-anchor="middle" fill="#800000">AxM</text>
        </svg>`
        );
    });
});
const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it(`should return a triangular aquamarine logo with the maroon text 'AxM'`, () => {
        const testTriangle = new Triangle('aquamarine','AxM','#800000');
        expect(testTriangle.render()).toEqual( `
        <svg version='1.1'  width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        <polygon points='200 0, 0 ,0 100, 100' fill='aquamarine'/>
        <text x='33%' y='22%' font-size='50' text-anchor='middle' fill='#800000'>AxM</text>
        </svg>`
        );
    });
});
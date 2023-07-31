const Circle = require('../lib/circle');

describe('Circle', () => {
    it(`should return a circular aquamarine logo with the maroon text 'AxM'`, () => {
        const testCircle = new Circle('aquamarine','AxM','#800000');
        expect(testCircle.render()).toEqual( `
        <svg version='1.1'  width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='150' cy='100' r='100' fill ='aquamarine'/>
        <text x='50%' y='55%' font-size='60' text-anchor='middle' fill='#800000'>AxM</text>
        </svg>`
        );
    });
});
const expect = require('chai').expect;
const decodeMorse = require('../main.js').decodeMorse;

describe('decodeMorse', () => {
  it('decodes morse code', () => {
    const expected = 'HEY JUDE';
    const actual = decodeMorse('.... . -.--   .--- ..- -.. .');
    expect(actual).to.equal(expected);
  });
});

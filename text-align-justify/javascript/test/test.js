const expect = require('chai').expect;
const justify = require('../main.js');
const Sentence = justify.Sentence;

describe('Solution', () => {
  describe('Sentence', () => {
    it('adds words when space is available', () => {
      const sentence = new Sentence(10);

      let accepted = sentence.add('Lorem');
      expect(accepted).to.be.true;
      expect(sentence.words).to.deep.equal(['Lorem']);

      accepted = sentence.add('ipsum');
      expect(accepted).to.be.false;
      expect(sentence.words).to.deep.equal(['Lorem']);

      accepted = sentence.add('amet');
      expect(accepted).to.be.true;
      expect(sentence.words).to.deep.equal(['Lorem', 'amet']);
    });

    it('renders justified', () => {
      const tests = [
        { words: ['Lorem'], expected: 'Lorem\n' },
        { words: ['Lorem', 'amet'], expected: 'Lorem      amet\n' },
        { words: ['Lorem', 'amet', 'sit'], expected: 'Lorem  amet sit\n' }
      ];

      tests.forEach((test) => {
        const sentence = new Sentence(15);
        test.words.forEach((word) => {
          const added = sentence.add(word);
          expect(added).to.be.true;
        });
        expect(sentence.render()).to.equal(test.expected);
      });
    });

    it('renders last line not justified', () => {
      const sentence = new Sentence(15);
      sentence.add('Lorem');
      sentence.add('amet');
      expect(sentence.render(true)).to.equal('Lorem amet');
    });
  });

  it('should emit justified content', () => {
    const expected = `Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.`;
    const testString = 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
      'elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor ' +
      'eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet ' +
      'felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum ' +
      'urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. ' +
      'Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel ' +
      'risus faucibus euismod. Suspendisse rhoncus rhoncus felis at ' +
      'fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit ' +
      'fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. ' +
      'Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque ' +
      'commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut ' +
      'elementum justo nulla et dolor.';
    const actual = justify(testString, 30);
    expect(actual).to.equal(expected);
    // expect(true).to.be.true;
  });
});

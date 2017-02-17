const lookupTable = () => {
  const t = new Map();
  t.set('.-', 'A');
  t.set('-...', 'B');
  t.set('-.-.', 'C');
  t.set('-..', 'D');
  t.set('.', 'E');
  t.set('..-.', 'F');
  t.set('--.', 'G');
  t.set('....', 'H');
  t.set('..', 'I');
  t.set('.---', 'J');
  t.set('-.-', 'K');
  t.set('.-..', 'L');
  t.set('--', 'M');
  t.set('-.', 'N');
  t.set('---', 'O');
  t.set('.--.', 'P');
  t.set('--.-', 'Q');
  t.set('.-.', 'R');
  t.set('...', 'S');
  t.set('-', 'T');
  t.set('..-', 'U');
  t.set('...-', 'V');
  t.set('.--', 'W');
  t.set('-..-', 'X');
  t.set('-.--', 'Y');
  t.set('--..', 'Z');
  t.set('.-.-.-', '.');
  t.set('--..--', ',');
  t.set('..--..', '?');
  t.set('.----.', '\'');
  t.set('-.-.--', '!');
  t.set('...---...', 'SOS');
  return t;
};

const decodeMorse = (morseCode) => {
  const table = lookupTable();

  let words = morseCode.trim().split('   ');
  words = words.map((word) => {
    let letters = word.split(' ');
    letters = letters.map(pattern => table.get(pattern));
    return letters.join('');
  });
  return words.join(' ');
};

module.exports.decodeMorse = decodeMorse;

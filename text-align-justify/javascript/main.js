const sumWords = (total, word) => { return total + word.length; };

class Sentence {
  constructor(len) {
    this.len = len;
    this.words = [];
  }

  add(word) {
    const len = this.words.reduce(
      sumWords,
      word.length + this.words.length
    );
    if (len > this.len) return false;
    this.words.push(word);
    return true;
  }

  render(lastLine) {
    if (lastLine) return this.words.join(' ');
    if (this.words.length === 1) return `${this.words[0]}\n`;
    const words = this.words.slice();
    for (let len = words.reduce(sumWords, 0), i = 0; len < this.len; len += 1) {
      words[i] = `${words[i]} `;
      i = (i < words.length - 2) ? i + 1 : 0;
    }
    return `${words.join('')}\n`;
  }
}

/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  const sentences = [];
  let sentence = new Sentence(len);
  const words = str.split(' ');
  words.forEach((word) => {
    const added = sentence.add(word);
    if (!added) {
      sentences.push(sentence);
      sentence = new Sentence(len);
      sentence.add(word);
    }
  });
  sentences.push(sentence);
  let output = '';
  for (let i = 0; i < sentences.length - 1; i += 1) output = `${output}${sentences[i].render()}`;
  output = `${output}${sentences[sentences.length - 1].render(true)}`;
  return output;
};

module.exports = justify;
module.exports.Sentence = Sentence;
//https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript

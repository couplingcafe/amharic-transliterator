const letters = require('./letters.json');

module.exports = function transliterate (text) {
  let resultText = '';
  text.split('').map(char => {
    resultText += letters[char] || char ;
    const beforeSpace = resultText[resultText.length - 2];
    if (char === ' ' && beforeSpace === 'i'){
      resultText = resultText.replace(beforeSpace, '');
    }
  });

  const lastLetter = resultText[resultText.length - 1];
  if (lastLetter === 'i') {
    resultText = resultText.replace(lastLetter, '');
  }
  return resultText;
};

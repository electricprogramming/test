import repeat from '../utils/repeat.js';
import chars from '../utils/chars.js';
import OysterError from '../utils/chars.js';
function runOysterV1(oysterCode = '') {
  try {
    {
      if (typeof oysterCode !== 'string') {
        throw new Error('Inputted Oyster Code must be formatted as a string.')
      }
      if (oysterCode.length === 0) {
        throw new Error('End of Oyster Script')
      }
    }
    var index = 0;
    var currentChar = oysterCode[index];
    var currentFunction = '';
    const nextChar = () => {
      console.log(`char at index ${index}: ${currentChar}`)
      index ++; currentChar = oysterCode[index];
      if (index >= oysterCode.length) {
        throw new Error('End of Oyster Script')
      }
    }
    while ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-_'.includes(currentChar)) {
      currentFunction += currentChar;
      nextChar();
    }
    if (currentChar === chars.whitespace.space) {
      throw new OysterError('Unexpected space in Oyster Script')
    } else if (currentChar === chars.whitespace.newLine) {
      throw new OysterError('Unexpected new line in Oyster Script')
    } else if (currentChar === chars.brackets.rightCurly) {
      throw new OysterError('Unexpected token }')
    } else if (currentChar === chars.brackets.leftCurly) {
      console.log(`currentFunction: ${currentFunction}`)
    } else if (currentChar === chars.punctuation.period) {
      console.log(`Class or Instance detected -- name: ${currentFunction}`)
    } else {
      throw new OysterError('Unexpected token or invalid function name')
    }
  } catch(e) {
    if (e.message === 'End of Oyster Script') {
      console.log('Reached end of Oyster Script.')
      return;
    } else {
      throw e;
    }
  }
}
export default runOysterV1;

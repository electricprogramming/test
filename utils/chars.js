import './deepFreezeObj'
let chars = {
  whitespace: {
    space: ' ',
    newLine: `\n`,
    zeroWidth: '‎'
  },
  punctuation: {
    period: '.',
    comma: ',',
    exclamation: '!',
    question: '?',
    quote: `'`,
    doubleQuote: '"'
  },
  brackets: {
    leftCurly: '{',
    rightCurly: '}',
    leftSquare: '[',
    rightSquare: ']'
  },
  parentheses: {
    left: '(',
    right: ')'
  },
  asterisk: '*',
  hash: '#',
  hyphen: '-',
  pipe: '|',
  slash: '/',
  backslash: '\\',
  backtick: '`',
};
Object.deepFreeze(chars);
export default chars;

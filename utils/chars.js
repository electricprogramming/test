let chars = {
  whitespace: {
    space: ' ',
    newLine: `
`,
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
}
Object.seal(chars)
export default chars;
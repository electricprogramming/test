import utils from './utils/utils.js'
console.log(utils)
let output = ''
Object.keys(utils).forEach(key => {
  output += `${key}: ${utils[key]}\n`
})
document.getElementById('output').innerHTML = `<pre>${output}</pre>`;

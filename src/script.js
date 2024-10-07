import utils from './utils/utils.js'
let output = ''
utils.forEach(key => {
  output += `${key}: ${utils.key}\n`
})
document.getElementById('output').innerHTML = output;

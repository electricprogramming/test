import utils from './utils/utils.json'
let output = ''
utils.forEach(key => {
  output += `${key}: ${utils.key}\n`
})
document.getElementById('output').innerHTML = output;

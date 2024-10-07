import utils from './utils/utils.json'

console.log(utils.exampleKey); // Output: exampleValue
console.log(utils.anotherKey);  // Output: 42

// Add your additional logic to manipulate the DOM or other operations here
document.getElementById('output').innerHTML = `
    <p>Example Key: ${utils.exampleKey}</p>
    <p>Another Key: ${utils.anotherKey}</p>
`;

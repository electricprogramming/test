fetch('utils.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <p>Example Key: ${data.exampleKey}</p>
            <p>Another Key: ${data.anotherKey}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

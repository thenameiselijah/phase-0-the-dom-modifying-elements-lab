// Remove the 'main#main' element
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Set the 'id' property of the 'newHeader' element to 'victory'
newHeader.id = 'victory';

// Set the text content of the 'newHeader' element
newHeader.textContent = "YOUR-NAME is the champion";// Write your code here!
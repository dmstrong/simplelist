const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

// Check if local storage already exist
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

// Local Storage setup 
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

// Function to create new li
const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

// Event listener for form
form.addEventListener('submit', function (e) {
    e.preventDefault() 

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    
    liMaker(input.value) // Create new list item using user input
    input.value = '' // Clear input field

})

// Display data
data.forEach(item => {
    liMaker(item)
})

// Event listener for button
button.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    itemsArray = []
})
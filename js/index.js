//When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.
document.addEventListener('DOMContentLoaded', fetchMonster)

let pageNumber = 1

function fetchMonster() {
    fetch(`http://localhost:3000/monsters/?_limit=1&_page=${pageNumber}`)
    .then(results => results.json())
    .then(data => displayMonsters(data))
}

function displayMonsters(data) {
    //console.log(data)
    data.forEach(monsterObject => displayOneMonster(monsterObject))
}

function displayOneMonster(monsterObject){
    //create element
    const createDiv = document.createElement('div')
    //set the text content (innerHTML) of the new element to be the info we need (name, age, description)
    createDiv.innerHTML = (`<h3>Name: ${monsterObject.name}</h3><p>Age: ${monsterObject.age}</p><p>Description: ${monsterObject.description}</p>`)

    const monsterContainer = document.querySelector("#monster-container")
    monsterContainer.append(createDiv)
    //append it to the document
}

const forwardButton = document.querySelector("#forward")

forwardButton.addEventListener('click', getNextMonster)

function getNextMonster(){
    pageNumber = pageNumber + 1
    fetchMonster()
}




const newMonsterForm = document.querySelector('#new-monster-form')

newMonsterForm.addEventListener('submit', addNewMonster)

function addNewMonster(event){
    var monsterName = document.getElementsByName("monstername")[0].value
    var monsterAge = document.getElementsByName("age")[0].value
    var monsterDescription = document.getElementsByName("description")[0].value
    event.preventDefault()
    const createDiv = document.createElement('div')
    createDiv.innerHTML= (`<h3>Name: ${monsterName}</h3><p>Age: ${monsterAge}</p><p>Description: ${monsterDescription}</p>`)
    const monsterContainer = document.querySelector("#monster-container")
    monsterContainer.append(createDiv)
}

// Above your list of monsters, you should have a form to create a new monster. You should have fields for name, age, and description, 
//and a 'Create Monster Button'. When you click the button, the monster should be added to the list and saved in the API.
// At the end of the list of monsters, show a button. When clicked, the button should load the next 50 monsters and show them.
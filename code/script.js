// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const choices = document.getElementById('choices')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
//const playAgainButton = document.getElementById('play-again')
const winOrLose = document.getElementById("winOrLose")
// Array with all the characters, as objects
const people = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secretPerson  //Secret person object
let currentChoice  //Current question object
let peopleInPlay //Array with people left in the game

// STEP 2 -----. board is generated and the function is called from the start()
const generateBoard = () => {
  board.innerHTML = ''
  peopleInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// STEP 3 ------- Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secretPerson = peopleInPlay[Math.floor(Math.random() * peopleInPlay.length)]
  console.log(secretPerson) //now we see who is the secretPerson is
}

// STEP 1 -------This function starts and (and restarts) the game beacuse it is called outside the scope at the bottom of the page start()
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  peopleInPlay = people
  restartButton.style.display = 'none';
  generateBoard() //Board is filled with all the cards
  setSecret() //Secret person is selected
  selectedQuestion()//functions that stores values from the selected options in the drop down.
}
 

// STEP 4 ---- the selectedQuestion function gives properties to the currentChioce object
const selectedQuestion = () => {

  const category = choices.options[choices.selectedIndex].parentNode.label//stores the category fron the dropdown
  console.log(category)
  const value = choices.options[choices.selectedIndex].value //stores the value from dropdown, for example color of hair if category is hair
  console.log(value) 
  currentChoice = { //values are being stored in currentChoice that is a global variable (outside the scope) to be reused further along the code
    category: category,
    value: value,
  }
}

// STEP 5 ---- This function should be invoked when you click on 'Find Out' button. Eventlistner is added at the bottom
const checkQuestion = () => {
  const { category, value } = currentChoice //fetches category and value from currentChioce in the previous step

// Compare the currentChoice attributes with the secret person attributes in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that by sending true or false to filterPeople
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (secretPerson[category].includes(value)) {
      filterPeople(true)
    } else {
      filterPeople(false)
    }
    console.log("true or false")
  } else if (category === 'accessories' || category === 'other') {
    if (secretPerson[category].includes(value)) {
  }
  filterPeople(true); {
  }  {
    filterPeople (false)
  }
  console.log("accessories or other ")
  }
}

// STEP 6 ---- First we interact with the player with alerting them if their chioce matches the secret person. We also inform them if we will be removing or keeping people.
//Next we'll filter the peoples array and redraw the game board.
const filterPeople = (keep) => {
  const { category, value } = currentChoice 
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category].includes(value))

    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, this person has a ${value}, remove all others`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, this person does not have ${value}, remove all smokers`
      )
      peopleInPlay = peopleInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'eyes'){ 
    if (keep) {
      alert(
        `Yes, this secret person has  ${value} eyes, kepp all with ${value} eyes`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, this person doesn't have ${value} eyes, removing all people with ${value} eyes!`
      )
      peopleInPlay = peopleInPlay.filter((person) => !person[category].includes(value))
    }
  } else if(category === 'hair'){
    if (keep) {
      alert(
       `Yes, the mystery person has ${value} hair, keep all people with ${value} hair!`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category].includes(value))
    } else{
      alert(
      `No the person does not have ${value} hair. Removing all with ${value} hair. `
      )
      peopleInPlay = peopleInPlay.filter((person) => !person[category].includes(value))
    }
      // Invoke a function to redraw the board with the remaining people.
      generateBoard()
  }
}
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
      example 1
      peopleInPlay = poepleInPlay.filter((person) => person[category] === value)
      peopleInPlay = poepleInPlay.filter((person) => person[category] !=== value)
   
      exampel 2
      peopleInPlay = peopleInPlay.filter((person) => person[category].includes(value))
      peopleInPlay = peopleInPlay.filter((person) => !person[category].includes(value))
      
      The two examples executes the same thing
  */

//STEP 8 ----
//when clicking guess, the player first have to confirm that they want to make a guess.
 // If the player wants to guess, the checkMyGuess function is invoked.
const guess = (personToConfirm) => {
 confirmGuess= confirm(`Do you really want to make this guess?`)
if (confirmGuess){
  checkMyGuess(personToConfirm)
}
}



//STEP 9 ----
// If you confirm, this function is invoked
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secretPerson.name){
    winOrLose.innerHTML = `You guessed it. It´s ${secretPerson.name}!
    `
  } else {
    winOrLose.innerHTML = `Maybe next time, the mystery person was ${secretPerson.name}
    `
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
 // restartButton.display = 'block
}


// Invokes the start function when website is loaded
start()



// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener("click", checkQuestion)//STEP 5 ----- an eventlistner connected to the html button that starts the function filterCharaters
choices.addEventListener('change', selectedQuestion)
//playAgainButton.addEventListener('click', start) tries to add a play again button but cant get it to work.

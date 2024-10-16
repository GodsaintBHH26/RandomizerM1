
// Initializing the array
let randQue = [];

// Checking if the array previously held any values or not
if (localStorage.getItem("Que")) {
  randQue = JSON.parse(localStorage.getItem("Que"));
}

// Function to add elements to the array
function addToQue() {
  let ele = document.getElementById("inp").value;
  randQue.push(ele);
  saveToStorage();
  console.log(randQue);
}

// Function that saves all the data of the array to the local storage
function saveToStorage() {
  localStorage.setItem("Que", JSON.stringify(randQue));
}

// Function to clear the local Storage
function clearStorage() {
  localStorage.clear();
}
console.log(randQue);

// Function to find a random object/value from the above array
function randomix(){
    let max = randQue.length;
    let min = 1;
    let randEle = Math.floor((Math.random()*(max-min +1))+ min);
    return randQue[randEle-1];
}

// Function to display the randomizer output
function display(){
    let op = randomix();
    document.querySelector('.result').innerHTML = `Randomized object =  ${op}`;
}
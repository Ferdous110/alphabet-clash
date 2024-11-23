
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
  
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElemnetValueById(elementId, value) {
  const element = document.getElementById(elementId);  
  console.log(element);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text
}

function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetStrin = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetStrin.split('');
  
  // get a random index between 0-25

  const index = Math.round(Math.random() * 25); 

  const alphabet = alphabets[index];  
  return alphabet
}
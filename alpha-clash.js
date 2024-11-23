

function continueGame() {
  const alphabet = getARandomAlphabet();

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBackgroundColorById(alphabet);
}


function play() {

  // const homeScreen = document.getElementById('home-screen');
  // homeScreen.classList.add('hidden');

  // const playGroundSection = document.getElementById("play-ground");
  // playGroundSection.classList.remove('hidden');
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();

}





    
  
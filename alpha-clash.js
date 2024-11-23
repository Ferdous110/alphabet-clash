function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const curentAlphabet = currentAlphabetElement.innerText;p
  const expectedAlphabet = curentAlphabet.toLowerCase();

  // check match or not

  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");

    const currentScore = getTextElementValueById("current-score");
    const updateScore = currentScore + 1;
    setTextElemnetValueById( "current-score" , updateScore);

    // another way 

    // const currentScoreElemnet = document.getElementById("current-score");
    // const currentScoreText = currentScoreElemnet.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;

    // show the update score 
    // currentScoreElemnet.innerText = newScore;

    // start a new round 
    removeBackgroundColorById(expectedAlphabet);
    continueGame();

  } else {
    console.log("you missed. you lost a life");
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElemnetValueById("current-life", updatedLife);

    // another way 

    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;

    // currentLifeElement.innerText = newLife; 
  }
}
// captupe keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

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

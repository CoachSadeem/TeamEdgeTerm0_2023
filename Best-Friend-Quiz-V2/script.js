// //Answer Variables
// /* Quesiton 1: How many times do you meet a month? 
//     Question 2: How many classes do you have with each other?
//     Question 3: How long have you known them for?
//     Question 4: Whos more extroverted?
//     Question 5: Whos more introverted

//   Scoring:
//   1-3: 10 points
//   3-5: 15 points
//   5+:  20 points
// */



const questionScores = () => {
  let questionOne = document.getElementsByName('question');
  let questionTwo = document.getElementsByName('questionTwo');
  let questionThree = document.getElementsByName('questionThree');
  let questionFour = document.getElementsByName('questionFour');
  let questionFive = document.getElementsByName('questionFive');
  let questionSix = document.getElementsByName('questionSix');
  let questionSeven = document.getElementsByName('questionSeven');

  let percentage;
  let score = 0;

// These loops take care of the score you get at the end and the amount of points you get per answer
  for (i = 0; i < questionOne.length; i++) {
    if (questionOne[0].checked) {
      score += 10;
      break;
    }
    if (questionOne[1].checked) {
      score += 15;
      break;
    }
    else if (questionOne[2].checked) {
      score += 20;
      break;
    }
  }
  for (i = 0; i < questionTwo.length; i++) {
    if (questionTwo[0].checked) {
      score += 10;
      break;
    }
    if (questionTwo[1].checked) {
      score += 15;
      break;
    }
    else if (questionTwo[2].checked) {
      score += 20;
      break;
    }
  }
  for (i = 0; i < questionThree.length; i++) {
    if (questionThree[0].checked) {
      score += 10;
      break;
    }
    if (questionThree[1].checked) {
      score += 15;
      break;
    }
    else if (questionThree[2].checked) {
      score += 20;
      break;
    }
  }
  for (i = 0; i < questionFour.length; i++) {
    if (questionFour[0].checked) {
      score += 10;
      break;
    }
    if (questionFour[1].checked) {
      score += 15;
      break;
    }
    else if (questionFour[2].checked) {
      score += 20;
      break;
    }
  }
  for (i = 0; i < questionFive.length; i++) {
    if (questionFive[0].checked) {
      score += 10;
      break;
    }
    if (questionFive[1].checked) {
      score += 15;
      break;
    }
    else if (questionFive[2].checked) {
      score += 20;
      break;
    }
  }
  for (i = 0; i < questionSix.length; i++) {
    if (questionSix[0].checked) {
      score += 10;
      break;
    }
    if (questionSix[1].checked) {
      score += 15;
      break;
    }
    else if (questionSix[2].checked) {
      score += 20;
      break;
    }
  }
  for (i = 0; i < questionSeven.length; i++) {
    if (questionSeven[0].checked) {
      score += 10;
      break;
    }
    if (questionSeven[1].checked) {
      score += 15;
      break;
    }
    else if (questionSeven[2].checked) {
      score += 20;
      break;
    }
  }
  //this turns your score into a percentage
  percentage = parseInt((score / 140) * 100);  
  window.sessionStorage.setItem('percentage', percentage);
}

const friendshipCalc = () => {
  
 
  document.getElementById('percent').innerHTML = `${window.sessionStorage.getItem(
    'percentage'
  )}%`;

  // Confetti stuff
  const canvas = document.querySelector('#confetti');
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti();

  // score -= score;
}


// Custom Cursor Stuff

const cursorDot = document.querySelector("[data-cursor-dot]");

window.addEventListener("mousemove", function (e) {
   
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

});

// Web Page Shenanigans
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
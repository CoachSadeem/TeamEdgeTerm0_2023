// checks scores for results
const results = () => {
    var score = 0
    if (document.getElementById('correct1').checked) {
        score++
    }
    if (document.getElementById('correct2').checked) {
        score++
    }
    if (document.getElementById('correct3').checked) {
        score++
    }
    if (document.getElementById('correct4').checked) {
        score++
    }
    if(score == 4){
      document.write("Your score is: " + score + " YOU PASS!!!!");}
  else{
    document.write("You did not pass....Better luck next time")
  }
  

}
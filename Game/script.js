function play() {
  //getting the values
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissor = document.getElementById("scissor");
  const computer = document.getElementById("computer");
  let Computervalue;
  let result;

  //settting the computer's value
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    Computervalue = "Rock";
  } else if (computerChoice === 1) {
    Computervalue = "Paper";
  } else if (computerChoice === 2) {
    Computervalue = "Scissor";
  }
  computer.innerHTML = Computervalue;
  if(rock.checked) {
    checkRock()
  }
  else if(paper.checked) {
    checkPaper();
  }
  else if(scissor.checked) {
    checkScissor();
  }
  //Checking For the winner
  function checkRock() {
    if (Computervalue === "Rock") {
      result = "Draw";
      document.getElementById("winner").innerHTML = result;
    } else if (Computervalue === "Paper") {
      result = "Computer";
      document.getElementById("winner").innerHTML = result;
    } else if (Computervalue === "Scissor") {
      result = "User";
      document.getElementById("winner").innerHTML = result;
    }
  }

  //Checking For the winner paper
  function checkPaper() {
    if (Computervalue === "Rock") {
      result = "User";
      document.getElementById("winner").innerHTML = result;
    } else if (Computervalue === "Paper") {
      result = "Draw";
      document.getElementById("winner").innerHTML = result;
    } else if (Computervalue === "Scissor") {
      result = "Computer";
      document.getElementById("winner").innerHTML = result;
    }
  }
  //Checking For the winner Scissor
  function checkScissor() {
    if (Computervalue === "Rock") {
      result = "Computer";
      document.getElementById("winner").innerHTML = result;
    } else if (Computervalue === "Paper") {
      result = "User";
      document.getElementById("winner").innerHTML = result;
    } else if (Computervalue === "Scissor") {
      result = "Draw";
      document.getElementById("winner").innerHTML = result;
    }
  }
}

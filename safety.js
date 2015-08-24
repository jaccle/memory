var icons = ['<img src="game-icons/brain.png" alt="brain" class="brain">',
      '<img src="game-icons/chess.png" alt="chess" class="chess">',
      '<img src="game-icons/dice.png" alt="dice" class="dice">',
      '<img src="game-icons/Puzzle.png" alt="puzzle" class="puzzle">',
      '<img src="game-icons/quiz.png" alt="quiz" class="quiz">',
      '<img src="game-icons/Scrabble.png" alt="tile" class="scrabble">',
      '<img src="game-icons/spade.png" alt="spade" class="spade">',
      '<img src="game-icons/TTT.png" alt="tictactoe" class="tictac">',
         '<img src="game-icons/brain.png" alt="brain" class="brain">',
      '<img src="game-icons/chess.png" alt="chess" class="chess">',
      '<img src="game-icons/dice.png" alt="dice" class="dice">',
      '<img src="game-icons/Puzzle.png" alt="puzzle" class="puzzle">',
      '<img src="game-icons/quiz.png" alt="quiz" class="quiz">',
      '<img src="game-icons/Scrabble.png" alt="tile" class="scrabble">',
      '<img src="game-icons/spade.png" alt="spade" class="spade">',
      '<img src="game-icons/TTT.png" alt="tictactoe" class="tictac">', ];
var getIcons = document.getElementsByTagName("img");
var cells = document.getElementsByTagName("td");
var hidden = document.getElementsByClassName("hidden");
//pull images
//function makeArray() {
//   for (var i = 0; i < 2; i++) {
//      for (var j = 0; j < getIcons.length; j++) {
//         icons.push(getIcons[j]);
//         icons[j].toString();
//      }
//   }
//}

//give each image class//done in html

//randomize images
//assign images to td
function shuffle() {
   icons = _.shuffle(icons);
   for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = icons[i];
   }
}

function unhide() {
   var one;
   var two;
   for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function () {

         if (two === undefined && this.id !== one) {
            this.classList.remove("hidden");
            if (one === undefined) {
               one = this.id;
               one = one.toString();
               this.classList.remove("hidden");
            } else {
               two = this.id;
               two = two.toString();
               setTimeout(check, 2000);
            }
         }
      });

      function check() {
         //if classes on clicked match, leave alone
         if (document.getElementById(one).innerHTML.toString() !== document.getElementById(two).innerHTML.toString()) {
            document.getElementById(one).classList.add("hidden");
            document.getElementById(two).classList.add("hidden");
         }
         one = undefined;
         two = undefined;
      }
   }
}

//reset button turns all back over and reshuffles
function reset() {
   document.getElementById("reset").addEventListener("click", function () {
      for (var i = 0; i < cells.length; i++) {
         cells[i].classList.add("hidden");
         shuffle();
      }
   });
}





window.onload = function () {
   console.log("Javascript start");
   //   makeArray();
   shuffle();
   unhide();
   reset();
   console.log("Reached the end");
};



//////////////////////////////////////////////////////////////////////
var icons = ['<img src="game-icons/brain.png" alt="brain" class="brain">',
      '<img src="game-icons/chess.png" alt="chess" class="chess">',
      '<img src="game-icons/dice.png" alt="dice" class="dice">',
      '<img src="game-icons/Puzzle.png" alt="puzzle" class="puzzle">',
      '<img src="game-icons/quiz.png" alt="quiz" class="quiz">',
      '<img src="game-icons/Scrabble.png" alt="tile" class="scrabble">',
      '<img src="game-icons/spade.png" alt="spade" class="spade">',
      '<img src="game-icons/TTT.png" alt="tictactoe" class="tictac">',
         '<img src="game-icons/brain.png" alt="brain" class="brain">',
      '<img src="game-icons/chess.png" alt="chess" class="chess">',
      '<img src="game-icons/dice.png" alt="dice" class="dice">',
      '<img src="game-icons/Puzzle.png" alt="puzzle" class="puzzle">',
      '<img src="game-icons/quiz.png" alt="quiz" class="quiz">',
      '<img src="game-icons/Scrabble.png" alt="tile" class="scrabble">',
      '<img src="game-icons/spade.png" alt="spade" class="spade">',
      '<img src="game-icons/TTT.png" alt="tictactoe" class="tictac">', ];
var getIcons = document.getElementsByTagName("img");
var cells = document.getElementsByTagName("td");
var hidden = document.getElementsByClassName("hidden");
var x = 0;
var matches = 0;
//pull images
//function makeArray() {
//   for (var i = 0; i < 2; i++) {
//      for (var j = 0; j < getIcons.length; j++) {
//         icons.push(getIcons[j]);
//         icons[j].toString();
//      }
//   }
//}

//give each image class//done in html

//randomize images
//assign images to td
function shuffle() {
   icons = _.shuffle(icons);
   for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = icons[i];
      console.log(cells[i].id + ":" + icons[i]);
   }
}

function unhide() {
   var one;
   var two;
   var time;
   for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function () {

         if (two === undefined && this.id !== one) {
            this.classList.remove("hidden");
            if (one === undefined) {
               one = this.id;
               one = one.toString();
               this.classList.remove("hidden");
            } else {
               two = this.id;
               two = two.toString();
               time = setTimeout(check, 900);
            }
         }
      });

      function check() {
         //if classes on clicked match, leave alone
         if (document.getElementById(one).innerHTML.toString() === document.getElementById(two).innerHTML.toString()) {
            matches += 1;
            document.getElementsByTagName("h3")[0].innerText = "Matched pairs: " + matches;
         } else {
            document.getElementById(one).classList.add("hidden");
            document.getElementById(two).classList.add("hidden");
         }
         if (document.getElementsByClassName("hidden").length === 0) {
            var congrats = document.createElement("h2");
            congrats.innerText = "Congratulations! You won!";
            document.body.appendChild(congrats);
            x += 1;
            document.getElementsByTagName("h4")[0].innerText = "Wins: " + x;
            document.getElementById("reset").value = "Play again?";
         }
         one = undefined;
         two = undefined;
      }
   }
}

//reset button turns all back over and reshuffles
function reset() {
   document.getElementById("reset").addEventListener("click", function () {
      for (var i = 0; i < cells.length; i++) {
         cells[i].classList.add("hidden");
      }
      document.body.removeChild(document.getElementsByTagName("h2")[0]);
      shuffle();
      document.getElementById("reset").value = "Reset";
      matches = 0;
      document.getElementsByTagName("h3")[0].innerText = "Matched pairs: " + matches;
   });
}





window.onload = function () {
   console.log("Javascript start");
   var wins = document.createElement("h4");
   wins.innerText = "Wins: " + x;
   document.body.appendChild(wins);

   var counter = document.createElement("h3");
   counter.innerText = "Matched pairs: " + matches;
   document.body.appendChild(counter);

   //   makeArray();
   shuffle();
   unhide();
   reset();
   console.log("Reached the end");
};

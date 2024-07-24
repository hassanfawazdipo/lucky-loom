function icon(){
    var icon = document.getElementById("nav");
    icon.classList.toggle("active");
}


const answer = Math.floor(Math.random() * 10 + 1) ;
let guesses = 0;

document.getElementById("submitButton").onclick=function(){

   let guess = document.getElementById("guessField").value;
    guesses+=1;

    if(guess == answer) {
        alert(`${answer} is the number. it took you ${guesses} to win`);
    } 
    else if(guess < answer){
        alert("too small");
    } 
    else {
        alert("too large");
    }
}
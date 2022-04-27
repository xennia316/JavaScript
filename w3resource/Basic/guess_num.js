let number = Math.ceil(Math.random() * 10);
let guess_num = prompt('Guess the number between 1 and 10');

if(guess_num === number){
    console.log('Your guess was correcr!');
}
else{
    console.log("You guessed wrong. The number was: " + guess_num);
}
// EX 1
// Print -10 through 5 using a counter and while loop.
console.log("EX 1");
var counter = -10;
while(counter <= 5 ){
    console.log(counter);
    counter = counter + 1
}
// EX 2
// Write a While loop that counts backwards from 10 to 0 Log the current count at the end of each iteration EXCEPT if the current count is 5
console.log("EX 2");
var counter2 = 10;
while(counter2 >= 0){
    if(counter2 !== 5){
        console.log(counter2)
    }
    counter2 = counter2-1
}
// EX 3
// Asks the user Enter a word. Enter 'q' to quit. Create a while loop that will not quit until they enter 'q'.
console.log("EX 3");
var userInput = prompt("Enter a word");
while(userInput!=="q"){
    userInput = prompt("Enter another word")
}
console.log("EX 3 complete");
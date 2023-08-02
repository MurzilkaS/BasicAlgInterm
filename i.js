/*1. Addition

Add all the values between 200 and 2700 (inclusively) 
that are divisible by 3 or 5, but not both 3 and 5. 
To solve this task you might want to use the modulus operator.*/
//create an empty array 
  //loop from 200 to 2700
  //if number / 3 or 5 and can not divided by 3 and 5 at once ,then push it to the array
  //result the array

/*let result = [];
for (let i=200; i<=2700;i++){
    if ((i%3===0 || i%5===0)&&(i%3!==0||i%5!==0)){
        result.push(i)
    }
}
console.log(result);

/*2. Shift the Values

Given any array X, for example [2,1,6,4,-7], 
create an algorithm that shifts each number by one to the front.
When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
//create an array x
//create an emoty array for result
// loop for array x
// use unshift Method for added elements to new array
*/
/*
let x = [2, 1, 6, 4, -7];
let result = [];

for (let i = 0; i < x.length; i++) {
 let element = x[i];

 result.unshift(element);
 }

 console.log(result);
*/

/*3. FizzBuzz

Create an algorithm that inserts the numbers from 1 to 135 into an array,
 while replacing the values that are divisible by 3 with the word "Fizz",
  the numbers that are divisible by 5 with the word "Buzz", 
  and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". 
  Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]  */
  //create an empty array to save the result
  //loop from 1 to 135
  //if number / 3 and 5 then push the FizzBuzz
  //else if number / 3 then push the Fizz to the array
  //else if number / 5 then push the Buzz to the array
  //else number is not divided by 3 or 5 then push the number
  //return the array

 /* function fizzBuzz (){
     let result = [];
     for(let i =1; i<=135; i++){
         if(i%3 === 0 && i%5 ===0){
             result.push ('FizzBuzz');
         }else if (i%3 ===0){
             result.push('Fizz');
         }else if (i%5 ===0){
             result.push('Buzz');
        }else {
            result.push(i);
        }
    }
     console.log(result);
 }
fizzBuzz(); */


/*4. Fibonacci

For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

A Fibonacci sequence is an infinite series of numbers that is created 
by adding the last two numbers in the series. A series would start with 
the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

0 1 1 2 3 5 8 13 21...*/

//Create an empty array for new numbers
//Create loop from 0 to 1000000
//Create Fibonacci-rules for new numbers

/*let series = [];
for (let i=0; i< 1000000; i++){
    if(i===0){
        series[i]=0;
    }else if (i===1){
        series[i]=1;
    }else {
        series[i]= (series[i-1]+series[i-2]);
    }
}
console.log (series);*/


/*5. Remove the Negative

Given any array X, for example [1,-2,4,1], remove the negative numbers,
 so that the output becomes: [1,4,1].*/

 //create an array x [1,-2,4,1]
 //create an empty array
 //create a for loop 
 //check if the number into array greater or equal 0,if so add into new array
 // console.log(result)
 /*let x = [1,-2,4,1];
 let xpozit = [];
for ( let i = 0 ; i<x.length ; i++ ){
    if (x[i]>=0){
        xpozit.push(x[i]);
    }
 }
 x = xpozit;
console.log(x);*/

/*6. Communist Censorship

Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], 
replace every letter of the word Program with *, so the output would be 
['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice */
// Create a function ,which can works for any word
//create variable with value which user wants to change
// find out the length of the value
// replace of the word with *length times
//retutn the new value

/*let x = ['Man', 'I','Love','The','Matrix','Program']; 
function general(y,index){
    let censor = y[index];
    let star = "*";
    censor = star.repeat(censor.length);
    return censor
}
console.log(general(x,5));
*/
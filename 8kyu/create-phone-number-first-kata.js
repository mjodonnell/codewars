// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//My solution

 // I researched this problem and two different kinds of solutions. 
// Then, when running out of time I had budgeted for myself, I reapproached problem with chatGPT
// I interogated the solution from ChatGPT and tried to have ChatGPT use RegEx
// I then browsed and used ChatGPT to determime the differences between the two methods
// What was first unclear to me is why funtion knew implicily that array was the parameter

function createPhoneNumber(numbers){
    if (numbers.length !== 10 || numbers.some(num => num < 0 || num > 0)){
   
   
   let phoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
   
   // Curious if I could make the line above more succinct
      
   return phoneNumber;
   }}


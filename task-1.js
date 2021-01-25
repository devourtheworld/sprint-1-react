// TASK 1
// Inplement the modifyArray(array) function, which takes an arbitrary array, changes the value oj the first element of the array to "Start", the last element of the array to "End" and returns the modified array.an
// Function example:
// modifyArray([12, 6, 22, 0, -8]);
// ['Start', 6, 22, 0, 'End']

//ANSWER
function modifyArray(array){
  array[0] = "Start";
  array[array.length-1] = "End";
  console.log(array);
}

modifyArray([12, 6, 22, 0, -8]);
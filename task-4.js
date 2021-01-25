// Implement the processArray(arr, factorial) function, which takes the first parameter of the array, 
// and the second parameter the function factorial and process each element of the array arr with 
// the function factorial, returning a new array (the sourse array arr does not change).
// The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.
// Example:
// determines the factorial of the number n
// function factorial(n){//code}
// processArray([1,2,3,4,5],factorial); //[1,2,6,24,120]

function factorial(n){
    let res = 1;
    for (let i = 1; i <= n; i++){
        res*=i;
    }
    return res;
}

function processArray(arr,factorial){
    return arr.map(factorial);
}

console.log(processArray([1,2,3,4,5],factorial));
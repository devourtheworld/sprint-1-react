// Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.
// Function example:
// combineArray([12, "User01", 22, true, -8]), ["Index", 6, null, 15]);
// [12, 22, -8, 6, 15]

//ANSWER
function combineArray(arr1, arr2){
  //1
  // let res1 = value => typeof(value) === "number";
  // let res2 = value => typeof(value) === "number";
  // console.log(arr1.filter(res1) + arr2.filter(res2));
//2
  let arr = arr1.concat(arr2);
  let result = value => typeof(value) === "number";
  console.log(arr.filter(result));
}

combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]);
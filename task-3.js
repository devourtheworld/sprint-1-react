// Implement the longestLogin(loginList) function, which takes an array of user logins loginList and returns the longest login. If the logins of the same length are the longest in the array, the login element with the largest index is returned. Tip: You can use the reduce() method to solve the task. 
// Function example:
// longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);
// longestLogin(["us2", "us1", "user3"]);

//ANSWER
function longestLogin(loginList){
    let login = '';
    for (let i = 0; i < loginList.length; i++){
      if (loginList[i].length > login.length){
        login = loginList[i];
      }
    }
    console.log(login);
  }
  
  longestLogin(["serg22", "tester_2", "Prokopenko", "guest", "guest12356"]);
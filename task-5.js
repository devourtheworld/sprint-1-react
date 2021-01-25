// program that checks your age
// checkAdult(15); // too young
                    // age verification completed
function checkAdult(a){
    try{
        switch(true){
            case (a === undefined):
                throw Error("Error");
            case (a < 0):
                throw Error("Only positive numbers");
            case isNaN(a):
                throw Error("Use numbers");
            case a > 100:
                throw Error("That's imposible");
            case (!Number.isInteger(a)):
                throw Error("Only Integer allowed");
            case a < 18:
                throw Error("Too young");
            default:
                console.log("You are welcome");
        }
    } catch(exeption) {
        console.log(exeption.name, exeption.message);
    } finally {
        console.log("Age verification completed");
    }
}

checkAdult(115);
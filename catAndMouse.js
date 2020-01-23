//Cat and Mouse Challenge


// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {

    //Cat A position
    let positionCatA = Math.abs(z - x); //absolute value of catA;

    //Cat B position
    let positionCatB = Math.abs(z - y); //absolute value of catB


        //if statement
        if(positionCatA > positionCatB) {
            return "Cat B";
        }
        else if(positionCatA < positionCatB) {
            return "Cat A";
        }
        else {
            return "Mouse C";
        }

}

console.log(catAndMouse(2,4,6));
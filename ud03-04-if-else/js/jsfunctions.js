document.addEventListener('DOMContentLoaded', function(event) {
    // Once the DOM is loaded, this code'll be executed
    myFunction(); // call to function
})

//-------------------------------------------------------------------------------------
function myFunction() {
    let score = 0;

    score = parseFloat(prompt("Insert your mark:")); // parse string to float
    /*
    if(score>5){
        console.log("PASSED");
    } else {
        console.log("FAILED");
    }
    */
    if(score>10 || score<0){
        console.log("incorrect input");
    } else if (score<5) {
        console.log("FAILED");
    } else {
        console.log("PASSED");
    }
}
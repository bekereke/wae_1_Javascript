document.addEventListener('DOMContentLoaded', function(event) {
    // Once the DOM is loaded, this code'll be executed
    myFunction(); // call to function
})

//-------------------------------------------------------------------------------------
function myFunction() {
    var x = 9;
    var y = 3;
    var z = 0; // initialize variable

    z = x + y; // addition
    console.log("Eragiketa: " + x + "+" + y + " = "); // print: 2+3=
    console.log(z); // print: 5 (result)
}
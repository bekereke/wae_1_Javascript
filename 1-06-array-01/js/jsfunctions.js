document.addEventListener('DOMContentLoaded', function(event) {
    // Once the DOM is loaded, this code'll be executed
    myFirstArray(); // call to function
})

//-------------------------------------------------------------------------------------
function myFirstArray() {
    //02
    let myArray=new Array("Lekeitio","Ondarroa","Markina");
    //03
    let herriak = parseInt(prompt("Zenbat herri ageri?"));
    //for(let i=0;i<myArray.length;i++){ //02
    for(let i=0;i<herriak;i++){ //03
        console.log(myArray[i]);
    }

}
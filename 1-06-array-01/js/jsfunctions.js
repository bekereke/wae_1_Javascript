document.addEventListener('DOMContentLoaded', function(event) {
    // Once the DOM is loaded, this code'll be executed
    myFirstArray(); // call to function
})

//-------------------------------------------------------------------------------------
function myFirstArray() {
    //02
    //let myArray=new Array("Lekeitio","Ondarroa","Markina");
    //03
    let myArray=new Array();
    let herriak;
    herriak = prompt("Zenbat herri ageri?");
    herriak = parseInt(herriak);

    for(let i=0;i<herriak;i=i+1){ //02
        myArray.push(prompt("Sartu "+(i+1)+". herriaren izena"));
    }

    for(let i=0;i<herriak;i=i+1){ //02
        console.log(myArray[i]);
}
}


document.addEventListener('DOMContentLoaded', function(event) {

    document.getElementById('buttonCities').addEventListener('click', print_cities);
})

function print_cities() {
    let myArray = new Array();

    myArray=document.getElementsByClassName('inCities');

    console.log("Your cities are: ");
    for (let cont=0; cont<myArray.length; cont++){
        console.log(myArray[cont].value);
    }
}
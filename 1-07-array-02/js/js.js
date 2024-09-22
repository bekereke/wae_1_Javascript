document.addEventListener('DOMContentLoaded', function(event) {

    document.getElementById('buttonCities').addEventListener('click', print_cities);

})

function print_cities() {
    let myArray = new Array();

    //myArray[0] = document.getElementById('inCity1').value;
    //myArray[1] = document.getElementById('inCity2').value;
    myArray.push(document.getElementById('inCity1').value);
    myArray.push(document.getElementById('inCity2').value);

    console.log("Your cities are: ");
    for (let cont=0; cont<myArray.length; cont++){
        console.log(myArray[cont]);
    }
}
document.addEventListener('DOMContentLoaded', function(event) {
    
    document.getElementById('buttonCities').addEventListener('click', print_cities);

})

function print_cities() {
    let testua="";

    testua += document.getElementById('inCity1').value+" ";
    testua += document.getElementById('inCity2').value+" ";

    document.getElementById('myDiv').innerHTML = "<h1>" + testua + "</h1>";

}
document.addEventListener('DOMContentLoaded', function(event) {
    // Once the DOM is loaded, this code'll be executed
    myFunction(); // call to function
})

//-------------------------------------------------------------------------------------
function myFunction() {
    let num = 0;

    num = parseInt(prompt("Insert your number:")); // parse string to Integer
    /*  //01
    for(let i=0;i<num;i+=1){
        console.log("Value in cont: "+i);
    }
    */
   //02
    for(let i=num;i>=0;i-=1){
        console.log("Value in cont: "+i);
    }
    //03
}
document.addEventListener('DOMContentLoaded', function(event) {
    // Once the DOM is loaded, this code'll be executed
    myFirstArray(); // call to function
})

//-------------------------------------------------------------------------------------
function myFirstArray() {
    //02
    //let myArray=new Array("Lekeitio","Ondarroa","Markina");
    /*
    let myArray=new Array();
    let herriak;
    herriak = prompt("Zenbat herri ageri?");
    herriak = parseInt(herriak);

    for(let i=0;i<herriak;i=i+1){ //02
        //myArray.push(prompt("Sartu "+(i+1)+". herriaren izena"));
        myArray[i]=prompt("Sartu "+(i+1)+". herriaren izena");
    }

    for(let i=0;i<herriak;i=i+1){ //02
        console.log(myArray[i]);

}*/
    //03
    //var jokalari1=new Array (10,20,11,2,15,25);
    var jokalari1=[10,20,11,2,15,25];
    var jokalari2=new Array (21,9,0,12,1,3);
    var jokalari3=new Array (11,10,9,3,12,26);

    let bb_taldea=0;
    let jokalariak=new Array(jokalari1,jokalari2,jokalari3);

    console.log(jokalari1.length+ " partidu jokatu dira.");

    for(let i=0; i<jokalariak.length; i++){
        let bb=0;
        for(let j=0; j<jokalari1.length; j++){
            bb=bb+jokalariak[i][j];
        }
        console.log((i+1)+". jokalariaren batazbesteko puntuazioa: "+bb/jokalari1.length);
        bb_taldea=bb_taldea+bb/jokalari1.length;
    }

    console.log("Taldearen batazbesteko puntuazioa: "+bb_taldea/jokalariak.length);

}


document.addEventListener('DOMContentLoaded', function(event) {

    document.getElementById('btnSearch').addEventListener('click', bilaketa_sinple);
})

//-------------------------------------------------------------------------------------

function bilaketa_sinple() {
    var lista = new Array(7, 8, 9, 70, 9);
    var arrPosizioak = new Array();
    var zenbaki = 9;
    var myHtml="";

    zenbaki=document.getElementById('inNum').value;
    lista[0]=document.getElementById('inList1').value;
    lista[1]=document.getElementById('inList2').value;
    lista[2]=document.getElementById('inList3').value;
    lista[3]=document.getElementById('inList4').value;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] == zenbaki) {
            //arrPosizioak[arrPosizioak.length] = i;
            arrPosizioak.push(i); 
        }
    }
    if (arrPosizioak.length == 0) {
        myHtml=myHtml+"<h1>Not found.</h1>";
        document.getElementById("divResult").innerHTML=myHtml;
        //console.log("ez da aurkitu");
    } else {

        myHtml="<h1>Found in position: ";
        for (var j = 0; j < arrPosizioak.length; j++) {
             //console.log("Aurkituta listaren [" + arrPosizioak[j] + "] posizioan.");
             myHtml=myHtml+"["+arrPosizioak[j]+"]";

        }
        myHtml=myHtml+"</h1>";
        document.getElementById("divResult").innerHTML=myHtml;
    }
}

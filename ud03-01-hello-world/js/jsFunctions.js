document.addEventListener("DOMContentLoaded", function(event){ 
    helloInDiv(); 
})

function helloInDiv(){
    var myHtml="";

    myHtml=myHtml+"<h1>KAIXO MUNDUA</h1>";
    document.getElementById("divBanner").innerHTML=myHtml;
}
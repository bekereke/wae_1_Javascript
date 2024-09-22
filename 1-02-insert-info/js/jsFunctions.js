document.addEventListener("DOMContentLoaded", function(event){ 
    imageInDiv(); 
})

function imageInDiv(){
    var myHtml="<img class=\"logo\" src=\"https://picsum.photos/250/200\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>";
    document.getElementById("flex-item").innerHTML=myHtml;
}
document.addEventListener('DOMContentLoaded', function(event) {
        document.getElementById('inBtnBehekoa').addEventListener('click', for_funtzioa); // beheko botoian klik egitean for_funtzioa exekutatu
        document.getElementById('inBtnGoikoa').addEventListener('click', if_funtzioa); // Goiko botoian klik egitean if_funtzioa exekutatu

    })
    //---------------------------------------------------------------------------------------------------
function for_funtzioa() {
    let num = 0;

    num = document.getElementById('inZenbakia').value; // input irakurri
    for (var i = 0; i < num; i++) { // i=0 tik i-k num-en balioa izan arte
        document.getElementById('divFor').innerHTML += "<h2>UNI</h2>"; // div-ari gehitu
    }
}

//-----------------------------------------------------------------------------------------------------
function if_funtzioa() {

    var fruta = document.getElementById('inFruta').value; // frutaren input-a irakurri
    var posizioa = document.getElementById('inKokapena').value; // kokapenaren input-a irakurri
    var myhtml = ""; // myhtml aldagaia sortu

    //--- Begiratu ea zein dan erabiltzaileak idatzitako fruta. Horren arabera irudia txertatzeko kodea sartuko da.
    if ((fruta == "banana") || (fruta == "sandia") || (fruta == "sagarra")) {
        myhtml = "<img src='./img/" + fruta + ".jpg" + "'class='irudia '>";
        /* Kontuan izan agazkiaen artxiboen izenak dirala: sandia.jpg, banana.jpg eta sagarra.jpg
         Usuarioak sandia, sagarra edo banana idatzi duenez, erraza da artxiboaren ruta sortzea: ./img/sandia.jpg adibidez
         orduan gordeko du myhtml aldgaian adibidez: <img src='./img/sandia.jpg' class='irudia'>*/
    }

    //---   Orain goazen ikustera zein div-ean pegatu behar dan myhtml aldagaian gordetako kodea.
    if (posizioa == "erdi") {
        document.getElementById("divErdia").innerHTML = myhtml;
    } else if (posizioa == "ezker") {
        document.getElementById("divEzkerra").innerHTML = myhtml;
    } else if (posizioa == "eskuin") {
        document.getElementById("divEskuma").innerHTML = myhtml;
    }

}
//---------------------------------------------------------------------------------------------------------

function if_funtzioa_sinple() {
    /*
    funtzio honek beti fruta bera pegatuko du, erabiltzaileak aukeratutako lekuan. 
    Ez da irakurtzen frutaren izena, soilik kokapena
     */

    var posizioa = document.getElementById('inKokapena').value; // kokapenaren input-a irakurri
    var myhtml = "<img src='./img/sandia.jpg' class='irudia'>"; // myhtml aldagaia sortu. Hau da pegatuko duguna erabiltzaileak esandako tokian


    //---   Orain goazen ikustera zein div-ean pegatu behar dan myhtml aldagaian gordetako kodea.
    if (posizioa == "erdi") {
        document.getElementById("divErdia").innerHTML = myhtml;
    } else if (posizioa == "ezker") {
        document.getElementById("divEzkerra").innerHTML = myhtml;
    } else if (posizioa == "eskuin") {
        document.getElementById("divEskuma").innerHTML = myhtml;
    }


}
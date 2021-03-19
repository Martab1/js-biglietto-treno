
/***
  
CALCOLO PREZZO BIGLIETTO DEL TRENO 

* 1. n. km che vuole percorrere l'utente

* 2. età dell'utente

* 3. calcolare prezzo viaggio secondo le condizioni:
     
     * prezzo viaggio - 20% per i minorenni

     * prezzo viaggio - 40% per over 65


* 4. OUTPUT a schermo con max due decimali


---  Prezzo biglietto --- > 1 KM = 0,21 €


***/


// 1. km che vuole percorrere l'utente

var nKilometri =  parseInt( prompt ( "quanti kilometri vuoi percorrere? "));
document.getElementById("km").innerHTML = " tratta: " + nKilometri + "km";
// console.log("l'utente vuole percorrere: ", nKilometri , "km");

// costante prezzo al km
var kmPrice1 = 0.21;

// prezzo base viaggio 
var costo = nKilometri * kmPrice1;
document.getElementById("first-price").innerHTML = " prezzo iniziale: " + (nKilometri * kmPrice1) + "€";
// console.log("il viaggio costa:",costo, "€");



// 2. età dell'utente

var eta = parseInt( prompt ("quanti anni hai?"));
document.getElementById("age").innerHTML = "età:" + eta;
// console.log("età dell'utente: ", eta);



// 3. calcolare prezzo secondo 2 condizioni

/*       1° se sei minorenne -20% 
         2° se sei over  65  -40%             */


if (eta < 18) {
   var sconto = costo * ( 20 / 100) ;
//    console.log("il prezzo per il cliente minorenne è: " ,costo - result ,"€");
   document.getElementById("result").innerHTML = " sei minorenne! con il 20% di sconto per te il prezzo è di "+ (costo - sconto).toFixed(2) +  "€";
}  else if ( eta >= 65) {
   var sconto = costo * ( 40 / 100) ;
//    console.log("il prezzo per il cliente over 65 è: " , costo - sconto, "€");
   document.getElementById("result").innerHTML = " sei un over 65! con il 40% di sconto per te il prezzo è di "+ (costo - sconto).toFixed(2) + "€";
} else {
//    console.log("non ci sono sconti applicati ");
  document.getElementById("result").innerHTML = " non ci sono sconti applicati il prezzo è di " + costo.toFixed(2) + "€";
}
    








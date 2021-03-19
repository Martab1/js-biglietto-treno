
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
console.log("l'utente vuole percorrere: ", nKilometri , "km");

// costante prezzo al km

var kmPrice1 = 0.21;

// prezzo base viaggio 

var costo = nKilometri * kmPrice1;
console.log("il viaggio costa:",costo, "€");



// 2. età dell'utente

var eta = parseInt( prompt ("quanti anni hai?"));
console.log("età dell'utente: ", eta);





// 3. calcolare prezzo secondo 2 condizioni

/*       1° se sei minorenne -20% 
         2° se sei over  65  -40%             */



if (eta < 18) {
   var result = costo * ( 20 / 100);
   console.log("il prezzo per il cliente minorenne è: " ,costo - result ,"€");
}  else if ( eta >= 65) {
   var result = costo * ( 40 / 100);
   console.log("il prezzo per il cliente over 65 è: " , costo - result, "€");
} else {
    console.log("non ci sono sconti applicati ");
}
    








$(document).ready(function(){

var start = $('#start')
var restart = $('#restart')

var numeriPc =[]
var  numeriGiocatore = []
var numeriRicordati = []




start.click(function(){

/**
 * creiamo i livelli di difficoltà del gioco
 */



do {
  var livello = prompt('facile,medio,difficile')  
} while (livello !='facile'&&livello!='medio'&&livello!='difficile');
var numeriDaRicordare
if (livello=='facile') {
     numeriDaRicordare = 6
     alert('dovrai ricordarti 6 numeri ! dai che è facile')
} else if ( livello=='medio'){
     numeriDaRicordare = 10
     alert('bravo ha coraggio ma avrai anche la memoria?? ecco i tuoi 10 numeri')
} else if (livello =='difficile'){

    numeriDaRicordare = 15
    alert('wow sei un temerario!! avrai una super memoria pronto?? ecco i tuoi 15 numeri')
}

    /**
     * creiamo un ciclo che generi i nostri  numeri in base al livello prescelto e inseriamo controlli 
     * 1 controlliamo che non ci siano due numeri identici
     * 2 controlliamo che la cifra minima sia 1 e massima 100 se inferiore o superiore
     * il gioco continuerà a richiedere l'inserimento del numero
     * 3 controlliamo che l'utente inserisca numeri e non lettere se cosi fosse richiediamo il numero
     * fino ad ottenere il numero e non le lettere
     * inseriamo anche la difficoltà
     */
    
    for(var i = numeriPc.length; i < numeriDaRicordare; i++){
        var numeriGenerati = Math.floor(Math.random()*(1,100)+1)
          if (!numeriPc.includes(numeriGenerati)) {
               numeriPc.push(numeriGenerati)
          } else{
            i++
        }
    }
    console.log(numeriPc);
     alert(`ecco i tuoi numeri che dovrai ricordare: ${numeriPc}`)

     /**
      * creiamo una funzione che ci permetta di  inserire i nostri numeri (speriamo di ricordarli tutti)
      * e di compararli con quelli generati dal pc
      */
      setTimeout(numeri,2000)

     function numeri () {
     
    for(var i= 0; i < numeriDaRicordare; i++){

    do {
     var utente = Number(prompt('inserisci i numeri che sono usciti ! buona fortuna'))
    } while (utente < 1|| utente > 100 || isNaN(utente));

        numeriGiocatore.push(utente)
    }
    console.log( "ecco i numeri che hai inserito" + numeriGiocatore);

     for(var i = 0; i < numeriGiocatore.length; i++){
      if (numeriPc.includes(numeriGiocatore[i])) {
          numeriRicordati.push(numeriGiocatore[i])
      }

     }
     console.log(numeriRicordati+'   i numeri gisti');


    if (numeriRicordati.length== numeriDaRicordare) {
        
        alert(`wow che memoria hai indovinato tutti i  ${numeriRicordati.length} numeri🏆🏆🏆 e sono ${numeriRicordati}`)
    } else {
        alert(`mmmm un pò di fosforo aiuterà vedrai hai ricordato ${numeriRicordati.length} e sono ${numeriRicordati}`)
     }

    } // parentesi di chiusura della funzione numeri
      
}) //parentesi di chiusura dell'click

restart.click(function(){
     alert(`la pagina verrà ricaricata e potrai giocare di nuovo`)
    location.reload()
})



}) //parentesi di chiusura del document ready
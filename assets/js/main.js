/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
*/
let arrayImmagini = [
  "assets/img/01.webp",
  "assets/img/02.webp",
  "assets/img/03.webp",
  "assets/img/04.webp",
  "assets/img/05.webp"
]
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

console.log( prev, next )
console.log(arrayImmagini);


  for( let i = 0; i < arrayImmagini.length; i++){
    console.log( arrayImmagini [i] )
    let immagine = ( arrayImmagini[i] )
    
    console.log(i);
    if ( i == 0 ) {
      document.querySelector(".items").innerHTML += `
      <div class="item first active">
        <img src="${immagine}" alt="">
      </div>`
      }
    else if ( i == arrayImmagini.length - 1 ) {
      document.querySelector(".items").innerHTML += `
      <div class="item last">
        <img src="${immagine}" alt="">
      </div>`
      }
    else {
      document.querySelector(".items").innerHTML += `
      <div class="item">
        <img src="${immagine}" alt="">
      </div>`
    }

  }

next.addEventListener( "click", function(){
  let attivaItem = document.querySelector(".item.active")
  console.log(attivaItem);

  let ItemDaAtivare = attivaItem.nextElementSibling
  console.log(ItemDaAtivare);

  if (attivaItem.classList.contains("last")) {
    ItemDaAtivare = document.querySelector(".item.first")
  }

  attivaItem.classList.remove("active")
  ItemDaAtivare.classList.add("active")
})

prev.addEventListener( "click", function(){
  let attivaItem = document.querySelector(".item.active")
  console.log(attivaItem);

  let ItemDaAtivare = attivaItem.previousElementSibling
  console.log(ItemDaAtivare);

  if (attivaItem.classList.contains("first")) {
    ItemDaAtivare = document.querySelector(".item.last")
  }

  attivaItem.classList.remove("active")
  ItemDaAtivare.classList.add("active")
})
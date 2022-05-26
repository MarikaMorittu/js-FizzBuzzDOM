let container = document.querySelector(".container");
// pongo la condizione con il ciclo for
for (i = 1; i <= 100; i++) {
  // continuo con le singole condizioni all'interno del ciclo
  if (i % 3 == 0 || i % 15 == 0) {
    if (i % 15 == 0) {
      // crea un div e scrivici dentro FizzBuzz
      let box = `<div class="box fizzbuzz">FizzBuzz</div>`;
      container.innerHTML += box;
    } else {
      // crea un div e scrivici dentro Fizz
      let box = `<div class="box fizz">Fizz</div>`;
      container.innerHTML += box;
    }
  } else if (i % 5 == 0) {
    // crea un div e scrivici dentro Buzz
    let box = `<div class="box buzz">Buzz</div>`;
    container.innerHTML += box;
  } else {
    // crea un div e scrivici dentro il valore di i
    let box = `<div class="box">${i}</div>`;
    container.innerHTML += box;
  }
}

// funzione che confronta dei numeri che compongono un array, con un numero generato casualmente
function findNumber(arrayName, randomNumber) {
  for (let i = 0; i < arrayName.length; i++) {
    if (arrayName[i] == randomNumber) {
      counter = counter + 1;
    }
  }
  let result = counter != 0;
  return result;
}

// funzione che trasforma un array in una stringa dividendo ogni suo elemento con un separatore
function arrayToString(arrayName, separatorElement) {
  let text = "";
  for (let i = 0; i < arrayName.length; i++) {
    if (i != arrayName.length - 1) {
      text += arrayName[i] + separatorElement;
    } else {
      text += arrayName[i];
    }
  }
}

// funzione che genera un numero casuale
function generateRandomNumber(min, max) {
  arrayElement = Math.floor(Math.random() * (max + min - 1) + 1);
  console.log(arrayElement);
  return arrayElement;
}

// funzione che genera una box e le da la classe "box" e la classe che fa riferimento al livello di difficoltà scelto dall'utente ("easy", "medium" o "hard")
function createBox() {
  let box = document.createElement("div");
  boxContainer.append(box);
  box.classList.add("box");
  if (difficultyRange.value == "easy") {
    box.classList.add("easy");
  } else if (difficultyRange.value == "medium") {
    box.classList.add("medium");
  } else {
    box.classList.add("hard");
  }

  return box;
}

// creo una funzione che genera una griglia sfruttando quella che genera una box
function createGrid(boxesNum) {
  for (let i = 1; i <= boxesNum; i++) {
    // salvo la funzione che genera una box in una variabile
    let boxElement = createBox();
    // aggiungo alle singole box il loro numero al centro
    boxElement.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    boxElement.innerText = i;
    console.log(i, boxElement);

    // creo un evento sul click dell'utente su una box
    boxElement.addEventListener("click", function () {
      // quando l'utente clicca su una box, questa si colora di azzurro
      this.classList.toggle("hover-back-ground");
      console.log("Hai cliccato la cella numero: " + this.innerText);
    });
  }
}

// funzione che stabilisce se un numero è pari
function isEvenNumber(number) {
  if (number % 2 == 0) {
    evenNumber = true;
  } else {
    evenNumber = false;
  }
  return evenNumber;
}

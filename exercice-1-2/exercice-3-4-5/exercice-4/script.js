// alert('Bonjour, je suis une alerte !')
const counterLimits = {
  min: 0,
  max: 10,
};

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const counterText = document.getElementById("counterText");
const errorMessage = document.getElementById("errorMessage");

const displayError = (element, message) => {
  element.style.cursor = "not-allowed";
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
};

// Fonction réutilisable pour l'appel dans addEventListener (version optimisée)
const updateCounter = (direction) => {
  // direction = increment (+) || decrement (-)
  let counterValue = +counterText.textContent || 0;

  errorMessage.style.display = "none";
  errorMessage.textContent = "";
  decrementButton.style.cursor = "cursor";

//   Version avec switch (comptacte & optimisée)
//   switch (direction) {
//     case "+":
//         (counterValue >= counterLimits.max) ? displayError(incrementButton, "Valeur maximale atteinte.") : counterText.textContent = ++counterValue;
//         break;
//     case "-":
//         (counterValue <= counterLimits.min) ? displayError(decrementButton, "Valeur minimale atteinte.") : counterText.textContent = --counterValue;
//   }

// Version avec les 2 conditions (pas spécialement compact, mais fonctionnelle et optimisée)
  if (direction === "+") {
    if (counterValue >= counterLimits.max) {
      displayError(incrementButton, "Valeur maximale atteinte.");
    } else {
      counterText.textContent = ++counterValue;
    }
  }

  if (direction === "-") {
    if (counterValue <= counterLimits.min) {
      displayError(decrementButton, "Valeur minimale atteinte.");
    } else {
      counterText.textContent = --counterValue;
    }
  }
};

// AddEventListener qui renvoie à la fontion updateCounter(direction) qui permet d'incrémenter ou de décrémenter selon le paramètre
incrementButton.addEventListener("click", () => updateCounter("+"));
decrementButton.addEventListener("click", () => updateCounter("-"));

// Version classique (toute la logique dans le retour de addEventListener)
// decrementButton.addEventListener("click", () => {
//   let counterValue = +counterText.textContent || 0;

//   errorMessage.style.display = "none";
//   errorMessage.textContent = "";
//   decrementButton.style.cursor = "cursor";

//   if (counterValue <= counterLimits.min) {
//     decrementButton.style.cursor = "not-allowed";
//     errorMessage.textContent = "Valeur minimale atteinte.";
//     errorMessage.style.display = "block";
//   } else {
//     counterValue--;
//     counterText.textContent = counterValue;
//   }
// });

// incrementButton.addEventListener("click", () => {
//   let counterValue = +counterText.textContent || 0;

//   errorMessage.style.display = "none";
//   errorMessage.textContent = "";
//   incrementButton.style.cursor = "cursor";

//   if (counterValue >= counterLimits.max) {
//     incrementButton.style.cursor = "not-allowed";
//     errorMessage.textContent = "Valeur maximale atteinte.";
//     errorMessage.style.display = "block";
//   } else {
//     counterValue++;
//     counterText.textContent = counterValue;
//   }
// });

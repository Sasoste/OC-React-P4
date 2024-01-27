function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const contentModal = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// test fermeture de la modale
function closeModal() {
  modalbg.style.display = "none";
}
document.querySelector(".close").addEventListener("click", closeModal);

modalbg.addEventListener("click", function (e) {
  if (e.target === modalbg) {
    closeModal();
    confirmationModal.style.display = "none";
  }
});

// Formulaire

// Constante pour le formulaire
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const quantityInput = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(
  "input[type='radio'][name='location']"
);
const termsCheckbox = document.getElementById("checkbox1");

// Création message de validation Modal
const confirmationModal = document.createElement("div");
confirmationModal.id = "confirmationModal";
const message = document.createElement("span");
message.textContent = "Merci pour votre inscription";
const closeButton = document.createElement("button");
closeButton.classList.add("btn-close", "button");
closeButton.textContent = "Fermer";
confirmationModal.appendChild(message);
confirmationModal.appendChild(closeButton);
contentModal.appendChild(confirmationModal);
confirmationModal.display = "none";

// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.

function validateFirstName() {
  let formData = firstNameInput.closest(".formData");

  if (firstNameInput.value.trim().length < 2) {
    formData.dataset.error = "Le prénom doit contenir au moins 2 caractères.";
    formData.dataset.errorVisible = "true";
    return false;
  }
  delete formData.dataset.error;
  formData.dataset.errorVisible = "false";
  return true;
}

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
function validateLastName() {
  let formData = lastNameInput.closest(".formData");

  if (lastNameInput.value.trim().length < 2) {
    formData.dataset.error = "Le nom doit contenir au moins 2 caractères.";
    formData.dataset.errorVisible = "true";
    return false;
  }
  delete formData.dataset.error;
  formData.dataset.errorVisible = "false";
  return true;
}

// (3) L'adresse électronique est valide.
function validateEmail() {
  let formData = emailInput.closest(".formData");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    formData.dataset.error = "Veuillez entrer une adresse électronique valide.";
    formData.dataset.errorVisible = "true";
    return false;
  }
  delete formData.dataset.error;
  formData.dataset.errorVisible = "false";
  return true;
}

// (4) Pour le nombre de concours, une valeur numérique est saisie.
function validateQuantity() {
  let formData = quantityInput.closest(".formData");

  if (isNaN(quantityInput.value) || quantityInput.value.trim() === "") {
    formData.dataset.error =
      "Veuillez entrer un nombre valide pour le nombre de concours.";
    formData.dataset.errorVisible = "true";
    return false;
  }
  delete formData.dataset.error;
  formData.dataset.errorVisible = "false";
  return true;
}

// (5) Un bouton radio est sélectionné.
function validateRadioButtons() {
  let formData = document.querySelector(".formData-radio");

  for (let radioButton of radioButtons) {
    if (radioButton.checked) {
      delete formData.dataset.error;
      formData.dataset.errorVisible = "false";
      return true;
    }
  }
  formData.dataset.error = "Veuillez sélectionner un lieu pour le tournoi.";
  formData.dataset.errorVisible = "true";
  return false;
}

// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
function validateTermsCheckbox() {
  let formData = termsCheckbox.closest(".formData");

  if (!termsCheckbox.checked) {
    formData.dataset.error = `Vous devez accepter les conditions d'utilisation.`;
    formData.dataset.errorVisible = "true";
    return false;
  }
  delete formData.dataset.error;
  formData.dataset.errorVisible = "false";
  return true;
}

// Eviter d'envoyer le formulaire si tout n'est pas rempli

document
  .querySelector("form[name='reserve']")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validateQuantity() &&
      validateRadioButtons() &&
      validateTermsCheckbox()
    ) {
      this.reset();

      // Création fenêtre de confirmation

      confirmationModal.style.display = "flex";

      document
        .querySelector(".btn-close")
        .addEventListener("click", function () {
          closeModal();
          confirmationModal.style.display = "none";
        });
    }
  });

// Vérifier le responsive
// Complexité cyclomatique fonction ou classe pas plus de 4 compléxité cyclomatique
// Event fonctionne pas quand validation, ne pas changer l'html de la modale, mais cacher avec un nouveau truc et le display: none quand on ferme

// Mettre le message de confirmation en JS

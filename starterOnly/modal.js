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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// test fermeture de la modale
document.querySelector(".close").addEventListener("click", function () {
  modalbg.style.display = "none";
});

modalbg.addEventListener("click", function (e) {
  if (e.target === modalbg) {
    modalbg.style.display = "none";
  }
});

// test formulaire

let firstName = document.getElementById("first").value;
let lastName = document.getElementById("last").value;
let email = document.getElementById("email").value;
let quantity = document.getElementById("quantity").value;
let locationChecked = document.querySelector('input[name="location"]:checked');
let termsChecked = document.getElementById("checkbox1").checked;

function firstNameValidator() {
  if (firstName.trim().length < 2) {
    return false;
  } else {
    return true;
  }
}

function lastNameValidator() {
  if (lastName.trim().length < 2) {
    return false;
  } else {
    return true;
  }
}

function emailValidator() {}

function send() {
  if (firstNameValidator && lastNameValidator) {
  }
}

// Si tout champs valides, définir un objet ou un tableau qui gère les critères de validation des champs
// Parcourir tableau pour validation

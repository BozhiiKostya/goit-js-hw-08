const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);
storageHaveValue(formData);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  if (formData.hasOwnProperty('email') && formData.hasOwnProperty('message')) {
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.target.reset();
    formData = {};
  }
}

function storageHaveValue() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    messageInput.value = formData.message || '';
    emailInput.value = formData.email || '';
  }
}

const formEl = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const formData = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);
storageHaveValue();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
}

function storageHaveValue() {
  let parseLocalKey = {};
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    parseLocalKey = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    messageInput.textContent = parseLocalKey.message;
    emailInput.value = parseLocalKey.email;
  }
}

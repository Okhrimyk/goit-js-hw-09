const form = document.querySelector('.feedback-form');
const marckUpForm = [`
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Log in</button>`]
    .join("");
form.innerHTML = marckUpForm;   
const formEl = document.querySelector('.feedback-form');
const inputEmail = formEl.elements.email;
const inputMessage = formEl.elements.message;
const STORAGE_KEY = 'feedback-form-state';
const formData = {email: "", message: ""};
inputEmail.addEventListener('input', onInputEmail);
inputMessage.addEventListener('input', onInputMessage);
formEl.addEventListener('submit', onFormSubmit);
function onInputEmail(evt) {
    formData.email = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onInputMessage(evt) {
    formData.message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 
}

populateForm();
 function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parcedData = JSON.parse(savedData);
        inputEmail.value = parcedData.email || "";
        inputMessage.value = parcedData.message || "";
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
  }
};
function onFormSubmit(evt) {
  evt.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
}
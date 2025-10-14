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
const formData = { email: "", message: "" };

populateForm();
formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);
function onFormInput(evt) {
  if (evt.target.name === "email" || evt.target.name === "message") {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
}

 function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        inputEmail.value = parsedData.email || "";
        inputMessage.value = parsedData.message || "";
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
  console.log(formData)
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
}
const form = document.querySelector('.feedback-form');
const formData = {};

function hendleInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value;

  const formDataJSON = JSON.stringify(formData);
  console.log(formDataJSON);
  localStorage.setItem('formKey', formDataJSON);
}
form.addEventListener('input', hendleInput);

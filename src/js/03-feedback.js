import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const formData = {};
initPage();

function hendleInput(evt) {
  const { name, value } = evt.target;

  try {
    let saveData = localStorage.getItem('formKey');
    if (saveData) {
      saveData = JSON.parse(saveData);
    } else {
      saveData = {};
    }
    saveData[name] = value;
    const formDataJSON = JSON.stringify(saveData);
    console.log(formDataJSON);
    localStorage.setItem('formKey', formDataJSON);
  } catch (error) {
    console.log(error.message);
  }
}
// form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('input', throttle(hendleInput), 500);

function initPage() {
  try {
    const saveData = localStorage.getItem('formKey');
    if (!saveData) {
      return;
    }
    const saveDataObj = JSON.parse(saveData);
    Object.entries(saveDataObj).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  } catch (error) {
    console.log(error.message);
  }
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  storageAPI.remove('formKei');
}

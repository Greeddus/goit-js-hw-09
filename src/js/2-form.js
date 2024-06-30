let formData = {
  email: '',
  message: '',
};

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    formData = savedFormData;
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

const form = document.querySelector('.feedback-form');
form.addEventListener('input', function (event) {
  if (event.target.matches('input[name="email"]')) {
    formData.email = event.target.value.trim();
  } else if (event.target.matches('textarea[name="message"]')) {
    formData.message = event.target.value.trim();
  }
  updateLocalStorage();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formData = { email: '', message: '' };
  localStorage.removeItem('feedback-form-state');
  form.reset();
});

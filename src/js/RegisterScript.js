var form = document.querySelector('.needs-validation');

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();

  // Check if the form is valid
  if (form.checkValidity()) {
    // Perform form submission
    // You can add your own code here to handle form submission

    // Show success message
    showSuccessAlert();
    
    // Reset the form after submission
    form.reset();
  } else {
    // Show error message
    showErrorAlert();
  }

  form.classList.add('was-validated');
}

// Function to show success alert
function showSuccessAlert() {
  swal({
    title: "Success!",
    text: "Registered successfully !",
    icon: "success",
    button: {
    text: "OK",
    className: "btn-black",
  },
    closeOnClickOutside: false,
    closeOnEsc: false,
  }).then(() => {
// Redirect to Login.html
  window.location.href = "Login.html";
  });
}

// Function to show error alert
function showErrorAlert() {
    var errorAlert = document.getElementById('error-alert');
    errorAlert.style.display = 'block';
}

// Add event listener to the form on submit
form.addEventListener('submit', submitForm);

// Get the radio buttons and input fields
const bankAccountYes = document.getElementById('bankAccountYes');
const bankAccountNo = document.getElementById('bankAccountNo');
const accountNumberSection = document.getElementById('accountNumberSection');
const passwordSection = document.getElementById('passwordSection');
const bankAccountTypeSection = document.getElementById('bankAccountTypeSection');

// Add event listeners to the radio buttons
bankAccountYes.addEventListener('change', function() {
  if (this.checked) {
    accountNumberSection.style.display = 'block';
    passwordSection.style.display = 'block';
    bankAccountTypeSection.style.display = 'none';
  }
});

bankAccountNo.addEventListener('change', function() {
  if (this.checked) {
    accountNumberSection.style.display = 'none';
    passwordSection.style.display = 'none';
    bankAccountTypeSection.style.display = 'block';
  }
});

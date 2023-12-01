// Array of countries
const countries = [
    { code: 'CA', name: 'Canada' },
    { code: 'US', name: 'United States' },
    // Add more countries as needed
  ];
  
  // Populate the country dropdown dynamically
  const countryDropdown = document.getElementById('country');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = country.name;
    countryDropdown.appendChild(option);
  });
  
  // Form validation and submission
  const form = document.getElementById('registrationForm');
  const submitButton = document.getElementById('submitButton');
  const welcomeMessage = document.getElementById('welcomeMessage');
  
  form.addEventListener('input', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsCheckbox = document.getElementById('termsCheckbox').checked;
    const country = document.getElementById('country').value;
  
    const isUsernameValid = username.trim() !== '';
    const isPasswordValid = password.length >= 12;
    const isConfirmPasswordValid = confirmPassword === password;
    const isTermsAccepted = termsCheckbox;
    const isCountrySelected = country !== '';
  
    const isFormValid = isUsernameValid && isPasswordValid && isConfirmPasswordValid && isTermsAccepted && isCountrySelected;
  
    submitButton.disabled = !isFormValid;
  });
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const country = document.getElementById('country').value;
  
    welcomeMessage.textContent = `Welcome ${username}! The country code you selected is ${country}`;
    welcomeMessage.style.display = 'block';
  });
  
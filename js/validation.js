/**
 * AITU Esports Hub - Form Validation
 * Comprehensive validation logic for registration form
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  if (!form) return;

  const teamName = document.getElementById('teamName');
  const captainEmail = document.getElementById('captainEmail');
  const gameSelect = document.getElementById('gameSelect');
  const playerCount = document.getElementById('playerCount');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const successAlert = document.getElementById('successAlert');

  // Event 6: submit event with preventDefault()
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // 1. Team Name validation (min length 3)
    if (teamName.value.trim().length < 3) {
      setError(teamName, 'teamNameError');
      isValid = false;
    } else {
      setSuccess(teamName, 'teamNameError');
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(captainEmail.value.trim())) {
      setError(captainEmail, 'emailError');
      isValid = false;
    } else {
      setSuccess(captainEmail, 'emailError');
    }

    // 3. Game Selection validation
    if (gameSelect.value === '') {
      setError(gameSelect, 'gameError');
      isValid = false;
    } else {
      setSuccess(gameSelect, 'gameError');
    }

    // 4. Player count validation (1 to 5)
    const countVal = parseInt(playerCount.value);
    if (isNaN(countVal) || countVal < 1 || countVal > 5) {
      setError(playerCount, 'playerCountError');
      isValid = false;
    } else {
      setSuccess(playerCount, 'playerCountError');
    }

    // 5. Password minimum length (min 6)
    if (password.value.length < 6) {
      setError(password, 'passwordError');
      isValid = false;
    } else {
      setSuccess(password, 'passwordError');
    }

    // 6. Confirm password matching
    if (confirmPassword.value === '' || confirmPassword.value !== password.value) {
      setError(confirmPassword, 'confirmPasswordError');
      isValid = false;
    } else {
      setSuccess(confirmPassword, 'confirmPasswordError');
    }

    // Success feedback
    if (isValid) {
      successAlert.classList.remove('d-none');
      form.reset();
      // Clear visual validation classes
      [teamName, captainEmail, gameSelect, playerCount, password, confirmPassword].forEach(el => {
        el.classList.remove('is-valid');
      });

      // Scroll to top of form
      window.scrollTo({ top: form.offsetTop - 50, behavior: 'smooth' });
    } else {
      successAlert.classList.add('d-none');
    }
  });

  function setError(element, errorId) {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
  }

  function setSuccess(element, errorId) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
  }
});

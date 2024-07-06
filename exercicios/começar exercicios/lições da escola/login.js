document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (validatePassword(password)) {
        alert('Login realizado com sucesso!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'A senha deve ter pelo menos 8 caracteres, incluindo letras e números.';
    }
});

function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}
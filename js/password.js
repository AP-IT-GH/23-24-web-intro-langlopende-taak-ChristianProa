document.getElementById('generate-btn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('length').value || 16; // Si no se especifica, usa 16 como valor predeterminado
    const apiKey = 'KWlArNBhpxwzc97oWI1Yrw==ONcurFH4qA1Xn98n';

    fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('password').value = data.random_password;
    })
    .catch(error => {
        console.error('Error fetching password:', error);
        const passwordInput = document.getElementById('password');
        passwordInput.value = 'Failed to generate password.';
        passwordInput.classList.add('error'); // Añade la clase de error para aplicar el estilo
    });
    
}

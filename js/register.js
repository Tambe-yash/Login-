const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const { data, error } = await window.supabaseClient.auth.signUp({
            email: emailInput.value,
            password: passwordInput.value,
            options: {
                data: {
                    full_name: nameInput.value
                }
            }
        });

        if (error) throw error;

        // Registration successful
        alert('Registration successful! Please check your email for verification.');
        window.location.href = 'login.html'; // Redirect to login page
    } catch (error) {
        alert('Error registering: ' + error.message);
    }
}); 
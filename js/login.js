const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const { data, error } = await window.supabaseClient.auth.signInWithPassword({
            email: emailInput.value,
            password: passwordInput.value
        });

        if (error) throw error;

        // Login successful
        alert('Logged in successfully!');
        window.location.href = 'index.html'; // Redirect to home page
    } catch (error) {
        alert('Error logging in: ' + error.message);
    }
}); 
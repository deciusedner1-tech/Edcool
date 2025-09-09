document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login siksè! Dirèk nan paj prensipal...');
    window.location.href = 'home.html';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Enskripsyon siksè! Kounye a ou ka login.');
    document.querySelector('.register-container').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
});

document.getElementById('showRegister').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.login-container').classList.add('hidden');
    document.querySelector('.register-container').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.register-container').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
});
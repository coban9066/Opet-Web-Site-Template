document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var loginMessage = document.getElementById('loginMessage');
    loginMessage.style.display = 'block'; 
    loginMessage.textContent = 'Giriş başarılı!';
});

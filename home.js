document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Èske ou vle dekonekte?')) {
        alert('Dekoneksyon siksè...');
        window.location.href = 'index.html';
    }
});

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Fonksyon "Achte" ap vin pi devlope. Nou pral ajoute PayPal oswa Stripe byento!');
    });
});
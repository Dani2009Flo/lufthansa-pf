document.querySelectorAll('.animated-button').forEach((button) => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        
        if (url) {
            // Wenn die URL vorhanden ist, weiterleiten
            window.location.href = url;
        } else {
            // Für den "HELP"-Button (oder jeden Button ohne URL)
            alert(`Du hast auf den ${button.textContent} Button geklickt!`);
        }
    });
});

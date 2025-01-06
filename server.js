document.querySelectorAll('.animated-button').forEach((button) => {
    button.addEventListener('click', () => {
        alert(`Du hast auf ${button.textContent} geklickt!`);
    });
});

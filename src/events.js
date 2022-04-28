document.querySelector('h2').addEventListener('click', () => {document.body.classList.toggle('dark')});
document.querySelector('#button').addEventListener('click', redirectWhatsapp);
document.querySelector('#phone').addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        redirectWhatsapp();
    };
});


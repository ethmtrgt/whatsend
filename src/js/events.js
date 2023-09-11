document.querySelector('#button').addEventListener('click', redirectWhatsapp);
document.querySelector('.info-icon').addEventListener('click', openInfoPage)
document.querySelector('#phone').addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        redirectWhatsapp();
    };
});


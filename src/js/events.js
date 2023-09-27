document.querySelector('#button').addEventListener('click', redirectWhatsapp);
document.querySelector('.info-icon').addEventListener('click', openInfoPage)
document.querySelector('#phone').addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        redirectWhatsapp();
    };
});
document.querySelector('#phone').addEventListener('click', (event) => {
    if (event.target.value === '') {
        let countryCode = localStorage.getItem('country-code');
        document.querySelector('#phone').value = countryCode;
    }
});
document.querySelector('#settings-toggle').addEventListener('click', (event) => {
    document.querySelector('#country-code').value = localStorage.getItem('country-code');
    document.querySelector('#settings').classList.toggle('visible');
});
document.querySelector('#country-code').addEventListener('blur', (event) => {
    localStorage.setItem('country-code', event.target.value);
});

function changeLang(event) {
    const select = event.target;
    const selLang = select.options[select.selectedIndex].value;
    localStorage.setItem('lang',selLang);
    location.replace(selLang);
}

function loadLang() {
    const lang = localStorage.getItem('lang');
    if (!lang || lang === 'en') {
        localStorage.setItem('lang','en');
        location.replace('en');
    } else {
        location.replace('ko');
    }
}

function init() {
    if (!(location.href.includes('ko') || location.href.includes('en'))) loadLang();
    document.querySelectorAll('select').forEach(select => select.addEventListener('input',changeLang));
}

init();
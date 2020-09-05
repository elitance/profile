function changeLang(event) {
    const select = document.querySelector('select');
    const selLang = select.options[select.selectedIndex].value;
    localStorage.setItem('lang',selLang);
}

function loadLang() {
    const lang = localStorage.getItem('lang');
    if (!lang || lang === 'en-gb') {
        localStorage.setItem('lang','en-gb');
        location.replace('en-gb');
    } else {
        location.replace('ko-kr');
    }
}

function init() {
    if (!(location.href.includes('ko-kr') || location.href.includes('en-gb'))) loadLang();
    document.querySelector('select').addEventListener('input',changeLang);
}

init();
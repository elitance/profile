function getScroll(event) {
    if (window.scrollY >= 500) {
        document.querySelector("nav").style.transform = 'none';
    } else {
        document.querySelector("nav").style.transform = 'translateY(-100px)';
    }
}

function init() {
    window.addEventListener('scroll',getScroll);
}

init();
let prevColor;

function invertColor(event) {
    prevColor = window.getComputedStyle(event.target.querySelector('img')).filter;
    event.target.querySelector('img').style.filter = ' invert(1)';
}

function uninvertColor(event) {
    event.target.querySelector('img').style.filter = prevColor;
}

function init() {
    document.querySelectorAll('.contact a').forEach((a) => {a.addEventListener('mouseenter',invertColor); a.addEventListener('mouseleave',uninvertColor)});
}

init();
const openModalBtn = document.getElementById('js-open-modal');
const closeModalBtn = document.getElementById('js-close-modal');
const modal = document.getElementById('js-modal');
const overlay = document.getElementById('js-overlay');

const addClass = (element, style) => {
    element.classList.add(style);
}

const removeClass = (element, style) => {
    element.classList.remove(style);
}

const styles = {
    active: 'active',
    opened: 'opened',
    closed: 'closed',
}

openModalBtn.addEventListener('click', () => {
    addClass(modal, styles.opened);
    addClass(document.body, styles.active);
    overlay.style.display = 'block';
})

closeModalBtn.addEventListener('click', () => {
    addClass(modal, styles.closed);
    removeClass(document.body, styles.active);
    overlay.style.display = '';
    setTimeout(() => {
        removeClass(modal, styles.closed);
        removeClass(modal, styles.opened);
    }, 100);
})

overlay.addEventListener('click', () => {
    addClass(modal, styles.closed);
    removeClass(document.body, styles.active);
    overlay.style.display = '';
    setTimeout(() => {
        removeClass(modal, styles.closed);
        removeClass(modal, styles.opened);
    }, 100);
})

document.addEventListener('keyup', e => {
    if (e.key.toLocaleLowerCase() === "escape") {
        addClass(modal, styles.closed);
        removeClass(document.body, styles.active);
        overlay.style.display = '';
        setTimeout(() => {
            removeClass(modal, styles.closed);
            removeClass(modal, styles.opened);
        }, 100);
    }
})
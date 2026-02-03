const dragable = document.querySelectorAll('[data-dragable]');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let startX, startY;

dragable.forEach(item => {
    item.addEventListener('mousedown', e => {
        e.currentTarget.classList.add('dragging');
        startX = e.clientX;
        startY = e.clientY;
    });
    item.addEventListener('mouseup', e => {
        e.currentTarget.classList.remove('dragging');
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        startX = dx;
        startY = dy;
    });
    item.addEventListener('mousemove', e => {
        if (e.currentTarget.classList.contains('dragging')) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            e.currentTarget.style.transform = `translate(${dx}px, ${dy}px)`;
        }
    });
});
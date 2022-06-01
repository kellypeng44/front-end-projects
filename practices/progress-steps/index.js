const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

// index of the current active circle
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) currentActive = circles.length;

    updateDom();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) currentActive = 1;

    updateDom();
});

function updateDom() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // handle the progress bar -> percentage
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length-1)/(circles.length-1)*100+'%';

    // update the accesibility of the buttons
    prev.disabled = currentActive === 1 ? true : false;
    next.disabled = currentActive === circles.length ? true : false;
}

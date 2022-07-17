// TODO: 1. extend from this project 2. look into anime-on-scroll library

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    // set the trigger point to be a little less than the innerHeight: 4/5 of the height
    const trigger = window.innerHeight * (4 / 5);

    boxes.forEach(box => {
        // DOMRect object: the smallest rectangle that contains the entire element
        const boxTop = box.getBoundingClientRect().top;
        
        // check if the box pass by the trigger 
        if (boxTop < trigger) box.classList.add('show');
        else box.classList.remove('show');
    });
}
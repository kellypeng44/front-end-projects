const loading = document.querySelector('.loading');
const background = document.querySelector('.background');

// initialize the load
let load = 0;

// 30 millisecond
let interval = setInterval(blurring, 30);

function blurring () {
    load++;

    if (load > 99) {
        clearInterval(interval);
    }

    loading.innerText = `${load}%`;
    loading.style.opacity = 1 - load/100;

    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


// scale(load, 0, 100, 1, 0);
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
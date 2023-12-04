let bkColorVal = 255;

// Change time remaining every 0.5 second
let helloDarkness = setInterval(() => {
    if (bkColorVal > 0) {
        bkColorVal--;
        document.body.style.backgroundColor = `rgb(${bkColorVal}, ${bkColorVal}, ${bkColorVal})`;
    } else {
        clearInterval(helloDarkness);
    }
}, 500
);

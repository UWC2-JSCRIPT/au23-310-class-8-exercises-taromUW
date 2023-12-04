let bkColorVal = 0;
const animate = function() {
    bkColorVal++;
    if (bkColorVal <= 255) {
        document.body.style.backgroundColor = `rgb(${bkColorVal}, ${bkColorVal}, ${bkColorVal})`;
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);
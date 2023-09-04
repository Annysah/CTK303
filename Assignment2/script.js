let sliderImages = document.getElementById('sliderImages');
let images = new Array ( 
    'assets/flower1.avif', 
    'assets/flower2.avif', 
    'assets/flower3.avif', 
    'assets/flower4.avif', 
    'assets/flower5.avif', 
    'assets/flower6.avif', 
    'assets/flower7.avif', 
);

let imagesLength = images.length;
let i = 0;

function slider() {
    if (i > imagesLength - 1) {
        i = 0;
    }
    sliderImages.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}
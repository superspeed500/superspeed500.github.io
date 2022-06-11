// Thanks to https://stackoverflow.com/questions/22292252/css-background-image-slideshow
// Each background image MUST have a defined class in main.css that points to the location of the image on the server

let backgrounds = new Array('a_ets2_scania','b_trs31','c_mtel11')
let nextImage = 0

// Function for running the slide show, never terminates
function doSlideshow() {
    // Get the class for the image to load
    let image = backgrounds[nextImage]
    $('body').toggleClass(image)

    // Reset te nextImage counter if we are at the end of the array.
    if (nextImage < backgrounds.length - 1) {
        nextImage++
    } else {
        nextImage = 0
    }

    setTimeout(function() {
        // Remove the current image by removing its class
        $('body').toggleClass(image)
        doSlideshow()
    }, 10000)
}

// Start the slieshow function once the page is sucessfull loaded.
$(document).ready(function() {
    doSlideshow()
})
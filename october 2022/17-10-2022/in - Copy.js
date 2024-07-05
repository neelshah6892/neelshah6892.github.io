let i1 = 0, i2 = 0, i3 = 0, i = 0;
let intervalId;


// Photo grid functions (grid1, grid2, grid3, grid) remain unchanged
function grid1() {
    let img1 = ["photos/msg6711679717-2261.jpg"]
    let element = document.querySelector(".active");
    const viewTime = 5000; // Time to view the photo in milliseconds
    const transitionTime = 1500; // Transition time in milliseconds
    const imageChangeDelay = 500; // Delay before changing image source in milliseconds

    // Wait for viewTime before starting the transition out
    setTimeout(() => {
        element.classList.remove("a");
        element.classList.add("x");

        // Wait for transitionTime before changing the image
        setTimeout(() => {
            // Change the image source
            element.setAttribute("src", img1[i1]);

            // Wait for imageChangeDelay before starting the transition in
            setTimeout(() => {
                element.classList.remove("x");
                element.classList.add("a");
                i1 = (i1 + 1) % img1.length; // Increment index for the next image
            }, imageChangeDelay); 1
        }, transitionTime);

    }, viewTime);
}

function grid2() {
    let img2 = ["photos/msg6711679717-2263.jpg"]
    let element = document.querySelector(".active1");
    const viewTime = 5000; // Time to view the photo in milliseconds
    const transitionTime = 1500; // Transition time in milliseconds
    const imageChangeDelay = 500; // Delay before changing image source in milliseconds

    // Wait for viewTime before starting the transition out
    setTimeout(() => {
        element.classList.remove("b");
        element.classList.add("y");

        // Wait for transitionTime before changing the image
        setTimeout(() => {
            // Change the image source
            element.setAttribute("src", img2[i2]);

            // Wait for imageChangeDelay before starting the transition in
            setTimeout(() => {
                element.classList.remove("y");
                element.classList.add("b");
                i2 = (i2 + 1) % img2.length; // Increment index for the next image
            }, imageChangeDelay);

        }, transitionTime);

    }, viewTime);
}

function grid3() {
    let img3 = ["photos/Screenshot (25).png"]
    let element = document.querySelector(".active2");
    const viewTime = 5000; // Time to view the photo in milliseconds
    const transitionTime = 1500; // Transition time in milliseconds
    const imageChangeDelay = 500; // Delay before changing image source in milliseconds

    // Wait for viewTime before starting the transition out
    setTimeout(() => {
        element.classList.remove("c");
        element.classList.add("z");

        // Wait for transitionTime before changing the image
        setTimeout(() => {
            // Change the image source
            element.setAttribute("src", img3[i3]);

            // Wait for imageChangeDelay before starting the transition in
            setTimeout(() => {
                element.classList.remove("z");
                element.classList.add("c");
                i3 = (i3 + 1) % img3.length; // Increment index for the next image
            }, imageChangeDelay);

        }, transitionTime);

    }, viewTime);
}



// let i = 0;

function grid() {

    let img = ["photos/msg6711679717-2261.jpg" , "photos/msg6711679717-2263.jpg" , "photos/Screenshot (25).png"]

    let element = document.querySelector(".active");
    const viewTime = 5000; // Time to view the photo in milliseconds
    const transitionTime = 1500; // Transition time in milliseconds
    const imageChangeDelay = 500; // Delay before changing image source in milliseconds

    // Wait for viewTime before starting the transition out
    setTimeout(() => {
        element.classList.remove("a");
        element.classList.add("x");

        // Wait for transitionTime before changing the image
        setTimeout(() => {
            // Change the image source
            element.setAttribute("src", img[i]);

            // Wait for imageChangeDelay before starting the transition in
            setTimeout(() => {
                element.classList.remove("x");
                element.classList.add("a");
                i = (i + 1) % img.length; // Increment index for the next image
            }, imageChangeDelay);

        }, transitionTime);

    }, viewTime);
}

function changePhoto() {
    grid(); // Use the single photo grid function for portrait mode
}

function handleOrientationChange() {
    clearInterval(intervalId);
    const isPortrait = window.innerWidth < window.innerHeight;
    // const videosHidden = document.getElementById('videos').classList.contains('hidden');
    // const photosHidden = document.getElementById('photos').classList.contains('hidden');

    if (isPortrait) {
        document.querySelector(".active1").classList.add("hidden");
        document.querySelector(".active2").classList.add("hidden");
        // document.getElementById("v2").classList.add("hidden");
        // document.getElementById("v3").classList.add("hidden");

        // if (!videosHidden) {
            // x = updateVideoSource(document.getElementById('v1'), vide, 0);
        // } else if (!photosHidden) {
            intervalId = setInterval(changePhoto, 6000);
        // }
    } else {
        document.querySelector(".active1").classList.remove("hidden");
        document.querySelector(".active2").classList.remove("hidden");

        // if (!videosHidden) {
        //     document.getElementById("v2").classList.remove("hidden");
        //     document.getElementById("v3").classList.remove("hidden");
        //     x1 = updateVideoSource(document.getElementById('v1'), const1, 0);
        //     x2 = updateVideoSource(document.getElementById('v2'), const2, 0);
        //     x3 = updateVideoSource(document.getElementById('v3'), const3, 0);
        // } else if (!photosHidden) {
            intervalId = setInterval(() => {
                grid1();
                grid2();
                grid3();
            }, 6000);
        // }
    }
}

// Initial setup and event listeners
handleOrientationChange();
window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);

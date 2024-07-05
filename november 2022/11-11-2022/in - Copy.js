let i1 = 0, i2 = 0, i3 = 0, i = 0;
let intervalId;
let img1 = []
let img2 = []
let img3 = []
let img = [...img1, ...img2, ...img3]

function grid1() {
    let element = document.querySelector(".active");
    const viewTime = 5000;
    const transitionTime = 1500;
    const imageChangeDelay = 500;
    setTimeout(() => {
        element.classList.remove("a");
        element.classList.add("x");
        setTimeout(() => {
            element.setAttribute("src", img1[i1]);
            setTimeout(() => {
                element.classList.remove("x");
                element.classList.add("a");
                i1 = (i1 + 1) % img1.length;
            }, imageChangeDelay); 1
        }, transitionTime);
    }, viewTime);
}

function grid2() {
    let element = document.querySelector(".active1");
    const viewTime = 5000;
    const transitionTime = 1500;
    const imageChangeDelay = 500;
    setTimeout(() => {
        element.classList.remove("b");
        element.classList.add("y");
        setTimeout(() => {
            element.setAttribute("src", img2[i2]);
            setTimeout(() => {
                element.classList.remove("y");
                element.classList.add("b");
                i2 = (i2 + 1) % img2.length;
            }, imageChangeDelay);
        }, transitionTime);
    }, viewTime);
}

function grid3() {

    let element = document.querySelector(".active2");
    const viewTime = 5000;
    const transitionTime = 1500;
    const imageChangeDelay = 500;
    setTimeout(() => {
        element.classList.remove("c");
        element.classList.add("z");
        setTimeout(() => {
            element.setAttribute("src", img3[i3]);
            setTimeout(() => {
                element.classList.remove("z");
                element.classList.add("c");
                i3 = (i3 + 1) % img3.length;
            }, imageChangeDelay);
        }, transitionTime);
    }, viewTime);
}

function grid() {
    let element = document.querySelector(".active");
    const viewTime = 5000;
    const transitionTime = 1500;
    const imageChangeDelay = 500;
    setTimeout(() => {
        element.classList.remove("a");
        element.classList.add("x");
        setTimeout(() => {
            element.setAttribute("src", img[i]);
            setTimeout(() => {
                element.classList.remove("x");
                element.classList.add("a");
                i = (i + 1) % img.length;
            }, imageChangeDelay);
        }, transitionTime);
    }, viewTime);
}

function changePhoto() {
    grid(); 
}

function handleOrientationChange() {
    clearInterval(intervalId);
    const isPortrait = window.innerWidth < window.innerHeight;

    if (isPortrait) {
        document.querySelector(".active1").classList.add("hidden");
        document.querySelector(".active2").classList.add("hidden");
        intervalId = setInterval(changePhoto, 6000);
    } else {
        document.querySelector(".active1").classList.remove("hidden");
        document.querySelector(".active2").classList.remove("hidden");
        intervalId = setInterval(() => {
            grid1();
            grid2();
            grid3();
        }, 6000);
    }
}

handleOrientationChange();
window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);

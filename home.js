let img = ['download (2).jfif', 'fulfillment of my childhood dreams.jfif', 'download (1).jfif', 'download (3).jfif', 'msg6711679717-1800a.jpg'];
let texts = ['Mujaras', 'Pitara', 'Modeling', 'Your Reaction', 'Our Memories'];
let autoSwitchTimer;
function handleMemoriesButtonClick() {
    const memoriesBtn = document.querySelector('.memories-btn');
    const btnText = memoriesBtn.textContent.trim();

    switch (btnText) {
        case 'Mujaras':
            window.location.href = 'mujarass.html';
            break;
        case 'Bucket List':
            window.location.href = 'list.html';
            break;
        case 'Modeling':
            window.location.href = 'modelingg.html';
            break;
        case 'Flights':
            window.location.href = 'flights.html';
            break;
        case 'MEMORIES':
            window.location.href = 'memories.html';
            break;
        default:
            console.log('No specific page for this button text');
    }
}

// Add click event listener to memories-btn
document.querySelector('.memories-btn').addEventListener('click', handleMemoriesButtonClick);

function updateMainContent(newImgSrc, newText) {
    const mainImage = document.querySelector('.map');
    const mainText = document.querySelector('.maintext');
    const memoriesBtn = document.querySelector('.memories-btn');

    mainImage.classList.add('fade-out');
    mainText.classList.add('fade-out');
    memoriesBtn.classList.add('fade-out');

    setTimeout(() => {
        mainImage.src = newImgSrc;
        mainText.textContent = newText;
        memoriesBtn.textContent = newText;

        mainImage.classList.remove('fade-out');
        mainText.classList.remove('fade-out');
        memoriesBtn.classList.remove('fade-out');
    }, 300);
}

function updateGridItem(gridItem, newImgSrc, newText) {
    const img = gridItem.querySelector('img');
    const text = gridItem.querySelector('.sectext');

    img.classList.add('fade-out');
    text.classList.add('fade-out');

    setTimeout(() => {
        img.src = newImgSrc;
        text.textContent = newText;

        img.classList.remove('fade-out');
        text.classList.remove('fade-out');
    }, 300);
}

function swapContent(gridItem) {
    const gridImg = gridItem.querySelector('img');
    const gridText = gridItem.querySelector('.sectext');
    const mainImg = document.querySelector('.map');
    const mainText = document.querySelector('.maintext');

    const tempImgSrc = mainImg.src;
    const tempText = mainText.textContent;

    updateMainContent(gridImg.src, gridText.textContent);
    updateGridItem(gridItem, tempImgSrc, tempText);
}

function startAutoSwitchTimer() {
    clearTimeout(autoSwitchTimer);
    autoSwitchTimer = setTimeout(() => {
        const gridItems = document.querySelectorAll('.box');
        const randomIndex = Math.floor(Math.random() * gridItems.length);
        swapContent(gridItems[randomIndex]);
        startAutoSwitchTimer(); // Restart the timer
    }, 5000);
}

// Add click event listeners to grid items
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        swapContent(box);
        startAutoSwitchTimer(); // Restart the timer on interaction
    });
});

// Start the initial auto-switch timer
startAutoSwitchTimer();

// Reset the timer when the user interacts with the page
document.addEventListener('mousemove', startAutoSwitchTimer);
document.addEventListener('keypress', startAutoSwitchTimer);


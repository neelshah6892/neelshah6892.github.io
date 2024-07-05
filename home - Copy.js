let images = ['download (2).jfif', 'fulfillment of my childhood dreams.jfif', 'download (1).jfif', 'download (3).jfif', 'msg6711679717-1800a.jpg'];
let texts = ['Mujaras', 'Pitara', 'Modeling', 'Your Reaction', 'Our Memories'];
let currentIndex = 0;
let autoSwitchTimer;

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

function changeContent() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainContent(images[currentIndex], texts[currentIndex]);
}

function startAutoSwitchTimer() {
    clearInterval(autoSwitchTimer);
    autoSwitchTimer = setInterval(changeContent, 5000);
}

document.querySelector('.memories-btn').addEventListener('click', () => {
    const btnText = document.querySelector('.memories-btn').textContent.trim();
    window.location.href = btnText.toLowerCase().replace(' ', '') + '.html';
});

const menu = document.querySelector('.Menu');
const hoverInfo = document.querySelector('.hover-info');

menu.addEventListener('mouseenter', () => {
    menu.classList.add('hover');
    hoverInfo.style.display = 'flex';
});

menu.addEventListener('mouseleave', () => {
    menu.classList.remove('hover');
    hoverInfo.style.display = 'none';
});

document.querySelectorAll('.page').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('home-btn')) {
            location.reload();
        } else {
            window.location.href = button.dataset.page;
        }
    });

    button.addEventListener('mouseenter', () => {
        if (!button.classList.contains('home-btn')) {
            hoverInfo.innerHTML = `
                <h2>${button.textContent}</h2>
                <p>${button.dataset.description}</p>
            `;
        }
    });
});

// Set initial content for hover info
const firstButton = document.querySelector('.page:not(.home-btn)');
if (firstButton) {
    hoverInfo.innerHTML = `
        <h2>${firstButton.textContent}</h2>
        <p>${firstButton.dataset.description}</p>
    `;
}

startAutoSwitchTimer();

document.addEventListener('mousemove', startAutoSwitchTimer);
document.addEventListener('keypress', startAutoSwitchTimer);
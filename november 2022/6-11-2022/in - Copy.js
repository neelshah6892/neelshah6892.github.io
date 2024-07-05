let i1 = 0, i2 = 0, i3 = 0, i = 0;
let intervalId;
let const1 = [];
let const2 = [];
let const3 = [];
const vide = [...const1, ...const2, ...const3];
let x = 0, x1 = 0, x2 = 0, x3 = 0;

function updateVideoSource(video, sourceArray, index) {
    // Start fade out
    video.classList.add('video-hidden');
    video.classList.remove('video-visible');

    setTimeout(() => {
        video.setAttribute("src", sourceArray[index]);
        video.load();
        video.play();
        video.classList.remove('video-hidden');
        video.classList.add('video-visible');
    }, 1000); 
    return (index + 1) % sourceArray.length;
}

const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('ended', () => {
        const v2Hidden = document.getElementById('v2').classList.contains('hidden');
        const v3Hidden = document.getElementById('v3').classList.contains('hidden');

        if (!v2Hidden && !v3Hidden) {
            if (video.id === 'v1') x1 = updateVideoSource(video, const1, x1);
            else if (video.id === 'v2') x2 = updateVideoSource(video, const2, x2);
            else if (video.id === 'v3') x3 = updateVideoSource(video, const3, x3);
        } else if (v2Hidden && v3Hidden) {
            x = updateVideoSource(document.getElementById('v1'), vide, x);
        }
    });
});

function handleOrientationChange() {
    clearInterval(intervalId);
    const isPortrait = window.innerWidth < window.innerHeight;

    if (isPortrait) {
        document.getElementById("v2").classList.add("hidden");
        document.getElementById("v3").classList.add("hidden");
        x = updateVideoSource(document.getElementById('v1'), vide, 0);
    } else {
        document.getElementById("v2").classList.remove("hidden");
        document.getElementById("v3").classList.remove("hidden");
        x1 = updateVideoSource(document.getElementById('v1'), const1, 0);
        x2 = updateVideoSource(document.getElementById('v2'), const2, 0);
        x3 = updateVideoSource(document.getElementById('v3'), const3, 0);
    }
}
handleOrientationChange();
window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);

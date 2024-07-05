let x = 0, x1 = 0, x2 = 0, x3 = 0;
let intervalId;

const const1 = ['videos/cm-chat-media-video-1_d44b4b93-84ff-520e-a384-fc9e522b5e61_377_0_0.mov'];
const const2 = ['videos/recorded-1991763015640.mov'];
const const3 = ['videos/WhatsApp Video 2024-07-01 at 12.43.01 AM.mp4'];
const vide = ['videos/cm-chat-media-video-1_d44b4b93-84ff-520e-a384-fc9e522b5e61_377_0_0.mov', 'videos/recorded-1991763015640.mov', 'videos/WhatsApp Video 2024-07-01 at 12.43.01 AM.mp4'];

function updateVideoSource(video, sourceArray, index) {
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
        // document.querySelector(".active1").classList.add("hidden");
        // document.querySelector(".active2").classList.add("hidden");
        document.getElementById("v2").classList.add("hidden");
        document.getElementById("v3").classList.add("hidden");

        x = updateVideoSource(document.getElementById('v1'), vide, x);
    } else {
        // document.querySelector(".active1").classList.remove("hidden");
        // document.querySelector(".active2").classList.remove("hidden");
        document.getElementById("v2").classList.remove("hidden");
        document.getElementById("v3").classList.remove("hidden");

        x1 = updateVideoSource(document.getElementById('v1'), const1, x1);
        x2 = updateVideoSource(document.getElementById('v2'), const2, x2);
        x3 = updateVideoSource(document.getElementById('v3'), const3, x3);
    }
}

handleOrientationChange();
window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);

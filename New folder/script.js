document.getElementById('startBtn').addEventListener('click', function() {
    const overlay = document.getElementById('startOverlay');
    const video = document.getElementById('mainVideo');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        video.style.display = 'block';
        video.setAttribute('controls', 'controls'); // Add this line to ensure controls are visible
        video.play();
    }, 500);
});
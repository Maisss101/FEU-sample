document.querySelectorAll('video').currentTime = 8;

const vid = document.querySelectorAll('video');
for (let i = 0; i < vid.length; i++) {
    vid[i].addEventListener('mouseenter',
    function(e) {
        vid[i].play()
    })
    vid[i].addEventListener('mouseout',
    function(e) {
        vid[i].pause()
    })
}

document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () => {
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
});

document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';
}
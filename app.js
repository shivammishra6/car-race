const audio=document.createElement('audio')
audio.setAttribute('src','sound.mp3')
audio.loop=true
play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        play.classList.remove('fa-volume-xmark')
        play.classList.add('fa-volume-high')
    } else {
        audio.pause()
        play.classList.remove('fa-volume-high')
        play.classList.add('fa-volume-xmark')
    }
})
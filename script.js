const next = document.getElementById('next')
const contentBg = document.getElementById('content-bg')
let images = document.getElementsByTagName('img')
next.addEventListener('click',function(){
    for(let i = 0; i < images.length; i++){
        if (images[i].id === 'active') {
            images[i].removeAttribute('id')
            let nextIndex = (i + 1) % images.length
            images[nextIndex].setAttribute('id','active')
            contentBg.style.background = `url(${images[nextIndex].src})`
            contentBg.style.backgroundRepeat = 'no-repeat'
            contentBg.style.backgroundSize = 'cover'
            contentBg.style.backgroundPosition = '0 0'
            break
        }
    }
})

const prev = document.getElementById('prev')
prev.addEventListener('click',function(){
    for(let i = 0; i < images.length; i++){
        if (images[i].id === 'active') {
            images[i].removeAttribute('id')
            let prevIndex = (i - 1 + images.length) % images.length
            images[prevIndex].setAttribute('id','active')
            contentBg.style.background = `url(${images[prevIndex].src})`
            contentBg.style.backgroundRepeat = 'no-repeat'
            contentBg.style.backgroundSize = 'cover'
            contentBg.style.backgroundPosition = '0 0'
            break
        }
    }

})
const play = document.getElementById('play')
const stop = document.getElementById('stop')
let isIntervalActive = false
play.addEventListener('click',function(){
    let intervalId
    play.removeAttribute('id')
    play.setAttribute('id', 'play-onclick')
    if (!isIntervalActive) {
        isIntervalActive = true
        intervalId = setInterval(() => {
                let i = [...images].findIndex(el => el.id === 'active')
                images[i].removeAttribute('id')
                let nextIndex = (i + 1) % images.length
                images[nextIndex].setAttribute('id','active')
                contentBg.style.background = `url(${images[nextIndex].src})`
                contentBg.style.backgroundRepeat = 'no-repeat'
                contentBg.style.backgroundSize = 'cover'
                contentBg.style.backgroundPosition = '0 0'
            }, 3000);
    }
    stop.addEventListener('click', function(){
        clearInterval(intervalId)
        play.removeAttribute('id')
        play.setAttribute('id', 'play')    
    })
})
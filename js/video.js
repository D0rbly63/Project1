const video = document.getElementById('myVideo')
const btnPlay = document.getElementById('play')
const btnMute = document.getElementById('mute')
const range = document.getElementById('range')


const playList = ['video1','video2','video3']
let index  = 0


const videoNeim = ['как пронести сладости в больницу','дракон','компот']
const videoDesk = ['Влад а4' ,'дино','компотик']
const title = document.querySelector('.video__title')
const desk = document.querySelector('.video__text')






function next(){
    if (index < playList.length - 1){
    index = index + 1
    }
    else{
        index = 0
    }
    title.textContent = videoNeim[index]
    desk.textContent = videoDesk[index]

    video.src = `video/${playList[index]}.mp4`

    

}
function prev(){
    if (index > 0){
    index = index - 1}
    else{
        index = playList.length - 1 
    }
    title.textContent = videoNeim[index]
    desk.textContent = videoDesk[index]
    video.src = `video/${playList[index]}.mp4`
}



function rangeChange(){
video.volume = range.value

}





function play(){
    if(video.paused){
        video.play()
        btnPlay.textContent = 'pause'
    }
    else{
        video.pause()
        btnPlay.textContent = 'play'
    }
}
function mute(){
    if(video.muted){
        video.muted = false
        btnMute.textContent = 'Off'
    }
    else{
        video.muted = true
        btnMute.textContent = 'On'
    }
    
}
















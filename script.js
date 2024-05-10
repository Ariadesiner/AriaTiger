const musicPlayer = document.querySelector('.music')
const divBox = document.querySelector('.box')
const pic2 = document.querySelector('.pic2')
const textClick = document.querySelector('.text-click')




function clickMe(){
    musicPlayer.play()
    divBox.style.display = 'block'
    pic2.style.display = 'none'
    textClick.style.display = 'none'

}
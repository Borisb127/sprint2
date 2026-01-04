'use strict'

let gElCanvas
let gCtx


function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()

}


function renderMeme() {

    console.log('renderMeme called')

    // gCtx.fillStyle = 'lightgray'
    // gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)

    const elImg = new Image()
    elImg.src = 'meme-imgs/meme-imgs (square)/1.jpg'


    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.font = '40px Arial'
        gCtx.textAlign = 'center'
        gCtx.fillText('TEST', gElCanvas.width / 2, 50)

    }
}

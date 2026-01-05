'use strict'





/////////////////////////
// CANVAS
/////////////////////////

let gElCanvas
let gCtx

function initMemeController() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
}



/////////////////////////
// RENDER
/////////////////////////

function renderMeme() {
    console.log('renderMeme called')

    // gCtx.fillStyle = 'lightgray'
    // gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)

    const meme = getMeme()

    const elImg = new Image()
    elImg.src = `meme-imgs/meme-imgs (square)/${meme.selectedImgId}.jpg`


    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        gCtx.font = '40px Arial'
        gCtx.textAlign = 'center'
        gCtx.fillText(meme.txt, gElCanvas.width / 2, 50)
    }
}




/////////////////////////
// USER ACTIONS
/////////////////////////

function onSetLineTxt(txt) {
    console.log(txt)
    setLineTxt(txt)
    renderMeme()
}
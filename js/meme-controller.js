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

        gCtx.font = `${meme.lines[0].size}px Arial`
        gCtx.textAlign = 'center'
        gCtx.fillStyle = meme.lines[0].color
        gCtx.fillText(meme.lines[0].txt, gElCanvas.width / 2, 50)
        gCtx.fillText(meme.lines[1].txt, gElCanvas.width / 2, gElCanvas.height - 50)

    }
}




/////////////////////////
// USER ACTIONS
/////////////////////////


function onAddLine() {
    console.log('on add called')

    addLine()
    renderMeme()
}

function onSwitchLine() {
    console.log('on switch called')

    switchLine()
    renderMeme()
}

function onSetLineTxt(txt) {
    console.log('on set line called')

    console.log(txt)
    setLineTxt(txt)
    renderMeme()
}


function onSetColor(color) {
    console.log('on set color called')

    setColor(color)
    renderMeme()
}

function onChangeFontSize(diff) {
    console.log('on change font called')

    changeFontSize(diff)
    renderMeme()
}

function onDownloadMeme(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my_meme.jpg'
}


'use strict'





/////////////////////////
// CANVAS
/////////////////////////

var gElCanvas
var gCtx
var gIsMouseDown = false

function initMemeController() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    // resizeCanvas()
    renderMeme()
}


function resizeCanvas(img) {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
}


/////////////////////////
// RENDER
/////////////////////////

function renderMeme() {
    // console.log('renderMeme called')

    // gCtx.fillStyle = 'lightgray'
    // gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)

    const meme = getMeme()
    const imgData = getImgById(meme.selectedImgId)
    const elImg = new Image()
    elImg.src = imgData.url


    elImg.onload = () => {

        // resize canvas to match image aspect ratio
        resizeCanvas(elImg)

        // draw image to fill the CANVAS 
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        // all text lines + how many lines exist from the meme model
        const lines = meme.lines
        const linesCount = lines.length

        // loop once per line
        lines.forEach((line, idx) => {
            const fontSize = line.size

            // top+bottom space so text is not cut
            const topPadding = Math.max(20, fontSize)
            const bottomPadding = Math.max(20, fontSize)

            // the Y position where the text is drawn
            let textY

            if (linesCount === 1) { textY = topPadding }
            else {

                // how much vertical space we can use
                // example: 400 - 40 - 40 = 320
                const availableHeight = gElCanvas.height - topPadding - bottomPadding
                // distance between lines
                // 2 lines: 1 gap
                // 3 lines: 2 gaps
                // example (3 lines): 320 / 2 = 160
                const step = availableHeight / (linesCount - 1)
                // Y position for THIS line
                // idx = 0 - top
                // idx = 1 - middle
                // idx = 2 - bottom
                //
                // example:
                // topPadding = 40
                // step = 160
                // idx 0 → 40 + 0*160 = 40
                // idx 1 → 40 + 1*160 = 200
                // idx 2 → 40 + 2*160 = 360
                textY = topPadding + idx * step
            }


            gCtx.font = `${fontSize}px Arial`
            gCtx.textAlign = 'center'
            gCtx.textBaseline = 'middle'
            gCtx.fillStyle = line.color

            gCtx.fillText(line.txt, gElCanvas.width / 2, textY)


            const textWidth = gCtx.measureText(line.txt).width
            // console.log(textWidth)
            line.posX = gElCanvas.width / 2
            line.posY = textY
            line.width = textWidth
            line.height = fontSize


            // draw a frame when line selected
            if (idx === meme.selectedLineIdx) {


                // padding between text and frame border
                const framePaddingX = 20
                const framePaddingY = 10

                // X + Y position of the frame
                //
                // example:
                // canvas center = (400/2)200
                // textWidth = 180
                // (400/2) - (180 / 2) - 20 = 90
                //
                // FRAME START (90)
                // ↓
                // |  [ padding - (framePaddingX) ][  TEXT - (textWidth)  ][ padding ]  |
                //                                            ↑
                //                           center X (200) - (gElCanvas.width / 2)  
                const frameStartX = (gElCanvas.width / 2) - (textWidth / 2) - framePaddingX
                const frameStartY = textY - (fontSize / 2) - framePaddingY
                const frameWidth = textWidth + framePaddingX * 2
                const frameHeight = fontSize + framePaddingY * 2

                gCtx.strokeStyle = 'white'
                gCtx.lineWidth = 2

                gCtx.strokeRect(
                    frameStartX,
                    frameStartY,
                    frameWidth,
                    frameHeight
                )
            }
        })
    }
}




/////////////////////////
// USER ACTIONS
/////////////////////////


function onCanvasClick(ev) {
    // console.log(ev)

    const clickX = ev.offsetX
    const clickY = ev.offsetY

    const lineIdx = getClickedLineIdx(clickX, clickY)
    if (lineIdx === -1) return

    setSelectedLine(lineIdx)
    renderMeme()
    updateEditor()
}

function updateEditor() {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]

    console.log(line)

    document.querySelector('#line-txt').value = line.txt
    document.querySelector('#line-color').value = line.color
}



function getClickedLineIdx(x, y) {
    const meme = getMeme()

    for (let i = 0; i < meme.lines.length; i++) {
        const line = meme.lines[i]

        const left = line.posX - line.width / 2
        const right = line.posX + line.width / 2
        const top = line.posY - line.height / 2
        const bottom = line.posY + line.height / 2

        if (x >= left && x <= right && y >= top && y <= bottom) {
            return i
        }
    }

    return -1
}



function onAddLine() {
    console.log('on add called')

    addLine()
    renderMeme()
}

function onSwitchLine() {
    console.log('on switch called')

    switchLine()
    renderMeme()
    updateEditor()
}

function onSetLineTxt(txt) {
    console.log('on set line called')
    // console.log(txt)

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


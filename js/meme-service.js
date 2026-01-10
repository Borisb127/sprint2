'use strict'



/////////////////////////
// MODEL
/////////////////////////

var gMeme = {
    selectedImgId: 4,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'First Line',
            color: '#ffffff',
            size: 40,
            align: 'center',
            fontFamily: 'Arial',
            posY: null
        }
    ]
}

var gSavedMemes = []
var gEditingMemeId = null



/////////////////////////
// GETTERS
/////////////////////////

function getMeme() {
    return gMeme
}


function getSavedMemes() {
    return gSavedMemes
}

/////////////////////////
// SETTERS
/////////////////////////

function addLine() {
    gMeme.lines.push({
        txt: 'New Line',
        color: '#ffffff',
        size: 40,
        align: 'center',
        fontFamily: 'Arial',
        posY: null
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function setSelectedLine(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}



function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}


function changeFontSize(diff) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.size += diff
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function deleteLine() {
    if (gMeme.lines.length <= 1) return

    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = gMeme.lines.length - 1
    }
}


function setAlign(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
}

function moveLine(diff) {
    const line = gMeme.lines[gMeme.selectedLineIdx]

    if (line.posY === null) return
    line.posY += diff
}

// function setLinePosition(lineIdx, posY) {
//     gMeme.lines[lineIdx].posY = posY
// }


function setFontFamily(font) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = font
}


function saveMeme() {
    const canvas = document.querySelector('canvas')
    const imgData = canvas.toDataURL()

    if (gEditingMemeId) {
        // Update existing meme
        const idx = gSavedMemes.findIndex(meme => meme.id === gEditingMemeId)
        if (idx !== -1) {
            gSavedMemes[idx].img = imgData
            gSavedMemes[idx].meme = JSON.parse(JSON.stringify(gMeme))
        }
    } else {
        // Create new meme
        const savedMeme = {
            id: Date.now(),
            img: imgData,
            meme: JSON.parse(JSON.stringify(gMeme))
        }
        gSavedMemes.push(savedMeme)
    }



    saveToStorage('savedMemes', gSavedMemes)
}


function loadMeme(memeId) {
    const savedMeme = gSavedMemes.find(meme => meme.id === memeId)
    if (savedMeme) {
        gMeme = JSON.parse(JSON.stringify(savedMeme.meme))
        gEditingMemeId = memeId
    }
} s
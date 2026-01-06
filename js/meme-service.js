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
            size: 40
        }
    ]
}


/////////////////////////
// GETTERS
/////////////////////////

function getMeme() {
    return gMeme
}


/////////////////////////
// SETTERS
/////////////////////////

function addLine() {
    gMeme.lines.push({
        txt: 'Second Line',
        color: '#ffffff',
        size: 40
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
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
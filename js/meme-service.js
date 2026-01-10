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
            posY: null
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
        txt: 'New Line',
        color: '#ffffff',
        size: 40,
        align: 'center',
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

function setLinePosition(lineIdx, posY) {
    gMeme.lines[lineIdx].posY = posY
}
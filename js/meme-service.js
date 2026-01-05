'use strict'



/////////////////////////
// MODEL
/////////////////////////

var gMeme = {
    selectedImgId: 4,
    txt: 'TEST',
    color: '#ffffff',
    size: 40
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

function setLineTxt(txt) {
    gMeme.txt = txt
}


function setColor(color) {
    gMeme.color = color
}


function changeFontSize(diff) {
    gMeme.size += diff
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}
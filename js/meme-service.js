'use strict'



/////////////////////////
// MODEL
/////////////////////////

var gMeme = {
    selectedImgId: 4,
    txt: 'TEST'
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


function setImg(imgId) {
    gMeme.selectedImgId = imgId
}
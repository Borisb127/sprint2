'use strict'



/////////////////////////
// RENDER
/////////////////////////

function renderGallery() {
    const strHtml = `
        <img src="meme-imgs/meme-imgs (square)/1.jpg" width="150" onclick="onImgSelect(1)">
        <img src="meme-imgs/meme-imgs (square)/2.jpg" width="150" onclick="onImgSelect(2)">
        <img src="meme-imgs/meme-imgs (square)/3.jpg" width="150" onclick="onImgSelect(3)">
        <img src="meme-imgs/meme-imgs (square)/4.jpg" width="150" onclick="onImgSelect(4)">

    `
    document.querySelector('.gallery-section').innerHTML += strHtml

}



/////////////////////////
// USER ACTIONS
/////////////////////////


function onImgSelect(imgId) {
    setImg(imgId)

    // document.querySelector('.gallery-section').classList.add('hidden')
    // document.querySelector('.editor-section').classList.remove('hidden')

    renderMeme()
}
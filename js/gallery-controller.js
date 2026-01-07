'use strict'




/////////////////////////
// RENDER
/////////////////////////

function renderGallery() {
    const imgs = getImgs()

    const strHtml = imgs.map(img => `
        <img src="${img.url}" width="150" onclick="onImgSelect(${img.id})">
        `).join('')
    
    document.querySelector('.gallery-grid').innerHTML = strHtml

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
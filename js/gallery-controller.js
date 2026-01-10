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

    if (isCurrentLineEmpty()) return

    setImg(imgId)

    // document.querySelector('.gallery-section').classList.add('hidden')
    // document.querySelector('.editor-section').classList.remove('hidden')

    renderMeme()
}


function onShowGallery() {
    document.querySelector('.gallery-section').classList.remove('hidden')
    document.querySelector('.saved-section').classList.remove('active')

    document.querySelectorAll('.section-tabs h2').forEach(tab => {
        if (tab.textContent === 'Gallery') {
            tab.classList.add('active')
        } else if (tab.textContent === 'Saved') {
            tab.classList.remove('active')
        }
    })
}

function onShowSaved() {
    document.querySelector('.gallery-section').classList.add('hidden')
    document.querySelector('.saved-section').classList.add('active')

    document.querySelectorAll('.section-tabs h2').forEach(tab => {
        if (tab.textContent === 'Saved') {
            tab.classList.add('active')
        } else if (tab.textContent === 'Gallery') {
            tab.classList.remove('active')
        }
    })
}


function renderSavedMemes() {
    const savedMemes = getSavedMemes()

    const strHtml = savedMemes.map(meme => `
        <img src="${meme.img}" onclick="onSelectSavedMeme(${meme.id})">
    `).join('')

    document.querySelectorAll('.saved-grid').forEach(grid => {
        grid.innerHTML = strHtml
    })
}

function onSelectSavedMeme(memeId) {
    loadMeme(memeId)
    renderMeme()
    updateEditor()
}


function onUploadImg(ev) {
    const file = ev.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = function (e) {
        const imgUrl = e.target.result
        addUploadedImg(imgUrl)
        renderGallery()
    }
    reader.readAsDataURL(file)
}
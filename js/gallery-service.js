var gImgs = [
    { id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg', keywords: ['funny', 'trump', 'president'] },
    { id: 3, url: 'meme-imgs/meme-imgs (square)/3.jpg', keywords: ['cute', 'baby', 'dog'] },
    { id: 4, url: 'meme-imgs/meme-imgs (square)/4.jpg', keywords: ['cute', 'cat'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg', keywords: ['cute', 'dog'] },
    { id: 5, url: 'meme-imgs/meme-imgs (square)/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'meme-imgs/meme-imgs (square)/6.jpg', keywords: ['weird', 'aliens'] },
    { id: 7, url: 'meme-imgs/meme-imgs (square)/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'meme-imgs/meme-imgs (square)/8.jpg', keywords: ['old', 'movie'] },
    { id: 9, url: 'meme-imgs/meme-imgs (square)/9.jpg', keywords: ['ugly', 'kid'] },
    { id: 10, url: 'meme-imgs/meme-imgs (square)/10.jpg', keywords: ['laugh', 'president'] },
    { id: 11, url: 'meme-imgs/meme-imgs (square)/11.jpg', keywords: ['kiss', 'sports'] },
    { id: 12, url: 'meme-imgs/meme-imgs (square)/12.jpg', keywords: ['old', 'man'] },
    { id: 13, url: 'meme-imgs/meme-imgs (square)/13.jpg', keywords: ['famous', 'actor'] },
    { id: 14, url: 'meme-imgs/meme-imgs (square)/14.jpg', keywords: ['matrix', 'movie'] },
    { id: 15, url: 'meme-imgs/meme-imgs (square)/15.jpg', keywords: ['movie', 'boromir'] },
    { id: 16, url: 'meme-imgs/meme-imgs (square)/16.jpg', keywords: ['funny', 'picard'] },
    { id: 17, url: 'meme-imgs/meme-imgs (square)/17.jpg', keywords: ['president'] },
    { id: 18, url: 'meme-imgs/meme-imgs (square)/18.jpg', keywords: ['movie', 'kid'] },
    { id: 19, url: 'meme-imgs/meme-imgs (various aspect ratios)/004.jpg', keywords: ['cute', 'dog'] }

]







/////////////////////////
// GETTERS
/////////////////////////

function getImgs() {
    return gImgs
}


function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}



/////////////////////////
// SETTERS
/////////////////////////

function addUploadedImg(url) {
    const newId = gImgs.length + 1
    gImgs.unshift({
        id: newId,
        url: url,
        keywords: ['uploaded']
    })
}
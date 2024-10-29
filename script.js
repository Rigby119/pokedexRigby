function changeImg(move) {
    const img = document.getElementById("Imagen");
    let url = img.src;

    let num = parseInt(url.match(/(\d+)\.png$/)[1]);

    num = Math.max(1, Math.min(1025, num + move));
    
    num = num.toString().padStart(3, '0');
    img.src = url.replace(/(\d+)\.png$/, `${num}.png`);
}
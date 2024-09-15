document.getElementById('hoverChangeButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = getRandomColor();
});
document.getElementById('hoverChangeButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

document.getElementById('resizeButton').addEventListener('click', function() {
    let currentSize = this.style.transform;
    if (currentSize === 'scale(1.5)') {
        this.style.transform = 'scale(1)';
    } else {
        this.style.transform = 'scale(1.5)';
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('shakeButton').addEventListener('click', function() {
    let start = Date.now();
    let timer = setInterval(function() {
        document.body.style.marginLeft = (Math.random() * 20 - 10) + 'px';
        document.body.style.marginTop = (Math.random() * 20 - 10) + 'px';
        if (Date.now() - start > 500) {
            clearInterval(timer);
            document.body.style.marginLeft = '0';
            document.body.style.marginTop = '0';
        }
    }, 50);
});

document.getElementById('rotateImageButton').addEventListener('click', function() {
    let image = document.getElementById('imageToRotate');
    let currentRotation = image.style.transform.replace(/[^\d.]/g, '');
    let newRotation = (parseInt(currentRotation) || 0) + 90;
    image.style.transform = `rotate(${newRotation}deg)`;
});

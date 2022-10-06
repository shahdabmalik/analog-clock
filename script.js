setInterval(setClock, 100);

const hourHand = document.querySelector('.hour-hand'),
    minHand = document.querySelector('.min-hand'),
    secHand = document.querySelector('.sec-hand');

function setClock() {
    let currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    let hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secHand, secondsRatio)
    setRotation(minHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock();
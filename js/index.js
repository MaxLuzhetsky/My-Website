setInterval(function () {
    const clockContainer = document.querySelector('.menu-clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}, 1000);

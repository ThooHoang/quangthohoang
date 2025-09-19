
// Real Time Logic 

setInterval(updateTime,1000);

function updateTime () {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    timeElement.innerHTML = currentTime.toLocaleTimeString();
}


// Hamburger Menu Logic

const hamburgerMenu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu-links');
const closeBtn = document.querySelector('.close-btn');

hamburgerMenu.addEventListener('click', function () {
    menuLinks.classList.add('active');
})

closeBtn.addEventListener('click', function() {
    menuLinks.classList.remove('active')
})

document.addEventListener('click', function(e) {
    if (!hamburgerMenu.contains(e.target) && !menuLinks.contains(e.target)) {
        menuLinks.classList.remove('active');
    }
})





// Real Time Logic 

// setInterval(updateTime,1000);

// function updateTime () {
//     const timeElement = document.getElementById('time');
//     const currentTime = new Date();
//     timeElement.innerHTML = currentTime.toLocaleTimeString();
// }


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

// Typing Effect

const typingElement = document.getElementById('typing-effect');
const words = [
    "/ FRONTEND DEVELOPER",
    "/ WEB DESIGNER",
    "/ UX/UI DESIGNER"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function type() {
    const currentWord = words[wordIndex];
    let displayText = currentWord.substring(0, charIndex);

    typingElement.textContent = displayText;

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type,100);
    } else if (isDeleting && charIndex >0 ) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        if(!isDeleting) {
            isDeleting = true ;
            setTimeout(type, 1200)
        } else {
            isDeleting = false;
            wordIndex=(wordIndex+1) % words.length;
            setTimeout(type,400)
        }
    }

}

type()


// Quote Button
const quoteBtn = document.getElementById('quote-btn');
const heroQuote = document.getElementById('hero-quote');

quoteBtn.addEventListener('click', function() {
  if (heroQuote.style.display === "none" || heroQuote.style.display === "") {
    heroQuote.style.display = "block";
  } else {
    heroQuote.style.display = "none";
  }
});

// Text Animation
document.addEventListener('DOMContentLoaded', function() {
  const textEl = document.getElementById('text');
  if (!textEl) return;

  const highlightWords = ['inspire', 'connect'];
  const text = textEl.textContent;
  textEl.textContent = '';

  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (const word of highlightWords) {
      if (text.slice(i, i + word.length) === word) {
        for (let j = 0; j < word.length; j++) {
          const span = document.createElement('span');
          span.textContent = word[j];
          span.classList.add('highlight');
          textEl.appendChild(span);
        }
        i += word.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const span = document.createElement('span');
      span.textContent = text[i];
      textEl.appendChild(span);
      i++;
    }
  }

  const spans = textEl.querySelectorAll('span');

  window.addEventListener('scroll', () => {
    const rect = textEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visible = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
    const progress = visible * spans.length * 1.2;

    spans.forEach((span, idx) => {
      if (idx < progress) {
        span.style.opacity = 1;
      } else {
        span.style.opacity = 0.3;
      }
    });
  });
});

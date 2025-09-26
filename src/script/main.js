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

  const highlightWords = ['learning', 'curious'];
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

// Hover text content changing

const rows = document.querySelectorAll('.row');

const hoverText = {
  'HTML' : 'Clean & Semantic Structure',
  'CSS' : 'Pixel Perfect Designs from Figma',
  'JAVASCRIPT' : 'Dynamic Web Applications',
  'FIGMA' : 'Design Systems & Wireframes'
}

rows.forEach(row => {
  const title = row.querySelector('h1');
  const originalText = title.textContent;

  row.addEventListener('mouseenter', () => {
    title.textContent = hoverText[originalText] 
    title.style.fontSize = '1.5rem'
    title.style.fontWeight = '300'
    title.style.fontFamily ='var(--font-primary)'
  })

  row.addEventListener('mouseleave', () => {
    title.textContent = originalText
    title.style.fontSize = '4rem'
     title.style.fontWeight = '700'
     title.style.fontFamily ='var(--font-secondary)'
  } )
})




document.addEventListener('DOMContentLoaded', function() {
    const greetings = [
        'Hello!',
        'Hej!', 
        'Hola!',
        'Ahoj!',
        'Ciao!',
        'Guten Tag!',
        'Привет!',
        'こんにちは',
        'مرحبا',
        'Olá'
    ];

    let currentIndex = 0;
    const greetingElement = document.getElementById('greetingText');
    
    if (greetingElement) {
        greetingElement.textContent = greetings[currentIndex];
        function changeGreeting() {
            greetingElement.classList.add('fade-out');
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % greetings.length;
                greetingElement.textContent = greetings[currentIndex];
                greetingElement.classList.remove('fade-out');
            }, 250);
        }

        const greetingInterval = setInterval(changeGreeting, 1000);

        setTimeout(() => {
            const loadingContainer = document.querySelector('.loading-container');
            if (loadingContainer) {
                loadingContainer.style.transition = 'opacity 0.5s ease-out';
                loadingContainer.style.opacity = '0';
                
                setTimeout(() => {
                    loadingContainer.style.display = 'none';
                    clearInterval(greetingInterval); // Zastaví animáciu
                }, 500);
            }
        }, 3800);
    }
});



document.addEventListener('DOMContentLoaded', () => {

  (function enableAnimateOnScroll() {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll('.animate-on-scroll');
    console.debug('[animate] found elements:', elements.length);
    if (!elements || elements.length === 0) return;

    const animationClassPrefix = 'animate__'; 
    const animatedClass = 'animate__animated';


    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0 
    };

    const onIntersect = (entries, obs) => {
      entries.forEach(entry => {
        const el = entry.target;

        console.debug('[animate] entry', el.tagName, 'isIntersecting=', entry.isIntersecting, 'intersectionRatio=', entry.intersectionRatio);

        if (entry.isIntersecting) {
          const anim = el.dataset.animate || (animationClassPrefix + 'fadeInUp');

 
          el.classList.add(animatedClass, anim);

          el.style.opacity = '';


          obs.unobserve(el);
        }
      });
    };


    if (!('IntersectionObserver' in window)) {
      console.warn('[animate] IntersectionObserver not supported — running fallback');
      elements.forEach(el => {
        const anim = el.dataset.animate || (animationClassPrefix + 'fadeInUp');
        setTimeout(() => {
          el.classList.add(animatedClass, anim);
          el.style.opacity = '';
        }, 120);
      });
      return;
    }

    const io = new IntersectionObserver(onIntersect, observerOptions);

    elements.forEach(el => {
      el.style.opacity = '0';
      io.observe(el);
    });
  })();
});
// Smooth scroll to sections on clicking on their perspective links

let links = document.querySelectorAll("#nav-bar ul a");
 
for (let link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
    e.preventDefault();
    let href = this.getAttribute("href");
    var offsetTop = 0;
    
    if (window.innerWidth > 775) {
        offsetTop = document.querySelector(href).offsetTop - header.offsetHeight + 10;
    } else {
        offsetTop = document.querySelector(href).offsetTop - header.offsetHeight + 50;
    }
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

let connect = document.getElementById('connect-btn');

connect.addEventListener('click', (e) => {
    e.preventDefault();
    var offsetTop = 0;
    
    if (window.innerWidth > 775) {
        offsetTop = document.getElementById('contacts').offsetTop - header.offsetHeight + 10;
    } else {
        offsetTop = document.getElementById('contacts').offsetTop - header.offsetHeight + 50;
    }
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
})

/**************************************/

// Responsive nav-bar on mobile screens

let navSlide = () => {
    let menuBtn = document.getElementById('burger-btn');
    let nav = document.getElementById("nav-bar");

    menuBtn.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //burger animation
        menuBtn.classList.toggle('toggle')
    });

    for (let link of links) {
        link.addEventListener("click", () => {
            //toggle nav
            nav.classList.toggle('nav-active');
    
            //burger animation
            menuBtn.classList.toggle('toggle')
        });
    }
}

navSlide();

/**************************************/

// Loader fade-out animation after loading the page

let loader = document.querySelector(".loader-wrapper");

window.addEventListener('load', () => {
    loader.classList.add("fadeout");
})

/**************************************/

// Sticky effect of header on scroll

let header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

/**************************************/

// Add an animation to the about section

let about = document.getElementById("about");

document.addEventListener('scroll', function (e) {
    var top  = 0;

    if (window.innerWidth > 775) {
        top = window.pageYOffset + header.offsetHeight + 10;
    } else {
        top = window.pageYOffset + header.offsetHeight + 50;
    }

    var isVisible = top > about.offsetTop;

    if (isVisible) {
    about.classList.add('animate');
    }
});

/**************************************/

// Add slider for works section

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('items');

slide(slider, sliderItems);

function slide(wrapper, items) {
    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.getElementsByClassName('work'),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName('work')[0].offsetWidth,
        firstSlide = slides[0],
        lastSlide = slides[slidesLength - 1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;

    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add('loaded');

    // Mouse and Touch events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);


    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart (e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;
        
        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    function dragAction (e) {
        e = e || window.event;
        
        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd (e) {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag');
        } else {
            items.style.left = (posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
        items.classList.add('shifting');
        
        if (allowShift) {
            if (!action) { posInitial = items.offsetLeft; }

            if (dir == 1) {
                items.style.left = (posInitial - slideSize) + "px";
                index++;      
            } else if (dir == -1) {
                items.style.left = (posInitial + slideSize) + "px";
                index--;      
            }
        };
        
        allowShift = false;
    }
    
    function checkIndex (){
        items.classList.remove('shifting');

        if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + "px";
        index = slidesLength - 1;
        }

        if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + "px";
        index = 0;
        }
        
        allowShift = true;
    }
}

/**************************************/

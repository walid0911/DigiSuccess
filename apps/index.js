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
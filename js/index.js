
// THE NAVBAR MENU SECTION
// SHOW MENU SECTION
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    let nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// SCROLLS SELECTS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// SCROLL TO THE HOME SECTION
sr.reveal('.home-title', {});
sr.reveal('.home-scroll', {delay: 200});
sr.reveal('.home-img', {origin: 'right', delay: 400});

// SCROLL TO THE ABOUT US SECTION
sr.reveal('.about-img', {delay: 500});
sr.reveal('.about-subtitle', {delay: 300});
sr.reveal('.about-profession', {delay: 400});
sr.reveal('.about-text', {delay: 500});
sr.reveal('.about-social-icon', {delay: 600, interval: 200});

// SCROLL TO THE SKILLS SECTION
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-name', {distance: '20px', delay: 50, interval: 100});
sr.reveal('.skills-img', {delay: 400});

// SCROLL TO THE PORTFOLIO SECTION
sr.reveal('.portfolio-img', {interval: 200});

// SCROLL TO THE CONTACT SECTION
sr.reveal('.contact-subtitle', {});
sr.reveal('.contact-text', {interval: 200});
sr.reveal('.contact-input', {delay: 400});
sr.reveal('.contact-button', {delay: 600});



// COLORS SECTION
$(document).ready(function() {

    // SHARE ICON SECTION
    $('.share-icon .fa-share').click(function() {
        $('.share-icon ul').toggle();
    });


    // SCROLL TO TO SECTION
    $(window).scroll(function() {
        $('.color-panel, .share-icon ul').hide();

        if($(window).scrollTop() >= 200) {
            $('.scroll-icon').show();
        } else {
            $('.scroll-icon').hide();
        }
    });


    // THE COLORS THEME SECTION
    $('.theme-toggler').click(function() {
        $('.color-panel').toggle();
    });

    $('.color-panel ul li').click(function() {
        let color = $(this).css('background');
        $('.color').css('background', color);
    });

});


// AUTO TYPING TEXT SECTION
let typed = new Typed('.type', {
    strings: [
    'WELCOME TO MY WEBSITE', 
    'I AM A JR. FULLSTACK WEB DEVELOPER'
    ],

    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
});



// DOWNLOAD BUTTON FUNCTION
$(document).ready(function() {
    $('#cv-download').click(function(event) {
        event.preventDefault();
        // window.location.href = "DownloadCV.pdf";
        // window.location.href = "DownloadCV.docx";
        window.location.href = "My-curriculum-vitae.docx";
    })
});


// CONTACT FORM VALIDATION
function validate() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if (name.length < 3) {
        text = "Please Enter a valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Subject Must be more than 10 chars long";
        error_message.innerHTML = text;
        return false;
    }
    // if (isNaN(phone) || phone.length != 10) {
    //     text = "Please Enter a valid phone Number (10 Numbers)";
    //     error_message.innerHTML = text;
    //     return false;
    // }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter a valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 20) {
        text = "Text Field Must be More Than 20 Chars long";
        error_message.innerHTML = text;
        return false;
    }

    let finalText = "Thanks for submitting your Contacts!"
    error_message.innerHTML = finalText;
    return true;
}

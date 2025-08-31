
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

window.onscroll =function(){
  headerShadow()};
function headerShadow (){
  const navHeader = document.getElementById("header");
  if(document.body.scrollTop > 50|| document.documentElement.scrollTop>50){
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height ="70px";
    navHeader.style.lineHeight="70px";
  }else{
    navHeader.style.boxShadow = "none";
    navHeader.style.height ="90px";
     navHeader.style.lineHeight="90px";

  }
}
// typing effect
var typingEffect = new Typed (".typedText", { 
  strings: ["Designer","YouTube","Developer"] , 
   loop:true,
  typeSpeed:100,
  backSpeed:80,
  backDelay:2000
})

// scroll reveal animation
const sr= ScrollReveal({

  origin:'top' ,
  distance:'80px',
  duration:2000,
  reset:true
})
// home
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social_icons',{delay:200})
sr.reveal('.featured-image',{delay:300})
// project box
sr.reveal('.project-box',{setInterval:200})
// hedaing
sr.reveal('.top-header',{delay:200})

// about info
const srLeft= ScrollReveal({

  origin:'left' ,
  distance:'80px',
  duration:2000,
  reset:true
})
srLeft.reveal('.about-info',{delay:100})
srLeft.reveal('.contact-info',{delay:100})

// about skill

const srRight= ScrollReveal({

  origin:'right' ,
  distance:'80px',
  duration:2000,
  reset:true
})
srRight.reveal('.skills-box',{delay:100})
srRight.reveal('.form-control',{delay:100})

// change active link
const sections=document.querySelectorAll('section[id]')
 function scrollActive() {
  const scrollY= window.scrollY;

  sections.forEach(current =>{
    const sectionHeight=current.offsetHeight,
    sectionTop =current.offsetTop-50,
    sectionId= current.getAttribute('id');
    if(scrollY>sectionTop && scrollY <=sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*='+sectionId+']').classList.add('active-link')
    }
    else{
       document.querySelector('.nav-menu a[href*='+sectionId+']').classList.remove('active-link')
    }
  })
 }
 window.addEventListener('scroll',scrollActive);

//  const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute('id');

//     const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       navLink.classList.add('active-link');
//     } else {
//       navLink.classList.remove('active-link');
//     }
//   });
// }

// window.addEventListener('scroll', scrollActive);
















































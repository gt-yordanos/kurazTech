document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector("nav");
  const scroller = document.querySelector(".scroll");
  const menuIcon = document.getElementById('hamburger-menu');
  const closeIcon = document.getElementById('close-menu');
  const navList = document.querySelector('.nav-list');
  const navLeft = document.querySelector('.nav-left')


  window.addEventListener("scroll", function() {
    nav.classList.toggle("sticky", window.scrollY > 60);
  });

  menuIcon.addEventListener('click', () => {
    if (window.innerWidth <= 700) {
      navList.style.top = "105px"; 
  } else {
      navLeft.style.right ="30px"
  }
  
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
     
    if (window.innerWidth <= 700) {
      navList.style.top = "-1000px"; 
  } else {
      navLeft.style.right ="-1000px"
  }
  });

});

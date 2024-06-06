const mobileNav = () => {
   const headerBtn = document.querySelector('.header__bars');
   const mobileNav = document.querySelector('.mobile-nav');
   const mobileLinks = document.querySelectorAll('.mobile-nav__link');
   
   //State
   let isMobileNavOpen = false;

   headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
     mobileNav.computedStyleMap.display = 'flex';
     document.body.style.oveerflowY = 'hidden';
    } else {
        mobileNav.computedStyleMap.display = 'none';
        document.body.style.oveerflowY = 'auto';
    }
   });
};

export default mobileNav;
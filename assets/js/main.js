
// Custom Navbar Toggle 
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const navEl       = document.querySelector('nav');
  const body       = document.querySelector('body');
 
  // ── Toggle mobile menu ──
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    const opening = !mobileMenu.classList.contains('open');
    navEl.classList.toggle('menu-open', opening);
    if(navEl.classList.contains('absolute')){
       navEl.classList.add('fixed');
       navEl.classList.remove('absolute');
       body.classList.add('overflow-hidden');
    }else{
      navEl.classList.add('absolute');
      navEl.classList.remove('fixed');
       body.classList.remove('overflow-hidden');
    }
    
    if (!opening) {
      mobileMenu.style.transform = 'translateX(100%)';
      setTimeout(() => mobileMenu.classList.remove('open'), 350);
    } else {
      mobileMenu.classList.add('open');
      requestAnimationFrame(() => mobileMenu.style.transform = 'translateX(0)');
    }
  });
 
  // ── Desktop dropdowns ──
  // function setupDesktopDrop(btnId, menuId) {
  //   const btn  = document.getElementById(btnId);
  //   const menu = document.getElementById(menuId);
  //   if (!btn || !menu || !btn.parentElement) return;
  //   let timer;
 
  //   const open  = () => { btn.classList.add('open'); menu.classList.add('open'); btn.setAttribute('aria-expanded','true'); };
  //   const close = () => { btn.classList.remove('open'); menu.classList.remove('open'); btn.setAttribute('aria-expanded','false'); };
 
  //   btn.parentElement.addEventListener('mouseenter', () => { clearTimeout(timer); open(); });
  //   btn.parentElement.addEventListener('mouseleave', () => { timer = setTimeout(close, 150); });
  //   btn.addEventListener('click', () => menu.classList.contains('open') ? close() : open());
  // }
  // setupDesktopDrop('dropProducts',  'menuProducts');
  // setupDesktopDrop('dropSolutions', 'menuSolutions');
  // setupDesktopDrop('dropResources', 'menuResources');
 
  // // Close desktop drops on outside click
  // document.addEventListener('click', e => {
  //   document.querySelectorAll('.drop-btn').forEach(btn => {
  //     if (!btn.parentElement.contains(e.target)) {
  //       btn.classList.remove('open');
  //       document.getElementById(btn.id.replace('drop','menu')).classList.remove('open');
  //       btn.setAttribute('aria-expanded','false');
  //     }
  //   });
  // });
 
  // // ── Mobile dropdowns ──
  // function setupMobileDrop(btnId, menuId) {
  //   const btn  = document.getElementById(btnId);
  //   const menu = document.getElementById(menuId);
  //   const chev = btn.querySelector('.chevron');
 
  //   btn.addEventListener('click', () => {
  //     const isOpen = menu.classList.contains('open');
  //     // Close all
  //     document.querySelectorAll('.mobile-dropdown.open').forEach(m => m.classList.remove('open'));
  //     document.querySelectorAll('#mobileMenu .mobile-link .chevron').forEach(c => c.style.transform = '');
  //     if (!isOpen) {
  //       menu.classList.add('open');
  //       chev.style.transform = 'rotate(180deg)';
  //     }
  //   });
  // }
  // setupMobileDrop('mobileDropProducts',  'mobileMenuProducts');
  // setupMobileDrop('mobileDropSolutions', 'mobileMenuSolutions');
  // setupMobileDrop('mobileDropResources', 'mobileMenuResources');
 
  // ── Scroll: fixed → absolute after 40px ──
  // window.addEventListener('scroll', () => {
  //   navEl.classList.toggle('scrolled', window.scrollY > 100);
  // }, { passive: true });
// Custom Navbar Toggle



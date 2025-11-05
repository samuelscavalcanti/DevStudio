// ====== Interações e Acessibilidade (injetado pela revisão) ======

// IntersectionObserver para .reveal
(function(){
  const els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(el=> el.classList.add('reveal-visible'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('reveal-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();

// Mobile menu (se existir um .nav-toggle e .nav-menu)
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if(!toggle || !menu) return;
  toggle.addEventListener('click', ()=>{
    menu.classList.toggle('is-open');
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', String(!expanded));
  });
})();

// Suaviza âncoras internas respeitando prefers-reduced-motion
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) return;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();


// ====== Animações Avançadas (portfólio) ======

// Hero auto-apparition
(function(){
  const hero = document.querySelector('.hero, .hero-appear');
  if(!hero) return;
  hero.classList.add('hero-appear');
})();

// Stagger (auto em grupos com .stagger)
(function(){
  const groups = document.querySelectorAll('.stagger');
  if(groups.length === 0) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('stagger-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .2 });
  groups.forEach(g=> io.observe(g));
})();

// Tilt em cards (.card.tilt) - efeito 3D sutil
(function(){
  const cards = document.querySelectorAll('.card, .portfolio-item, .project-card');
  if(cards.length === 0) return;
  cards.forEach(c=> c.classList.add('tilt'));
  const maxTilt = 8;
  function handleMove(e){
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = (e.clientX - cx) / (rect.width/2);
    const dy = (e.clientY - cy) / (rect.height/2);
    const rx = (-dy * maxTilt).toFixed(2);
    const ry = (dx * maxTilt).toFixed(2);
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function reset(e){ e.currentTarget.style.transform = ''; }
  cards.forEach(el=>{
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);
  });
})();

// Parallax suave para seções com .parallax/.hero/.banner
(function(){
  const els = Array.from(document.querySelectorAll('.parallax, .hero, .banner'));
  if(els.length === 0) return;
  const onScroll = ()=>{
    const y = window.scrollY;
    els.forEach(el=>{
      const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.25');
      const inner = el.querySelector('.parallax-media, img, picture, .hero-media');
      if(!inner) return;
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + window.scrollY) * speed;
      inner.style.transform = `translateY(${(y - offset) * speed}px)`;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Underline anim em títulos com .underline-anim
(function(){
  const titles = document.querySelectorAll('.underline-anim, h2.section-title, h3.section-title');
  if(titles.length === 0) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .3 });
  titles.forEach(t=> io.observe(t));
})();

// Botões glow (auto aplica classe)
(function(){
  document.querySelectorAll('a.button, a.btn, .button, .btn, button').forEach(b=>{
    b.classList.add('btn-glow');
  });
})();

// Page transitions (fade entre páginas internas)
(function(){
  document.body.classList.add('page-enter');
  requestAnimationFrame(()=>{
    document.body.classList.add('page-enter-active');
  });

  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    const href = a.getAttribute('href');
    if(!href || href.startsWith('#') || a.target === '_blank' || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    // Trata como navegação interna
    e.preventDefault();
    document.body.classList.add('page-leave');
    requestAnimationFrame(()=>{
      document.body.classList.add('page-leave-active');
      setTimeout(()=>{ window.location.href = href; }, 280);
    });
  });
})();



// ===== Fall-in page transition =====
(function(){
  document.body.classList.add('page-enter');
  requestAnimationFrame(()=>{
    document.body.classList.add('page-enter-active');
  });
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    const href = a.getAttribute('href');
    if(!href || href.startsWith('#') || a.target==='_blank' || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    e.preventDefault();
    document.body.classList.add('page-leave');
    requestAnimationFrame(()=> document.body.classList.add('page-leave-active'));
    setTimeout(()=> window.location.href = href, 300);
  });
})();

// Aplica animação de queda a itens visuais (cards, seções)
(function(){
  const items = document.querySelectorAll('section, article, .card, .card-glass, .skill, h1, h2, h3, p');
  let delay = 0;
  items.forEach(el=>{
    el.classList.add('fall-item');
    el.style.animationDelay = (delay/1000)+'s';
    delay += 60;
  });
})();

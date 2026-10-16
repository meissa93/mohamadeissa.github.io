(function(){
  const root=document.documentElement;
  const saved=(()=>{try{return localStorage.getItem('theme')}catch(e){return null}})();
  root.setAttribute('data-theme',saved==='light'||saved==='dark'?saved:'dark');
  document.addEventListener('DOMContentLoaded',()=>{
    const t=document.getElementById('theme-toggle');
    const setIcon=()=>t.textContent=root.getAttribute('data-theme')==='dark'?'☀':'☾';
    setIcon();
    t.onclick=()=>{const n=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){};setIcon();};
    const m=document.getElementById('menu-toggle');
    m.onclick=()=>document.querySelector('.menu').classList.toggle('open');
    document.querySelectorAll('[data-abs]').forEach(b=>b.onclick=()=>b.closest('.pub').querySelector('.abstract').classList.toggle('open'));
    document.querySelectorAll('.dd-btn').forEach(b=>b.onclick=e=>{e.stopPropagation();const li=b.parentElement;const o=li.classList.contains('open');document.querySelectorAll('.dd').forEach(d=>d.classList.remove('open'));if(!o)li.classList.add('open');});
    document.addEventListener('click',()=>document.querySelectorAll('.dd').forEach(d=>d.classList.remove('open')));
    document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>{const t=b.getAttribute('data-copy');(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>{b.textContent='Copied ✓';setTimeout(()=>b.textContent='Copy',1600)}).catch(()=>{window.prompt('Copy this address:',t)});});
    document.querySelectorAll('[data-logo]').forEach(el=>{const slug=el.getAttribute('data-logo');const ex=['png','jpg','webp','svg'];const tryN=i=>{if(i>=ex.length)return;const im=new Image();im.className='vlogo';im.alt='';im.onload=()=>{el.classList.add('has-logo');el.prepend(im)};im.onerror=()=>tryN(i+1);im.src='assets/img/venues/'+slug+'.'+ex[i]};tryN(0);});
    document.querySelectorAll('.menu a, .lead a.lead-org, a.gust').forEach(a=>{const i=document.createElement('i');i.className='st';i.setAttribute('aria-hidden','true');a.appendChild(i)});
    /* ===== Logo hover card — EDIT THE TEXT HERE (applies to every page) ===== */
    const KCARD_TITLE='Von Kármán vortex street';
    const KCARD_TEXT=[
      'Seen from above, wind hits a square tower and splits around it. The flow peels off the two sharp corners and rolls up into vortices that shed <b>alternately</b>, one side then the other, forming a staggered trail downstream.',
      'Each shed vortex gives the tower a sideways push, first one way, then the other. If that rhythm matches the structure’s natural frequency, the tower can sway strongly across the wind (vortex-induced resonance)—something wind engineers design tall, slender structures against.',
      'For lattice towers, full-scale measurements have revealed the presence of a vortex-shedding mechanism that drives excessive across-wind vibrations in both ABL and downburst flow fields—an effect current design guidelines do not yet account for. The details are coming in <a class="gust" href="research.html#lattice-towers">Full-Scale Response of Lattice Towers under ABL and Downburst Winds</a>.'
    ];
    /* ======================================================================= */
    const brand=document.querySelector('.brand');const lg=brand&&brand.querySelector('svg.logo');
    if(lg){const big=lg.cloneNode(true);big.setAttribute('class','logo kbig');big.innerHTML=big.innerHTML.replace(/lgclip/g,'lgclip2');
      const c=document.createElement('div');c.className='kcard';c.id='kcard';c.setAttribute('role','tooltip');
      c.innerHTML='<div class="kc-fig"></div><div class="kc-t">'+KCARD_TITLE+'</div>'+KCARD_TEXT.map(t=>'<p>'+t+'</p>').join('');
      c.querySelector('.kc-fig').appendChild(big);brand.insertAdjacentElement('afterend',c);}
    /* "what's this?" hint under the logo: Home page only, all screen sizes; hides once the card has been seen, back on refresh. Tap/click it to open the card (touch screens). */
    const isHome=/(^|\/)(index\.html)?$/.test(location.pathname);
    if(brand&&lg&&isHome){const card=document.getElementById('kcard');const h=document.createElement('button');h.type='button';h.className='khint';h.setAttribute('aria-controls','kcard');h.setAttribute('aria-label','What is this logo?');
      h.innerHTML='<svg viewBox="0 0 26 18" aria-hidden="true"><path d="M22 16C14 15 7 11 4 3M4 3l-1 6M4 3l6 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>what’s this?';
      brand.parentElement.appendChild(h);
      const seen=()=>{if(h.classList.contains('gone'))return;h.classList.add('gone');setTimeout(()=>h.classList.add('hidden'),450)};
      h.addEventListener('click',e=>{e.stopPropagation();card.classList.toggle('open');seen()});
      brand.addEventListener('mouseenter',()=>setTimeout(seen,600));brand.addEventListener('focus',seen);
      /* also hide while the page is scrolled past the "Hey, I'm Mohamad" heading; shows again when scrolled back up */
      const hero=document.querySelector('main h1');
      if(hero){const hdr=document.querySelector('header');const chk=()=>{const off=hero.getBoundingClientRect().bottom<(hdr?hdr.getBoundingClientRect().bottom:0);h.classList.toggle('away',off)};
        window.addEventListener('scroll',chk,{passive:true});window.addEventListener('resize',chk);chk();}
      document.addEventListener('click',e=>{if(!card.contains(e.target))card.classList.remove('open')});
      document.addEventListener('keydown',e=>{if(e.key==='Escape')card.classList.remove('open')});}
    const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  });
})();

/* Abstract pop-out cards (news) */
document.addEventListener('DOMContentLoaded',()=>{
  let last=null;
  const close=m=>{m.hidden=true;document.body.style.overflow='';if(last)last.focus();};
  document.querySelectorAll('[data-modal]').forEach(b=>b.addEventListener('click',()=>{const m=document.getElementById('modal-'+b.dataset.modal);if(!m)return;last=b;m.hidden=false;document.body.style.overflow='hidden';m.querySelector('.modal-x').focus();}));
  document.querySelectorAll('.modal').forEach(m=>{m.addEventListener('click',e=>{if(e.target===m||e.target.closest('.modal-x'))close(m)});});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal:not([hidden])').forEach(close)});
});

/* Hide the grid line directly under the glowing Ph.D. news card */
document.addEventListener('DOMContentLoaded',()=>{
  const fix=()=>document.querySelectorAll('.news-grid').forEach(g=>{
    const items=[...g.children]; items.forEach(i=>i.classList.remove('no-top'));
    const k=items.findIndex(i=>i.classList.contains('phd-glow')); if(k<0) return;
    const cols=getComputedStyle(g).gridTemplateColumns.split(' ').filter(Boolean).length||1;
    const below=items[k+cols]; if(below) below.classList.add('no-top');
  });
  fix(); window.addEventListener('resize',fix);
});

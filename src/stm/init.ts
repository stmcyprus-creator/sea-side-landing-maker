// @ts-nocheck
export function initStm() {

  const header = document.getElementById('header');
  const heroEl = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    if(heroEl){
      const y = window.scrollY;
      const rate = Math.min(y * 0.18, 60);
      heroEl.style.setProperty('--hero-parallax', `${rate}px`);
    }
  }, { passive: true });

  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    header.classList.toggle('scrolled', mobileMenu.classList.contains('open') || window.scrollY > 40);
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burgerBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
  }));

  const revealEls = document.querySelectorAll('.reveal');

  // каскадная задержка для карточек внутри сеток
  const staggerContainers = document.querySelectorAll('.why-grid, .catalog-grid, .budget-grid, .process-scroll, .types-grid, .proof-grid');
  staggerContainers.forEach(container => {
    [...container.children].forEach((child, i) => {
      child.classList.add('stagger-item');
      child.style.transitionDelay = `${i * 90}ms`;
    });
  });
  // элементы trust уже являются .reveal — просто выставляем каскадную задержку
  document.querySelectorAll('.trust > .reveal').forEach((child, i) => {
    child.style.transitionDelay = `${i * 100}ms`;
  });

  function animateCount(el){
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if(isNaN(target)) return;
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(target * eased);
      el.innerHTML = value + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        e.target.querySelectorAll('.stagger-item').forEach(el => el.classList.add('in'));
        const counters = e.target.querySelectorAll('[data-count]');
        counters.forEach(animateCount);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---- sticky cta ---- */
  const stickyCta = document.getElementById('stickyCta');
  window.addEventListener('scroll', () => {
    const past = window.scrollY > heroEl.offsetHeight * 0.8;
    stickyCta.classList.toggle('show', past);
  });

  /* ---- interactive map ---- */
  const mapData = {
    alanya:  { coord:'36.5389° N · 31.9950° E', name:'Аланья', text:'Зрелый прибрежный рынок с международной средой и стабильным спросом на аренду.',
      facts:['Международные школы и клиники в шаговой доступности','Марина и набережная — 10–15 минут от большинства комплексов','Понятный путь к оформлению ВНЖ'] },
    mersin:  { coord:'36.8000° N · 34.6333° E', name:'Мерсин', text:'Растущее побережье на ранней стадии — доступный вход и потенциал роста цены.',
      facts:['Новые комплексы с современной инфраструктурой','Более низкий порог входа','Развивающийся порт и деловая среда'] },
    cyprus:  { coord:'35.3364° N · 33.3192° E', name:'Северный Кипр', text:'Спокойный островной рынок с университетской средой и курортной арендой.',
      facts:['Мягкий климат круглый год','Университетский город рядом — стабильный спрос на аренду','Более приватная застройка'] }
  };
  const htmlPins = document.querySelectorAll('.html-pin');
  const mapInfo = document.getElementById('mapInfo');

  htmlPins.forEach(pin => {
    pin.addEventListener('click', () => {
      htmlPins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');
      const d = mapData[pin.dataset.loc];
      mapInfo.innerHTML = `
        <div class="coord">${d.coord}</div>
        <h4 class="serif">${d.name}</h4>
        <p>${d.text}</p>
        <div class="map-facts">
          ${d.facts.map(f => `<div class="map-fact">${f}</div>`).join('')}
        </div>`;
    });
  });

  /* ---- catalog filters ---- */
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.catalog-card');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const f = chip.dataset.filter;
      cards.forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.category !== f);
      });
    });
  });

  /* ---- quiz ---- */
  const quizAnswers = {};
  const steps = document.querySelectorAll('.quiz-step');
  const quizBar = document.getElementById('quizBar');
  const quizBack = document.getElementById('quizBack');
  const quizDots = document.getElementById('quizDots');
  let current = 0;

  steps.forEach((_, i) => {
    const dot = document.createElement('span');
    if(i === 0) dot.classList.add('active');
    quizDots.appendChild(dot);
  });

  function renderQuiz(){
    steps.forEach(s => s.classList.toggle('active', +s.dataset.step === current));
    quizBar.style.width = `${((current+1)/steps.length)*100}%`;
    quizBack.style.visibility = current === 0 ? 'hidden' : 'visible';
    [...quizDots.children].forEach((d,i) => d.classList.toggle('active', i === current));
  }

  document.querySelectorAll('.quiz-step .option-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = btn.closest('.quiz-step');
      step.querySelectorAll('.option-card').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizAnswers[step.dataset.step] = btn.dataset.value;
      setTimeout(() => {
        if(current < steps.length - 1){ current++; renderQuiz(); }
      }, 260);
    });
  });

  quizBack.addEventListener('click', () => {
    if(current > 0){ current--; renderQuiz(); }
  });

  document.getElementById('quizSubmit').addEventListener('click', () => {
    const contact = document.getElementById('quizContact').value.trim();
    if(!contact){ document.getElementById('quizContact').focus(); return; }
    const consent = document.getElementById('consentCheck');
    if(!consent.checked){
      consent.parentElement.style.color = '#D4845A';
      consent.focus();
      return;
    }
    const btn = document.getElementById('quizSubmit');
  const message = `Здравствуйте! Хочу получить подборку недвижимости.%0AЦель: ${encodeURIComponent(quizAnswers[0] || 'не указана')}%0AБюджет: ${encodeURIComponent(quizAnswers[1] || 'не указан')}%0ALокация: ${encodeURIComponent(quizAnswers[2] || 'не указана')}%0AКонтакт: ${encodeURIComponent(contact)}`;
  window.open(`https://wa.me/79036995070?text=${message}`, '_blank', 'noopener');
  btn.textContent = 'Подборка готовится — продолжите в WhatsApp';
  btn.style.pointerEvents = 'none';
  });

  /* ---- cookie banner ---- */
  const cookieBanner = document.getElementById('cookieBanner');
  if(!localStorage.getItem('stm_cookies_accepted')){
    setTimeout(() => cookieBanner.classList.add('show'), 1200);
  }
  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('stm_cookies_accepted', '1');
    cookieBanner.classList.remove('show');
  });

  /* ---- parallax: фото статично, фон и текст двигаются ---- */
  const bands = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  bands.forEach((band) => {
    const bg = band.querySelector<HTMLElement>('.pb-bg');
    if(bg) bg.style.transform = 'none';
  });
  const locations = Array.from(document.querySelectorAll<HTMLElement>('.location'));
  // в локациях фото остаётся статичным: двигаем подложку и текст внутри копии
  locations.forEach((loc) => {
    const copy = loc.querySelector<HTMLElement>('.location-copy');
    if(!copy || copy.querySelector('.location-shift')) return;
    const veil = document.createElement('div');
    veil.className = 'location-veil';
    const shiftEl = document.createElement('div');
    shiftEl.className = 'location-shift';
    while(copy.firstChild) shiftEl.appendChild(copy.firstChild);
    copy.appendChild(veil);
    copy.appendChild(shiftEl);
  });

  const shift = (el: HTMLElement | null, host: HTMLElement, amount: number) => {
    if(!el) return;
    const r = host.getBoundingClientRect();
    if(r.bottom < -200 || r.top > window.innerHeight + 200) return;
    const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
    el.style.transform = `translate3d(0, ${(0.5 - progress) * amount}px, 0)`;
  };

  const moveBands = () => {
    bands.forEach((band) => {
      shift(band.querySelector<HTMLElement>('.pb-inner'), band, 110);
      shift(band.querySelector<HTMLElement>('.pb-veil'), band, 60);
    });
    locations.forEach((loc) => {
      shift(loc.querySelector<HTMLElement>('.location-shift'), loc, 70);
      shift(loc.querySelector<HTMLElement>('.location-veil'), loc, 120);
    });
  };
  moveBands();
  window.addEventListener('scroll', moveBands, { passive: true });
  window.addEventListener('resize', moveBands);

  /* ---- privacy modal close on backdrop ---- */
  document.getElementById('privacyModal').addEventListener('click', (e) => {
    if(e.target === e.currentTarget) e.target.style.display = 'none';
  });

}

import { cards } from './cards.js';

const app = document.querySelector('#app');
const socialLinks = [
  { label: 'فيسبوك', href: 'https://www.facebook.com/share/1DXohQ5CNF/', mark: 'f' },
  { label: 'تيك توك', href: 'https://tiktok.com/@sabet_awareness', mark: '♪' }
];

const logo = '<img class="brand-logo" src="/manus-storage/sabet-logo_ceb55bed.png" alt="شعار حملة ثابت" />';

function header() {
  const active = window.location.pathname;
  return `
    <header class="site-header">
      <a class="brand-lockup" href="/" aria-label="ثابت — الصفحة الرئيسية">
        ${logo}
        <span class="brand-copy"><strong>ثابت</strong><small>ثابت على صحتك، ثابت على مستقبلك</small></span>
      </a>
      <nav class="main-nav" aria-label="التنقل الرئيسي">
        <a href="/" ${active === '/' ? 'aria-current="page"' : ''}>الرئيسية</a>
        <a href="/about" ${active === '/about' ? 'aria-current="page"' : ''}>عن الحملة</a>
        <a href="/cards" ${active === '/cards' ? 'aria-current="page"' : ''}>البطاقات</a>
      </nav>
      <a class="header-cta" href="/cards">ابدأ التحدي <span aria-hidden="true">←</span></a>
      <button class="menu-toggle" type="button" aria-label="فتح القائمة" aria-expanded="false"><span></span><span></span></button>
    </header>`;
}

function socialFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-brand">${logo}<div><b>ثابت على صحتك، ثابت على مستقبلك</b><span>خليك ثابت.</span></div></div>
      <p>المعلومة الواضحة أول خطوة لقرار واعي.</p>
      <div class="social-links" aria-label="تابع الحملة">
        ${socialLinks.map(link => `<a href="${link.href}" target="_blank" rel="noreferrer" aria-label="تابعنا على ${link.label}"><span aria-hidden="true">${link.mark}</span>${link.label}</a>`).join('')}
      </div>
    </footer>`;
}

function homePage() {
  return `
    <main class="page page-home">
      <section class="hero section-wrap">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-dot"></span> حملة توعوية للشباب</div>
          <h1>خليك <em>ثابت.</em><br />اختار وأنت <span class="text-highlight">فاهم</span></h1>
          <p class="hero-lead">مش كل اللي بنسمعه حقيقة. شوف الصورة كاملة عن التدخين والفيب والمخدرات التخليقية، وخد قرارك بوعي.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="/cards">ابدأ البطاقات <span aria-hidden="true">←</span></a>
            <a class="button button-secondary" href="/about">احكيلي عن ثابت</a>
          </div>
          <div class="hero-footnote"><span class="footnote-line"></span> معلومة واحدة ممكن تفرق.</div>
        </div>
        <div class="hero-art" aria-label="شعار الحملة">
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="hero-logo-panel">${logo}<div class="panel-slogan">ثابت على صحتك<br /><strong>ثابت على مستقبلك</strong></div></div>
          <span class="art-index">01 <i>/</i> 03</span>
          <span class="art-caption">الوعي مش مجرد معلومة.<br />الوعي قرار.</span>
          <span class="floating-tag tag-orange">وعي</span><span class="floating-tag tag-blue">اختيارك</span>
        </div>
      </section>

      <section class="promise-strip" aria-label="رسالة الحملة">
        <span class="strip-mark">ث</span><p>مش مطلوب تكون مثالي… <strong>المطلوب تكون فاهم.</strong></p><span class="strip-spark" aria-hidden="true">✳</span>
      </section>

      <section class="pillars section-wrap" aria-labelledby="pillars-title">
        <div class="section-heading">
          <div><span class="section-kicker">الصورة كاملة</span><h2 id="pillars-title">افهم. اسأل. <em>اختار.</em></h2></div>
          <p>معلومات واضحة تساعدك تشوف التأثير الحقيقي بعيدًا عن الشائعات.</p>
        </div>
        <div class="pillar-list">
          <article class="pillar"><span class="pillar-number">01</span><span class="pillar-icon icon-smoke" aria-hidden="true">〰</span><div><h3>التدخين</h3><p>مش تأثيره على الرئتين بس. افهم أثره على صحتك وجسمك.</p></div><span class="pillar-arrow">↙</span></article>
          <article class="pillar"><span class="pillar-number">02</span><span class="pillar-icon icon-vape" aria-hidden="true">◉</span><div><h3>الفيب</h3><p>النكهة الحلوة مش معناها إن المنتج آمن.</p></div><span class="pillar-arrow">↙</span></article>
          <article class="pillar"><span class="pillar-number">03</span><span class="pillar-icon icon-awareness" aria-hidden="true">✳</span><div><h3>المخدرات التخليقية</h3><p>المظهر مش كفاية تعرف بيه مكونات مادة أو خطورتها.</p></div><span class="pillar-arrow">↙</span></article>
        </div>
      </section>

      <section class="quiz-invite section-wrap">
        <div class="invite-stamp">١٥<br /><small>بطاقة</small></div>
        <div><span class="section-kicker">دورك تعرف أكتر</span><h2>جاهز تختبر <em>معلوماتك؟</em></h2><p>اختار إجابتك، أكّدها، وشوف المعلومة من الناحية التانية.</p></div>
        <a class="button button-dark" href="/cards">يلا نبدأ <span aria-hidden="true">←</span></a>
        <span class="invite-swoosh" aria-hidden="true">↗</span>
      </section>

      <section class="message-section section-wrap">
        <div class="message-mark">“</div><div><span class="section-kicker">رسالة قبل ما تبدأ</span><h2>مستقبلك يستاهل<br /><em>إنك تكون واعي.</em></h2><p>كل معلومة بتتعلمها ممكن تكون خطوة لحماية نفسك وشخص بتحبه.</p></div><a class="text-link" href="/about">اعرف حكاية ثابت <span>←</span></a>
      </section>
    </main>`;
}

function aboutPage() {
  return `
    <main class="page page-about section-wrap">
      <div class="page-intro"><span class="section-kicker">عن الحملة</span><h1>إيه حكاية <em>ثابت؟</em></h1><p>مساحة توعوية تساعدك تشوف الصورة كاملة.</p></div>
      <article class="about-card">
        <div class="about-card-heading"><span class="about-seal">ث</span><span>01 / الفكرة</span><span class="about-rule"></span></div>
        <div class="about-text">
          <h2>إيه حكاية ثابت؟</h2>
          <p>مش مجرد حملة بتقولك إيه الصح وإيه الغلط… «ثابت» مساحة توعوية بتساعدك تشوف الصورة كاملة، وتفهم التأثيرات الحقيقية للتدخين والسجائر الإلكترونية والمخدرات التخليقية، وتتعرف على المعلومات العلمية بعيدًا عن الشائعات والمفاهيم المغلوطة.</p>
          <p>لأن الوعي مش مجرد إنك تعرف المعلومة… الوعي إنك تقدر تاخد قرارك وأنت فاهم.</p>
        </div>
      </article>
      <article class="about-message">
        <div class="message-label"><span class="section-kicker">رسالة قبل ما تبدأ</span><span class="message-number">02</span></div>
        <div class="message-body"><h2>مستقبلك يستاهل<br /><em>إنك تكون واعي.</em></h2><p>مش مطلوب منك تكون مثالي… المطلوب تكون فاهم.<br />كل معلومة بتتعلمها ممكن تكون خطوة لحماية نفسك وشخص بتحبه.</p><b>خليك ثابت.</b></div>
        <span class="message-star" aria-hidden="true">✳</span>
      </article>
      <div class="about-bottom"><span>ثابت على صحتك</span><span class="about-bottom-line"></span><span>ثابت على مستقبلك</span><a href="/cards">اكتشف البطاقات ←</a></div>
    </main>`;
}

let quiz = { index: 0, selected: null, answered: false, score: 0, answers: [] };

function progressMarkup() {
  return `<div class="progress-head"><span>البطاقة <b>${quiz.index + 1}</b> <i>من</i> ${cards.length}</span><span>${Math.round((quiz.index / cards.length) * 100)}٪</span></div><div class="progress-track" role="progressbar" aria-label="التقدم في البطاقات" aria-valuemin="0" aria-valuemax="${cards.length}" aria-valuenow="${quiz.index}"><span style="width:${(quiz.index / cards.length) * 100}%"></span></div>`;
}

function cardMarkup(card) {
  const options = card.options.map((option, index) => `
    <button class="answer-option ${quiz.selected === index ? 'is-selected' : ''}" type="button" data-choice="${index}" ${quiz.answered ? 'disabled' : ''} aria-pressed="${quiz.selected === index}">
      <span class="option-key">${['أ', 'ب', 'ج', 'د'][index]}</span><span class="option-text">${option}</span><span class="option-check" aria-hidden="true"></span>
    </button>`).join('');
  const isRight = quiz.answers[quiz.index] === card.correctIndex;
  return `
    <main class="page page-cards section-wrap">
      <div class="cards-heading"><div><span class="section-kicker">خد وقتك واختار</span><h1>اختبر <em>معلوماتك</em></h1></div><a class="back-link" href="/">← الرئيسية</a></div>
      <div class="quiz-progress">${progressMarkup()}</div>
      <div class="flip-scene ${quiz.answered ? 'is-flipped' : ''}" aria-live="polite">
        <div class="flip-card">
          <article class="card-face card-front">
            <div class="card-topline"><span class="category-chip"><i></i>${card.category}</span><span class="card-number">${String(card.id).padStart(2, '0')} <b>/ 15</b></span></div>
            <div class="card-question"><span class="question-label">السؤال</span><h2>${card.question}</h2></div>
            <div class="answer-list" role="group" aria-label="اختيارات الإجابة">${options}</div>
            <div class="card-bottom"><div class="card-brand"><span class="mini-mark">ث</span><span>ثابت على صحتك<br /><b>ثابت على مستقبلك</b></span></div><button class="button button-primary confirm-answer" type="button" data-action="confirm" ${quiz.selected === null ? 'disabled' : ''}>أكّد إجابتي <span aria-hidden="true">←</span></button></div>
          </article>
          <article class="card-face card-back ${isRight ? 'answer-correct' : 'answer-wrong'}">
            <div class="card-topline"><span class="category-chip"><i></i>المعلومة من الناحية التانية</span><span class="card-number">${String(card.id).padStart(2, '0')} <b>/ 15</b></span></div>
            <div class="answer-reveal"><span class="result-symbol" aria-hidden="true">${isRight ? '✓' : '↻'}</span><div><span class="question-label">${isRight ? 'إجابتك صحيحة' : 'الإجابة الصحيحة'}</span><h2>${card.options[card.correctIndex]}</h2></div></div>
            ${!isRight ? `<p class="your-answer">اختيارك: ${card.options[quiz.answers[quiz.index]]}</p>` : ''}
            <div class="fact-box"><span>المعلومة التوعوية</span><p>${card.explanation}</p></div>
            <div class="card-bottom"><div class="card-brand"><span class="mini-mark">ث</span><span>ثابت على صحتك<br /><b>ثابت على مستقبلك</b></span></div><button class="button button-dark" type="button" data-action="next">${quiz.index === cards.length - 1 ? 'شوف نتيجتك' : 'البطاقة التالية'} <span aria-hidden="true">←</span></button></div>
          </article>
        </div>
      </div>
      <p class="quiz-note">كل إجابة فرصة تعرف معلومة جديدة — خليك ثابت.</p>
    </main>`;
}

function resultsMarkup() {
  const percent = Math.round((quiz.score / cards.length) * 100);
  const message = percent >= 80 ? ['وعيّك ثابت!', 'معلوماتك قوية — شارك الوعي مع اللي حواليك.'] : percent >= 50 ? ['خطوة حلوة!', 'كل معلومة جديدة بتقربك من قرار أوعى.'] : ['دي البداية!', 'دلوقتي عندك معلومات أوضح تقدر تبني عليها.'];
  return `
    <main class="page page-results section-wrap">
      <div class="result-panel">
        <span class="section-kicker">خلصت البطاقات</span><div class="score-ring" style="--score:${percent}%"><div><strong>${quiz.score}</strong><span>من ${cards.length}</span></div></div>
        <h1>${message[0]}</h1><p>${message[1]}</p><p class="score-caption">النتيجة للتوعية والتعلّم — مش تقييم ليك.</p>
        <div class="result-actions"><button class="button button-primary" type="button" data-action="restart">العب تاني <span aria-hidden="true">↻</span></button><a class="button button-secondary" href="/about">اعرف عن ثابت</a></div>
      </div>
      <div class="result-aside"><div class="result-brand">ث<span>.</span></div><p>مستقبلك يستاهل إنك تكون واعي.</p><span>ثابت على صحتك<br /><b>ثابت على مستقبلك</b></span></div>
    </main>`;
}

function routeBody() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/about') return aboutPage();
  if (path === '/cards') return quiz.index >= cards.length ? resultsMarkup() : cardMarkup(cards[quiz.index]);
  return homePage();
}

function render() {
  app.innerHTML = `${header()}${routeBody()}${socialFooter()}`;
  document.title = window.location.pathname === '/about'
    ? 'عن حملة ثابت | ثابت على صحتك، ثابت على مستقبلك'
    : window.location.pathname === '/cards'
      ? 'بطاقات ثابت | ثابت على صحتك، ثابت على مستقبلك'
      : 'ثابت | ثابت على صحتك، ثابت على مستقبلك';
  bindMenu();
}

function bindMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  button?.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
}

function navigate(path) {
  if (path === '/cards' && window.location.pathname !== '/cards') quiz = { index: 0, selected: null, answered: false, score: 0, answers: [] };
  history.pushState({}, '', path);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

app.addEventListener('click', (event) => {
  const anchor = event.target.closest('a');
  if (anchor && anchor.origin === window.location.origin && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    const path = anchor.pathname || '/';
    if (path !== window.location.pathname) navigate(path);
    else if (path === '/cards' && quiz.index >= cards.length) navigate('/cards');
    else if (path === '/cards' && !quiz.answered && quiz.index === 0 && quiz.selected === null) { quiz = { index: 0, selected: null, answered: false, score: 0, answers: [] }; render(); }
    document.querySelector('.main-nav')?.classList.remove('is-open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    return;
  }
  const choice = event.target.closest('[data-choice]');
  if (choice && !quiz.answered) {
    quiz.selected = Number(choice.dataset.choice);
    render();
    return;
  }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'confirm' && quiz.selected !== null && !quiz.answered) {
    quiz.answers[quiz.index] = quiz.selected;
    if (quiz.selected === cards[quiz.index].correctIndex) quiz.score += 1;
    quiz.answered = true;
    render();
    return;
  }
  if (action === 'next' && quiz.answered) {
    quiz.index += 1;
    quiz.selected = null;
    quiz.answered = false;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  if (action === 'restart') {
    quiz = { index: 0, selected: null, answered: false, score: 0, answers: [] };
    history.pushState({}, '', '/cards');
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

window.addEventListener('popstate', render);
render();

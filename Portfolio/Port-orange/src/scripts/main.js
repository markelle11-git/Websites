import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECT_IMAGES = {
  dennispanel: { thumb: '/images/work/dennispanel-thumb.jpg', full: '/images/work/dennispanel-full.jpg' },
  stantonbathrooms: { thumb: '/images/work/stantonbathrooms-thumb.jpg', full: '/images/work/stantonbathrooms-full.jpg' },
  arkestro: { thumb: '/images/work/arkestro-thumb.jpg', full: '/images/work/arkestro-full.jpg' },
  bettyannehoward: { thumb: '/images/work/bettyannehoward-thumb.jpg', full: '/images/work/bettyannehoward-full.jpg' },
  bluepalm: { thumb: '/images/work/bluepalm-thumb.jpg', full: '/images/work/bluepalm-full.jpg' },
  copperfox: { thumb: '/images/work/copperfox-thumb.jpg', full: '/images/work/copperfox-full.jpg' },
  curemedical: { thumb: '/images/work/curemedical-thumb.jpg', full: '/images/work/curemedical-full.jpg' },
  davessportshop: { thumb: '/images/work/davessportshop-thumb.jpg', full: '/images/work/davessportshop-full.jpg' },
  defendify: { thumb: '/images/work/defendify-thumb.jpg', full: '/images/work/defendify-full.jpg' },
  genevieverochon: { thumb: '/images/work/genevieverochon-thumb.jpg', full: '/images/work/genevieverochon-full.jpg' },
  healthyself: { thumb: '/images/work/healthyself-thumb.jpg', full: '/images/work/healthyself-full.jpg' },
  helloplumbing: { thumb: '/images/work/helloplumbing-thumb.jpg', full: '/images/work/helloplumbing-full.jpg' },
  juliabrooke: { thumb: '/images/work/juliabrooke-thumb.jpg', full: '/images/work/juliabrooke-full.jpg' },
  kraftplumbing: { thumb: '/images/work/kraftplumbing-thumb.jpg', full: '/images/work/kraftplumbing-full.jpg' },
  liftnstore: { thumb: '/images/work/liftnstore-thumb.jpg', full: '/images/work/liftnstore-full.jpg' },
  solartap: { thumb: '/images/work/solartap-thumb.jpg', full: '/images/work/solartap-full.jpg' },
  spinify: { thumb: '/images/work/spinify-thumb.jpg', full: '/images/work/spinify-full.jpg' },
  stevelowell: { thumb: '/images/work/stevelowell-thumb.jpg', full: '/images/work/stevelowell-full.jpg' },
  teasurgery: { thumb: '/images/work/teasurgery-thumb.jpg', full: '/images/work/teasurgery-full.jpg' },
  kanthal: { thumb: '/images/work/kanthal-thumb.jpg', full: '/images/work/kanthal-full.jpg' },
  uvstore: { thumb: '/images/work/uvstore-thumb.jpg', full: '/images/work/uvstore-full.jpg' },
  web3auth: { thumb: '/images/work/web3auth-thumb.jpg', full: '/images/work/web3auth-full.jpg' },
};

/* ---------- DATA ---------- */
const projects = [
  { key: 'helloplumbing', name: 'Hello Plumbing', cat: 'Local SEO', tag: 'Plumbing · Local SEO' },
  { key: 'copperfox', name: 'Copper Fox Electrical', cat: 'Local SEO', tag: 'Electrical · Local SEO' },
  { key: 'teasurgery', name: 'Tea Surgery', cat: 'Webflow', tag: 'E-commerce · Webflow' },
  { key: 'web3auth', name: 'Web3Auth', cat: 'Webflow', tag: 'SaaS · Webflow' },
  { key: 'bluepalm', name: 'Blue Palm (Demo)', cat: 'Webflow', tag: 'Concept · Webflow' },
  { key: 'genevieverochon', name: 'Genevieve Rochon', cat: 'WordPress · Divi', tag: 'Personal Brand · Divi' },
  { key: 'kanthal', name: 'The Kanthal Group', cat: 'WordPress · Divi', tag: 'Corporate · Divi' },
  { key: 'bettyannehoward', name: 'Betty Anne Howard', cat: 'WordPress · Divi', tag: 'Personal Brand · Divi' },
  { key: 'stevelowell', name: 'Steve Lowell', cat: 'WordPress · Divi', tag: 'Personal Brand · Divi' },
  { key: 'stantonbathrooms', name: 'Stanton Bathrooms', cat: 'WordPress · Divi', tag: 'Renovations · Divi' },
  { key: 'spinify', name: 'Spinify', cat: 'WordPress · Elementor', tag: 'SaaS · Elementor' },
  { key: 'arkestro', name: 'Arkestro', cat: 'WordPress · Elementor', tag: 'SaaS · Elementor' },
  { key: 'defendify', name: 'Defendify', cat: 'WordPress · Elementor', tag: 'Cybersecurity · Elementor' },
  { key: 'curemedical', name: 'Cure Medical', cat: 'WordPress · Elementor', tag: 'Healthcare · Elementor' },
  { key: 'juliabrooke', name: 'Julia Brooke Designs', cat: 'WordPress · Elementor', tag: 'Design Studio · Elementor' },
  { key: 'kraftplumbing', name: 'Kraft Plumbing & Bathrooms', cat: 'WordPress · Elementor', tag: 'Renovations · Elementor' },
  { key: 'dennispanel', name: 'Dennis Panel & Paint', cat: 'WordPress · Elementor', tag: 'Automotive · Elementor' },
  { key: 'liftnstore', name: 'Lift N Store', cat: 'WooCommerce', tag: 'E-commerce · WooCommerce' },
  { key: 'davessportshop', name: "Dave's Sport Shop", cat: 'Shopify', tag: 'E-commerce · Shopify' },
  { key: 'solartap', name: 'SolarTap', cat: 'Shopify', tag: 'E-commerce · Shopify' },
  { key: 'healthyself', name: 'Healthy Self Collection', cat: 'Shopify', tag: 'E-commerce · Shopify' },
  { key: 'uvstore', name: 'UV Store', cat: 'Shopify', tag: 'E-commerce · Shopify' },
];

const categories = ['All', 'Local SEO', 'Webflow', 'WordPress · Divi', 'WordPress · Elementor', 'WooCommerce', 'Shopify'];

/* ---------- render filters ---------- */
const filtersEl = document.getElementById('filters');
categories.forEach((cat, i) => {
  const b = document.createElement('button');
  b.className = 'filter-btn' + (i === 0 ? ' active' : '');
  b.textContent = cat;
  b.dataset.cat = cat;
  b.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    renderGrid(cat);
  });
  filtersEl.appendChild(b);
});

/* ---------- render grid ---------- */
const gridEl = document.getElementById('portfolioGrid');
function renderGrid(filter) {
  gridEl.innerHTML = '';
  const list = filter === 'All' ? projects : projects.filter((p) => p.cat === filter);
  list.forEach((p) => {
    const imgs = PROJECT_IMAGES[p.key];
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'p-card';
    card.setAttribute('aria-label', `View ${p.name} case study`);
    card.innerHTML = `
      <div class="thumb">
        <img src="${imgs ? imgs.thumb : ''}" alt="${p.name} website screenshot" loading="lazy">
        <div class="arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </div>
      </div>
      <div class="p-info">
        <span class="tag mono">${p.tag}</span>
        <h3>${p.name}</h3>
      </div>`;
    card.addEventListener('click', () => openCaseStudy(p));
    gridEl.appendChild(card);
  });
  gsap.to('.p-card', {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
  });
}
renderGrid('All');

/* ---------- case study modal ---------- */
const modalEl = document.getElementById('caseModal');
const modalHeroImg = document.getElementById('caseHeroImg');
const modalTag = document.getElementById('caseTag');
const modalTitle = document.getElementById('caseTitle');
const modalFullImg = document.getElementById('caseFullImg');
const modalClose = document.getElementById('caseClose');

function openCaseStudy(p) {
  const imgs = PROJECT_IMAGES[p.key];
  if (!imgs) return;
  modalHeroImg.src = imgs.thumb;
  modalFullImg.src = imgs.full;
  modalFullImg.alt = `${p.name} full page screenshot`;
  modalTag.textContent = p.tag;
  modalTitle.textContent = p.name;
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalEl.querySelector('.case-scroll').scrollTop = 0;
}
function closeCaseStudy() {
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeCaseStudy);
modalEl.addEventListener('click', (e) => { if (e.target === modalEl) closeCaseStudy(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCaseStudy(); });

/* ---------- marquee content ---------- */
const stack = ['WordPress', 'Webflow', 'Elementor', 'Divi', 'GenerateBlocks', 'Shopify', 'WooCommerce', 'Claude Code', 'Astro Build', 'GSAP', 'GTM', 'GA4'];
function buildMarquee(el, words) {
  const html = words.map((w) => `<span><b>${w}</b><i></i></span>`).join('');
  el.innerHTML = html + html; // duplicate for seamless loop
}
buildMarquee(document.getElementById('marquee1'), stack);
buildMarquee(document.getElementById('marquee2'), ['Fast to build', 'Built to convert', 'Live in weeks, not months', 'Onpage SEO included']);

/* ---------- FAQ ---------- */
const faqs = [
  { q: 'Which platform is right for my project?', a: "Local service or small business needing fast setup and easy edits → WordPress with Elementor, Divi or GenerateBlocks. Marketing site with heavy motion and a design-led brand → Webflow. Selling products → Shopify or WooCommerce depending on how much backend control you need. If you're not sure, tell me the goal and I'll tell you the platform." },
  { q: 'Do you handle hosting, domains and going live?', a: 'Yes — server setup, domain pointing, DNS, SSL, and the staging-to-production move are all part of the build. You get a live site, not a zip file.' },
  { q: 'Can you build on top of an AI workflow?', a: 'Yes. For sites where speed and a distinct visual identity matter more than a drag-and-drop CMS, I build with Claude Code and Astro, with GSAP handling the motion. Good fit for portfolios, product launches, and marketing sites that need to move fast.' },
  { q: 'Do you set up tracking and SEO, or just the site?', a: 'Both. GTM and GA4 get wired up correctly during the build — not bolted on after — along with onpage SEO fundamentals: structure, metadata, and internal linking.' },
  { q: 'How do we start?', a: "Email mark.elle11@gmail.com with what you're building and roughly when you need it live. I'll reply with platform recommendation, scope, and timeline." },
];
const faqList = document.getElementById('faqList');
faqs.forEach((f) => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <button class="faq-q display">${f.q}<span class="plus mono">+</span></button>
    <div class="faq-a"><p>${f.a}</p></div>`;
  const btn = item.querySelector('.faq-q');
  const ans = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach((i) => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
  faqList.appendChild(item);
});

/* ---------- mobile menu ---------- */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const headerNav = document.querySelector('header.nav');
function closeMobileMenu() {
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  headerNav.classList.remove('menu-open');
  mobileMenu.style.maxHeight = null;
}
navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('open');
  headerNav.classList.toggle('menu-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  mobileMenu.style.maxHeight = isOpen ? mobileMenu.scrollHeight + 'px' : null;
});
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobileMenu));

/* ---------- copy email ---------- */
document.getElementById('copyBtn').addEventListener('click', function () {
  navigator.clipboard.writeText('mark.elle11@gmail.com').then(() => {
    this.textContent = 'Copied ✓';
    setTimeout(() => { this.textContent = 'Copy'; }, 1800);
  });
});

/* ---------- hero visual reveal ---------- */
window.addEventListener('DOMContentLoaded', () => {
  gsap.set('.hero-glow', { opacity: 0, scale: 0.7 });
  const tl = gsap.timeline({ delay: 0.25 });
  tl.to('.hero-visual', {
    opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out',
  })
    .to('.hero-glow', {
      opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out',
    }, '-=0.7')
    .call(() => {
      // continuous gentle float for the laptop image
      gsap.to('#heroLaptop', {
        y: -14, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1,
      });
      // slow ambient pulse for the glow
      gsap.to('.hero-glow', {
        opacity: 0.7, scale: 1.08, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1,
      });
    });
});

/* ---------- scroll reveals ---------- */
gsap.utils.toArray('.stat').forEach((el, i) => {
  gsap.from(el, {
    opacity: 0, y: 30, duration: 0.6, delay: i * 0.06,
    scrollTrigger: { trigger: el, start: 'top 85%' },
  });
});
gsap.utils.toArray('.stack-card').forEach((el, i) => {
  gsap.from(el, {
    opacity: 0, y: 30, duration: 0.6, delay: i * 0.08,
    scrollTrigger: { trigger: el, start: 'top 88%' },
  });
});

/* ---------- process sticky visual swap ---------- */
document.querySelectorAll('.p-step').forEach((step) => {
  const idx = step.dataset.step;
  ScrollTrigger.create({
    trigger: step,
    start: 'top 55%',
    end: 'bottom 55%',
    onEnter: () => setActiveVisual(idx),
    onEnterBack: () => setActiveVisual(idx),
  });
});
function setActiveVisual(idx) {
  document.querySelectorAll('.p-visual').forEach((v) => {
    v.classList.toggle('active', v.dataset.visual === idx);
  });
}

/* refresh scrolltrigger after images/fonts load */
window.addEventListener('load', () => ScrollTrigger.refresh());

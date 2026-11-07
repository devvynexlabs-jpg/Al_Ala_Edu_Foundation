/**
 * AL-ALA EDUCATION FOUNDATION - AZWEDO AMSTERDAM MULTI-PAGE APPLICATION JS
 * Synchronized multi-currency, donation calculations, Zakat tools, bank copy,
 * lightbox gallery, and drawer navigation across all pages.
 */

const CURRENCY_RATES = {
  PKR: { symbol: 'Rs.', rate: 1, label: 'Pakistani Rupee' },
  USD: { symbol: '$', rate: 0.0036, label: 'US Dollar' },
  GBP: { symbol: '£', rate: 0.0028, label: 'British Pound' },
  EUR: { symbol: '€', rate: 0.0033, label: 'Euro' },
  SAR: { symbol: 'SR', rate: 0.0135, label: 'Saudi Riyal' }
};

// Retrieve saved currency from localStorage if available
let currentCurrency = localStorage.getItem('alala_currency') || 'PKR';
let selectedCause = 'Child Welfare & Education';
let selectedFrequency = 'one-time';
let selectedAmount = 5000;

const PRESET_AMOUNTS = [2500, 5000, 10000, 25000];

const CAUSE_IMPACT_MAP = {
  'Child Welfare & Education': {
    2500: 'Provides school stationery, syllabus books, and nutritional snacks for 1 student for a month.',
    5000: 'Covers full monthly tuition, school bag, books, and uniforms for 1 underprivileged child.',
    10000: 'Sponsors 2 deserving students with full tuition, digital learning access, and health checkups.',
    25000: 'Provides full-year educational scholarship & care for an orphan student at Al-Ala.'
  },
  'Educational Welfare & STEM': {
    2500: 'Funds digital STEM robotics modules and interactive science supplies for classroom learners.',
    5000: 'Sponsors 1 underprivileged girl child with STEM lab kits, textbooks, and mentoring.',
    10000: 'Funds professional training certification for 2 community school teachers in modern pedagogy.',
    25000: 'Equips a school computer workstation or establishes a classroom STEM experimental corner.'
  },
  'Social Welfare & Food Relief': {
    2500: 'Provides grocery staples and clean ration essentials to feed a struggling family for a week.',
    5000: 'Delivers a comprehensive 1-month Ramadan / emergency food ration pack to a destitute household.',
    10000: 'Feeds 2 underprivileged families with complete monthly rations and fresh Iftar meals.',
    25000: 'Supports community kitchen operations serving hot daily meals to 100+ fasting and needy persons.'
  },
  'Health Welfare & Dental Camps': {
    2500: 'Provides free dental screening, cleaning, and dental hygiene kits for 10 school children.',
    5000: 'Covers clinical checkups, diagnostic blood tests, and doctor consultation for 15 deserving patients.',
    10000: 'Sponsors specialized pediatric diagnostics, essential medicines, and maternal healthcare sessions.',
    25000: 'Funds complete mobile dental unit operatory supplies, pharmaceuticals, and team mobilization for a full camp.'
  },
  'Women Welfare & Empowerment': {
    2500: 'Provides Quran learning material, notebooks, and learning guides for women attending classes.',
    5000: 'Sponsors sewing and vocational craft kits for a woman to start home-based stitching.',
    10000: 'Funds complete 1-month vocational stitching & skill training certification for 2 women.',
    25000: 'Provides commercial sewing machines and vocational starter kits to empower widowed/needy mothers.'
  },
  'Elderly & Differently-Abled Care': {
    2500: 'Provides elder nutritional supplements and personal hygiene care kits for elderly individuals.',
    5000: 'Funds specialized learning materials and therapeutic supplies for special children at Chaman Institute.',
    10000: 'Sponsors a high-grade durable mobility wheelchair or orthopedic walking aid for a disabled individual.',
    25000: 'Funds comprehensive mobility equipment, elder friendship circles, and medical care for 3 individuals.'
  },
  'Economic Welfare & Qarz-e-Hasana': {
    2500: 'Provides seasonal winter blankets and warm clothing packages to an underprivileged family.',
    5000: 'Contributes essential household wedding starter items (Jahez kit) for a deserving orphan bride.',
    10000: 'Provides interest-free micro loan capital (Qarz-e-Hasana) to jumpstart a micro-enterprise or trade.',
    25000: 'Full wedding assistance grant or revolving micro-enterprise capital empowering a family to achieve financial dignity.'
  },
  'Humanitarian Outreach & Relief': {
    2500: 'Delivers emergency hygiene kits, warm blankets, and clean water supplies to families in distress.',
    5000: 'Provides emergency food hamper and trauma first-aid kit for families in disaster/relief camps.',
    10000: 'Supplies medical first-aid kits and emergency shelter essentials to affected communities.',
    25000: 'Funds substantial emergency relief logistics, food pallets, and pediatric medical supplies for Gaza or flood zones.'
  },
  'Zakat & Sadaqah General Fund': {
    2500: 'Disbursed directly into 100% Shariah-compliant Zakat assistance for verified deserving families.',
    5000: 'Provides critical financial relief, food aid, and school concessions for orphan families.',
    10000: 'Addresses urgent medical, educational, and household emergencies for verified Mustahiqeen.',
    25000: 'Comprehensive Zakat grant supporting education, family sustenance, and debt relief (Qarz-e-Hasana).'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initStickyDomainCards();
  initCurrencySelector();
  initDonationWidget();
  initZakatCalculator();
  initGalleryLightbox();
  initMobileDrawer();
  initCounters();
  initBankCopy();
  initDonationModal();
  updateAmountsDisplay();
  updateImpactDescription();
});

/* --------------------------------------------------------------------------
   Currency Handling
   -------------------------------------------------------------------------- */
function initCurrencySelector() {
  const currencySelects = document.querySelectorAll('.currency-select-box');
  currencySelects.forEach(select => {
    select.value = currentCurrency;
    select.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem('alala_currency', currentCurrency);
      currencySelects.forEach(s => s.value = currentCurrency);
      updateAmountsDisplay();
      updateImpactDescription();
      showToast(`Currency changed to ${currentCurrency} (${CURRENCY_RATES[currentCurrency].symbol})`);
    });
  });
}

function formatAmount(amountInPKR) {
  const info = CURRENCY_RATES[currentCurrency];
  const converted = Math.round(amountInPKR * info.rate);
  return `${info.symbol} ${converted.toLocaleString()}`;
}

function updateAmountsDisplay() {
  const chips = document.querySelectorAll('.amount-box-btn');
  chips.forEach((chip, idx) => {
    const basePkr = PRESET_AMOUNTS[idx];
    chip.dataset.pkr = basePkr;
    chip.textContent = formatAmount(basePkr);
  });

  const currencyLabels = document.querySelectorAll('.custom-symbol, .calc-currency-symbol');
  currencyLabels.forEach(el => {
    el.textContent = CURRENCY_RATES[currentCurrency].symbol;
  });

  const customInput = document.getElementById('custom-donation-amount');
  if (customInput) {
    const minVal = Math.round(1000 * CURRENCY_RATES[currentCurrency].rate);
    customInput.placeholder = `Other amount (e.g. ${minVal.toLocaleString()})`;
  }
}

/* --------------------------------------------------------------------------
   Donation Widget Controls
   -------------------------------------------------------------------------- */
function initDonationWidget() {
  const freqButtons = document.querySelectorAll('.freq-pill');
  freqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      freqButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFrequency = btn.dataset.frequency;
      updateImpactDescription();
    });
  });

  const causeBtns = document.querySelectorAll('.cause-tag-btn');
  causeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      causeBtns.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      selectedCause = btn.dataset.cause;
      updateImpactDescription();
    });
  });

  const amountBtns = document.querySelectorAll('.amount-box-btn');
  const customInput = document.getElementById('custom-donation-amount');

  amountBtns.forEach(chip => {
    chip.addEventListener('click', () => {
      amountBtns.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedAmount = parseInt(chip.dataset.pkr, 10);
      if (customInput) customInput.value = '';
      updateImpactDescription();
    });
  });

  if (customInput) {
    customInput.addEventListener('input', (e) => {
      amountBtns.forEach(c => c.classList.remove('active'));
      const val = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
      if (!isNaN(val) && val > 0) {
        selectedAmount = Math.round(val / CURRENCY_RATES[currentCurrency].rate);
      } else {
        selectedAmount = 0;
      }
      updateImpactDescription();
    });
  }

  const proceedBtn = document.getElementById('btn-proceed-donate');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      openDonationModal({
        cause: selectedCause,
        frequency: selectedFrequency,
        amountPkr: selectedAmount > 0 ? selectedAmount : 5000
      });
    });
  }
}

function updateImpactDescription() {
  const explainerEl = document.getElementById('impact-explainer-text');
  if (!explainerEl) return;

  const causeMap = CAUSE_IMPACT_MAP[selectedCause] || CAUSE_IMPACT_MAP['Child Education & Schooling'];
  
  let description = '';
  if (selectedAmount >= 25000) {
    description = causeMap[25000];
  } else if (selectedAmount >= 10000) {
    description = causeMap[10000];
  } else if (selectedAmount >= 5000) {
    description = causeMap[5000];
  } else {
    description = causeMap[2500];
  }

  const freqText = selectedFrequency === 'monthly' ? 'every month ' : '';
  explainerEl.innerHTML = `Your donation of <strong>${formatAmount(selectedAmount)}</strong> ${freqText}: ${description}`;
}

/* --------------------------------------------------------------------------
   Zakat & Sadaqah Calculator
   -------------------------------------------------------------------------- */
function initZakatCalculator() {
  const cashInput = document.getElementById('zakat-cash');
  const goldInput = document.getElementById('zakat-gold');
  const businessInput = document.getElementById('zakat-business');
  const debtsInput = document.getElementById('zakat-debts');
  const resultDisplay = document.getElementById('zakat-total-result');
  const payZakatBtn = document.getElementById('btn-pay-zakat-calc');

  function calculateZakat() {
    const cash = parseFloat(cashInput?.value) || 0;
    const gold = parseFloat(goldInput?.value) || 0;
    const business = parseFloat(businessInput?.value) || 0;
    const debts = parseFloat(debtsInput?.value) || 0;

    const totalAssets = cash + gold + business;
    const netWealth = Math.max(0, totalAssets - debts);
    const zakatDue = netWealth * 0.025;

    if (resultDisplay) {
      resultDisplay.textContent = `${CURRENCY_RATES[currentCurrency].symbol} ${Math.round(zakatDue).toLocaleString()}`;
    }

    if (payZakatBtn) {
      payZakatBtn.dataset.zakatPkr = Math.round(zakatDue / CURRENCY_RATES[currentCurrency].rate);
    }
  }

  [cashInput, goldInput, businessInput, debtsInput].forEach(inp => {
    if (inp) inp.addEventListener('input', calculateZakat);
  });

  if (payZakatBtn) {
    payZakatBtn.addEventListener('click', () => {
      const pkrAmount = parseInt(payZakatBtn.dataset.zakatPkr, 10) || 10000;
      openDonationModal({
        cause: 'Zakat & Sadaqah General Fund',
        frequency: 'one-time',
        amountPkr: pkrAmount
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Real Impact Photo Lightbox
   -------------------------------------------------------------------------- */
function initGalleryLightbox() {
  const projectItems = document.querySelectorAll('.project-link-holder');
  const modal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-full-img');
  const lightboxCaption = document.getElementById('lightbox-caption-text');
  const closeBtn = document.getElementById('lightbox-close-btn');

  projectItems.forEach(item => {
    const imgEl = item.querySelector('.project-image');
    if (!imgEl) return;

    item.addEventListener('click', (e) => {
      if (e.target.closest('.project-cta-link')) return;
      e.preventDefault();
      const src = imgEl.src;
      const title = item.querySelector('.project-title:last-of-type')?.textContent || '';
      const cat = item.querySelector('.category-title')?.textContent || '';

      if (lightboxImg) lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.innerHTML = `<span style="color: var(--primary-accent); text-transform: uppercase; font-size: 13px; font-weight: 800; letter-spacing: 1px;">${cat}</span><br><strong>${title}</strong>`;
      if (modal) modal.classList.add('active');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });

  const projectCtas = document.querySelectorAll('.project-cta-link');
  projectCtas.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cause = btn.dataset.cause || 'Child Education & Schooling';
      openDonationModal({
        cause: cause,
        frequency: 'one-time',
        amountPkr: 5000
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Mobile Drawer & Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const drawer = document.getElementById('mobile-nav-panel');
  const overlay = document.getElementById('nav-backdrop');
  const closeBtn = document.getElementById('mobile-nav-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* --------------------------------------------------------------------------
   Bank Details Copy
   -------------------------------------------------------------------------- */
function initBankCopy() {
  const copyButtons = document.querySelectorAll('.ams-copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.dataset.copyText;
      if (!targetText) return;

      navigator.clipboard.writeText(targetText).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'COPIED!';
        btn.style.backgroundColor = 'var(--primary-accent)';
        btn.style.color = '#000000';
        showToast(`Copied to clipboard: ${targetText}`);

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.style.color = '';
        }, 2200);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Donation Pledge & Receipt Modal
   -------------------------------------------------------------------------- */
function initDonationModal() {
  const modal = document.getElementById('donation-modal');
  const closeBtn = document.getElementById('modal-close-ams');
  const form = document.getElementById('donation-pledge-form');
  const slipContainer = document.getElementById('pledge-slip-result');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const donorName = document.getElementById('donor-name').value.trim();
      const donorPhone = document.getElementById('donor-phone').value.trim();
      const donorEmail = document.getElementById('donor-email').value.trim();
      const cause = document.getElementById('modal-cause-select').value;
      const amountPkr = parseInt(document.getElementById('modal-amount-input').value, 10) || 5000;
      const selectedBank = document.getElementById('modal-bank-select').value;

      const trackingId = 'ALALA-' + Math.floor(100000 + Math.random() * 900000);
      const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

      if (slipContainer) {
        slipContainer.innerHTML = `
          <div class="pledge-slip-ams">
            <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid #000000; padding-bottom: 0.75rem; margin-bottom: 1rem;">
              <div>
                <strong style="font-size: 1.2rem; color: #000000; text-transform: uppercase; letter-spacing: -0.01em;">AL-ALA EDUCATION FOUNDATION</strong>
                <p style="font-size: 12px; font-weight: 700; color: var(--text-muted); margin: 0;">OFFICIAL DONATION PLEDGE VOUCHER</p>
              </div>
              <span style="font-family: monospace; font-size: 14px; font-weight: 800; color: #000000; background: var(--primary-accent); padding: 4px 10px; border: 1.5px solid #000000;">
                ${trackingId}
              </span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 14px; margin-bottom: 1.25rem;">
              <div><strong style="color: var(--text-muted); font-size: 11px; text-transform: uppercase;">DONOR NAME:</strong><br><span style="font-weight: 800;">${donorName}</span></div>
              <div><strong style="color: var(--text-muted); font-size: 11px; text-transform: uppercase;">DATE:</strong><br><span style="font-weight: 800;">${dateStr}</span></div>
              <div><strong style="color: var(--text-muted); font-size: 11px; text-transform: uppercase;">ALLOCATED CAUSE:</strong><br><span style="font-weight: 800;">${cause}</span></div>
              <div><strong style="color: var(--text-muted); font-size: 11px; text-transform: uppercase;">AMOUNT:</strong><br><span style="font-size: 1.35rem; font-weight: 800; color: #000000;">${formatAmount(amountPkr)}</span></div>
            </div>

            <div style="background: #ffffff; border: 1.5px solid #000000; padding: 1rem; margin-bottom: 1.25rem; font-size: 13.5px;">
              <strong>Selected Transfer Account:</strong> ${selectedBank}<br>
              <span style="color: var(--text-body);">Please complete the online bank transfer or mobile deposit and send your confirmation slip on WhatsApp.</span>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="https://wa.me/923001234567?text=${encodeURIComponent(`Assalam-o-Alaikum, I have generated a donation pledge for Al-Ala Education Foundation.\nTracking ID: ${trackingId}\nDonor: ${donorName}\nCause: ${cause}\nAmount: ${formatAmount(amountPkr)}\nBank: ${selectedBank}`)}" 
                 target="_blank" 
                 class="button" style="flex: 1; text-align: center;">
                Confirm on WhatsApp
              </a>
              <button type="button" class="button outline" onclick="window.print()">
                Print Slip
              </button>
            </div>
          </div>
        `;
        slipContainer.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Donation pledge created! Reference: ${trackingId}`);
    });
  }
}

function openDonationModal(config = {}) {
  const modal = document.getElementById('donation-modal');
  if (!modal) {
    window.location.href = 'donate.html';
    return;
  }

  const causeSelect = document.getElementById('modal-cause-select');
  const amountInput = document.getElementById('modal-amount-input');
  const slipContainer = document.getElementById('pledge-slip-result');

  if (slipContainer) slipContainer.innerHTML = '';

  if (causeSelect && config.cause) {
    causeSelect.value = config.cause;
  }
  if (amountInput && config.amountPkr) {
    amountInput.value = config.amountPkr;
  }

  modal.classList.add('active');
}

/* --------------------------------------------------------------------------
   Counters Animation
   -------------------------------------------------------------------------- */
function initCounters() {
  const statNumbers = document.querySelectorAll('.vision-big-number, .hero-stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(numEl => {
          const target = parseInt(numEl.dataset.target, 10);
          if (isNaN(target)) return;
          const suffix = numEl.dataset.suffix || '';
          let count = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 25));

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            numEl.textContent = `${count.toLocaleString()}${suffix}`;
          }, 25);
        });
      }
    });
  }, { threshold: 0.2 });

  const triggerSection = document.querySelector('.vision-section-holder') || document.querySelector('.hero-bottom-stats-strip');
  if (triggerSection) observer.observe(triggerSection);
}

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --------------------------------------------------------------------------
   Hero Background Carousel
   -------------------------------------------------------------------------- */
function initHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.hero-carousel-slide');
  const dots = document.querySelectorAll('#hero-carousel-dots .hero-dot');
  if (slides.length === 0) return;

  let currentSlide = 0;
  let carouselInterval = null;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startAutoCycle() {
    stopAutoCycle();
    carouselInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoCycle() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      carouselInterval = null;
    }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.dataset.slide, 10);
      if (!isNaN(idx)) {
        showSlide(idx);
        startAutoCycle();
      }
    });
  });

  // Start automatic rotation
  startAutoCycle();
}

/* --------------------------------------------------------------------------
   Sticky Domain Cards Navigator (What We Do Section)
   -------------------------------------------------------------------------- */
function initStickyDomainCards() {
  const container = document.getElementById('what-we-do-grid');
  if (!container) return;

  const badgeEl = document.getElementById('sticky-domain-badge');
  const titleEl = document.getElementById('sticky-domain-title');
  const descEl = document.getElementById('sticky-domain-desc');
  const pills = container.querySelectorAll('.domain-tab-pill');
  const domainBlocks = container.querySelectorAll('.pillar-block');

  if (!badgeEl || !titleEl || domainBlocks.length === 0) return;

  function setActiveDomain(domainBlock) {
    if (!domainBlock) return;
    const badge = domainBlock.dataset.badge;
    const title = domainBlock.dataset.title;
    const desc = domainBlock.dataset.desc;
    const id = domainBlock.id;

    if (badge) badgeEl.textContent = badge;
    if (title) titleEl.textContent = title;
    if (desc) descEl.textContent = desc;

    pills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.domainId === id);
    });

    domainBlocks.forEach(b => {
      b.classList.toggle('active-domain', b === domainBlock);
    });
  }

  // Click on pill to smoothly scroll to that domain
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const targetId = e.currentTarget.dataset.domainId;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveDomain(targetEl);
      }
    });
  });

  // IntersectionObserver to update sticky green card as user scrolls through each domain
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveDomain(entry.target);
      }
    });
  }, {
    rootMargin: '-15% 0px -45% 0px',
    threshold: 0.15
  });

  domainBlocks.forEach(block => observer.observe(block));
}

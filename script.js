/* ============================================
   國寶門集團 — Main JavaScript
   GSAP Animations, Interactive Features, FAB
   ============================================ */

const SHARED_HEADER_FALLBACK = `
<header id="site-header" class="site-header">
  <nav class="nav-container">
    <a href="./index.html" class="nav-logo" id="nav-logo">
      <div class="logo-icon">
        <img src="./images/guobao-logo-mark.svg" alt="國寶門集團 Logo" class="logo-mark">
      </div>
      <span>國寶門集團</span>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="./index.html">首頁</a></li>
      <li class="nav-dropdown">
        <a href="./support.html">關於我們</a>
        <ul class="nav-submenu">
          <li><a href="./support.html#faq">常見問題</a></li>
          <li><a href="./support.html#store-map">門市</a></li>
          <li><a href="./support.html#booking">預約丈量</a></li>
        </ul>
      </li>
      <li class="nav-dropdown">
        <a href="./products.html">玄關門系列</a>
        <ul class="nav-submenu">
          <li><a href="./products.html#door-series">門系列</a></li>
          <li><a href="./products.html#color-series">門色系列</a></li>
          <li><a href="./products.html#lock-series">門鎖系列</a></li>
        </ul>
      </li>
      <li><a href="./wishlist.html">願望清單</a></li>
    </ul>
    <div class="hamburger" id="hamburger" aria-label="開啟選單" role="button" tabindex="0">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</header>
<div class="mobile-menu" id="mobile-menu">
  <a href="./index.html">首頁</a>
  <a href="./support.html">關於我們</a>
  <a href="./support.html#faq" class="mobile-sub-link">常見問題</a>
  <a href="./support.html#store-map" class="mobile-sub-link">門市</a>
  <a href="./support.html#booking" class="mobile-sub-link">預約丈量</a>
  <a href="./products.html">玄關門系列</a>
  <a href="./products.html#door-series" class="mobile-sub-link">門系列</a>
  <a href="./products.html#color-series" class="mobile-sub-link">門色系列</a>
  <a href="./products.html#lock-series" class="mobile-sub-link">門鎖系列</a>
  <a href="./wishlist.html">願望清單</a>
</div>
`;

const SHARED_FOOTER_FALLBACK = `
<footer id="site-footer" class="site-footer">
  <div class="footer-container">
    <div class="footer-grid">
      <div class="footer-brand">
        <h4>國寶門集團</h4>
        <p>家的第一道防線，品味的極致展現。結合德系精工與智能科技，為台灣家庭打造最安全、最美觀的玄關門。</p>
      </div>
      <div class="footer-col">
        <h5>快速連結</h5>
        <ul>
          <li><a href="./index.html">首頁</a></li>
          <li><a href="./support.html">關於我們</a></li>
          <li><a href="./products.html">玄關門系列</a></li>
          <li><a href="./wishlist.html">願望清單</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>玄關門</h5>
        <ul>
          <li><a href="./products.html#door-series">門系列</a></li>
          <li><a href="./products.html#color-series">門色系列</a></li>
          <li><a href="./products.html#lock-series">鎖具系列</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>聯絡我們</h5>
        <ul>
          <li><a href="tel:0800368369">📞 電話：0800-368-369</a></li>
          <li>🕐 周一到周六 9:30-20:00</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>COPYRIGHT © 2021 GUOBAO DOOR™ INC.</p>
    </div>
  </div>
</footer>
`;

const SHARED_FAB_FALLBACK = `
<div class="fab-wrapper" id="fab-wrapper">
  <div class="fab-actions" id="fab-actions">
    <a href="tel:0800368369" class="fab-action-btn" id="fab-call">
      <span>📞</span>
      <span class="fab-tooltip">快速撥號</span>
    </a>
    <a href="./support.html#faq" class="fab-action-btn" id="fab-faq">
      <span>❓</span>
      <span class="fab-tooltip">常見問題</span>
    </a>
    <a href="./support.html#booking" class="fab-action-btn" id="fab-booking">
      <span>📅</span>
      <span class="fab-tooltip">預約丈量</span>
    </a>
  </div>
  <div class="fab-main" id="fab-main" role="button" tabindex="0" aria-label="返回頂部">
    <svg class="fab-progress-ring" viewBox="0 0 56 56">
      <circle class="progress-bg" cx="28" cy="28" r="26"/>
      <circle class="progress-bar" id="fab-progress-bar" cx="28" cy="28" r="26"/>
    </svg>
    <div class="fab-main-btn" id="fab-main-btn">↑</div>
  </div>
</div>
`;

const WISHLIST_PRODUCT_META = {
  '碳纖防爆門': {
    series: '碳纖防爆門系列',
    need: '高防護、抗破壞、隔音',
    feature: '高科技碳纖維、防爆面材、耐撞擊',
    price: 'NT$ 21 萬起',
    anchor: 'prod-carbon'
  },
  '雙玄關門雙視窗': {
    series: '雙玄關門雙視窗系列',
    need: '隔音、採光、雙層氣密',
    feature: '雙門扇結構、雙視窗、小視窗雙孔',
    price: 'NT$ 5.2 萬起',
    anchor: 'prod-double-window'
  },
  '防水防污門': {
    series: '防水防污門系列',
    need: '抗候、防鏽、防污',
    feature: '特殊塗裝、耐候門面、低維護',
    price: 'NT$ 5.2 萬起',
    anchor: 'prod-waterproof'
  },
  '羅浮宮浮雕門': {
    series: '羅浮宮浮雕門系列',
    need: '外觀質感、立體雕花、門面升級',
    feature: '歐式浮雕、肌理面材、藝術造型',
    price: 'NT$ 8.8 萬起',
    anchor: 'prod-louvre'
  },
  '鋼製壓板門': {
    series: '鋼製壓板門系列',
    need: '耐用、穩定、實用',
    feature: '鋼板壓紋、一體成形、結構扎實',
    price: 'NT$ 4.6 萬起',
    anchor: 'prod-steel'
  },
  '雙玄關門A系列': {
    series: '雙玄關門 A 系列',
    need: '隔音、通風、安全',
    feature: '內外雙門、多段鎖體、氣密結構',
    price: 'NT$ 4.8 萬起',
    anchor: 'prod-double-a'
  },
  '百頁通風門': {
    series: '百頁通風門系列',
    need: '通風、隱私、採光',
    feature: '百頁導流、視覺遮蔽、環境調節',
    price: 'NT$ 4.2 萬起',
    anchor: 'prod-ventilate'
  },
  '烤漆精雕門': {
    series: '烤漆精雕門系列',
    need: '高辨識造型、門面質感',
    feature: '精雕紋理、烤漆分層、細節立體',
    price: 'NT$ 6.8 萬起',
    anchor: 'prod-paint'
  },
  '門中門': {
    series: '門中門系列',
    need: '通風、防盜、便利',
    feature: '大門整合小門、雙重防護、動線彈性',
    price: 'NT$ 6.2 萬起',
    anchor: 'prod-in-door'
  },
  '日式玄關門': {
    series: '日式玄關門系列',
    need: '簡約風格、溫潤木質感',
    feature: '日式比例、細膩收邊、俐落線條',
    price: 'NT$ 5.6 萬起',
    anchor: 'prod-japan'
  },
  '科技實木門': {
    series: '科技實木門系列',
    need: '木紋美感、耐用與穩定',
    feature: '科技木皮、抗變形、自然紋理',
    price: 'NT$ 7.2 萬起',
    anchor: 'prod-tech-wood'
  },
  '石材玄關門': {
    series: '石材玄關門系列',
    need: '厚實氣場、高端外觀',
    feature: '天然石材視覺、雙面造型、門面重量感',
    price: 'NT$ 9.8 萬起',
    anchor: 'prod-stone'
  }
};

async function loadSharedPartial(selector, path, fallbackHTML = '') {
  const mount = document.querySelector(selector);
  if (!mount) return;

  try {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
    mount.outerHTML = await response.text();
  } catch (error) {
    console.warn(`[Shared Layout] ${error.message}. Using fallback markup.`);
    if (fallbackHTML) {
      mount.outerHTML = fallbackHTML;
    }
  }
}

function markActiveNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const targetPage = href.replace('./', '').split('/').pop();
    link.classList.toggle('active', targetPage === currentPage);
  });
}

async function loadSharedLayout() {
  await Promise.all([
    loadSharedPartial('[data-shared-header]', './components/header.partial', SHARED_HEADER_FALLBACK),
    loadSharedPartial('[data-shared-footer]', './components/footer.partial', SHARED_FOOTER_FALLBACK),
    loadSharedPartial('[data-shared-fab]', './components/fab.partial', SHARED_FAB_FALLBACK)
  ]);
  markActiveNavigation();
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadSharedLayout();

  // ============================================
  // 1. GSAP — Register ScrollTrigger
  // ============================================
  gsap.registerPlugin(ScrollTrigger);


  // ============================================
  // 2. HEADER — Glassmorphism on Scroll
  // ============================================
  const header = document.getElementById('site-header');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }


  // ============================================
  // 3. MOBILE MENU — Hamburger Toggle
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Animate mobile menu links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link, i) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Observe menu activation to stagger-in links
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          if (mobileMenu.classList.contains('active')) {
            mobileLinks.forEach((link, i) => {
              gsap.fromTo(link, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, delay: 0.1 + i * 0.08, duration: 0.5, ease: 'power3.out' }
              );
            });
          }
        }
      });
    });
    observer.observe(mobileMenu, { attributes: true });
  }


  // ============================================
  // 4. GSAP — Hero Entrance Animations
  // ============================================
  const heroElements = document.querySelectorAll('.hero .gsap-fade-up');
  if (heroElements.length > 0) {
    gsap.fromTo(heroElements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
      }
    );
  }

  const subpageHeroElements = document.querySelectorAll('.page-hero .gsap-fade-up');
  if (subpageHeroElements.length > 0) {
    gsap.fromTo(subpageHeroElements,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2
      }
    );
  }

  // Hero background parallax
  const heroBgImg = document.getElementById('hero-bg-img');
  if (heroBgImg) {
    gsap.to(heroBgImg, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }


  // ============================================
  // 5. GSAP — ScrollTrigger Animations
  // ============================================
  
  // Generic Fade Up elements (outside hero)
  const fadeUpElements = document.querySelectorAll('.section .gsap-fade-up');
  fadeUpElements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Fade Left elements
  const fadeLeftElements = document.querySelectorAll('.gsap-fade-left');
  fadeLeftElements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Fade Right elements
  const fadeRightElements = document.querySelectorAll('.gsap-fade-right');
  fadeRightElements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Scale In elements
  const scaleInElements = document.querySelectorAll('.gsap-scale-in');
  scaleInElements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // CTA Banner parallax
  const ctaBannerBg = document.querySelector('.cta-banner-bg img');
  if (ctaBannerBg) {
    gsap.to(ctaBannerBg, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.cta-banner',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }


  // ============================================
  // 6. TRUST NUMBERS — Counter Animation
  // ============================================
  const trustNumbers = document.querySelectorAll('.trust-number[data-count]');
  trustNumbers.forEach((el) => {
    const target = parseInt(el.getAttribute('data-count'));
    
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        const obj = { count: 0 };
        gsap.to(obj, {
          count: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            const current = Math.floor(obj.count);
            if (target >= 1000) {
              el.textContent = (current / 1000).toFixed(0) + 'K+';
            } else {
              el.textContent = current + (el.closest('.trust-card')?.querySelector('.trust-label')?.textContent.includes('%') ? '%' : '+');
            }
          }
        });
      },
      once: true
    });
  });


  // ============================================
  // 7. SMART DOOR ADVISOR — Logic
  // ============================================
  const advisorBtn = document.getElementById('advisor-submit-btn');
  const advisorResult = document.getElementById('advisor-result');
  const advisorResultTitle = document.getElementById('advisor-result-title');
  const advisorResultDesc = document.getElementById('advisor-result-desc');
  const advisorResultTags = document.getElementById('advisor-result-tags');
  const advisorResultLink = document.getElementById('advisor-result-link');

  // Recommendation database
  const recommendations = {
    // 🏠 透天別墅 (villa)
    'villa-security': {
      title: '🛡️ 推薦：碳纖防爆門系列',
      desc: '透天別墅入口面積大、暴露面多，建議選擇「碳纖防爆門」，高強度防護力兼具現代美學，有效阻隔戶外噪音與破壞。',
      tags:['碳纖防爆', '頂級防護', '抗破壞']
    },
    'villa-soundproof': {
      title: '🔇 推薦：雙玄關門雙視窗系列',
      desc: '透天別墅最怕臨路噪音，雙玄關雙視窗的設計，內外雙層門扇系統可有效隔絕噪音，讓您享有絕對寧靜。',
      tags:['雙層隔音', '雙視窗', '極致寧靜']
    },
    'villa-waterproof': {
      title: '💧 推薦：防水防污門系列',
      desc: '透天大門直面風雨，防水防污門採用特殊塗裝與材質，無懼海島型氣候的嚴酷考驗，常保如新。',
      tags:['特殊塗裝', '抗候防鏽', '防水防污']
    },
    'villa-luxury': {
      title: '✨ 推薦：羅浮宮浮雕門系列',
      desc: '透天的門面即是品味象徵。羅浮宮浮雕門以立體雕塑表現、肌理質感，展現歐式宮廷級的尊貴氣度。',
      tags: ['立體浮雕', '藝術肌理', '歐式美學']
    },

    // 🏢 電梯大樓 (elevator)
    'elevator-security': {
      title: '🛡️ 推薦：鋼製壓板門系列',
      desc: '電梯大樓多為公共走道，鋼製壓板門以高強度鋼板打造，在有限的門洞中提供最大化的防盜性能。',
      tags:['高強度鋼板', '堅固防護', '實用首選']
    },
    'elevator-soundproof': {
      title: '🔇 推薦：雙玄關門 A 系列',
      desc: '大樓走道人來人往，雙玄關 A 系列能有效阻隔電梯運轉、鄰居開關門等日常噪音。',
      tags:['阻隔走道音', '雙玄關', '氣密結構']
    },
    'elevator-waterproof': {
      title: '💨 推薦：百頁通風門系列',
      desc: '大樓梯間若較悶熱，百頁通風門可兼顧隱私與空氣對流，讓室內保持通風乾爽。',
      tags: ['空氣對流', '隱私防護', '通風設計']
    },
    'elevator-luxury': {
      title: '✨ 推薦：烤漆精雕門系列',
      desc: '在大樓統一的走道中脫穎而出。精密的雕花搭配烤漆面板，細膩的光澤讓您的門成為整層樓最優雅的存在。',
      tags:['精密雕花', '烤漆質感', '優雅出眾']
    },

    // 🏘️ 舊公寓 (apartment)
    'apartment-security': {
      title: '🛡️ 推薦：門中門系列',
      desc: '公寓樓層防盜需求高，門中門設計讓您不需開大門即可確認訪客或收取小件包裹，安全又便利。',
      tags:['免開大門', '防盜紗網', '便利安全']
    },
    'apartment-soundproof': {
      title: '🔇 推薦：日式玄關門系列',
      desc: '簡約的日式玄關門，在單層門扇中實現出色的隔音與氣密效果，為公寓空間增添文雅氣息。',
      tags: ['氣密隔音', '日式美學', '簡約設計']
    },
    'apartment-waterproof': {
      title: '🌲 推薦：科技實木門系列',
      desc: '公寓易受潮，科技實木擁有木質的溫暖外觀，卻比傳統天然實木更耐潮濕、不易變形。',
      tags:['木紋質感', '防潮抗變形', '溫馨風格']
    },
    'apartment-luxury': {
      title: '✨ 推薦：石材玄關門系列',
      desc: '以仿真石材紋理面板重新定義公寓門面，擁有大理石般的奢華視覺，每天回家都像走進精品飯店。',
      tags: ['石材紋理', '精品質感', '氣派門面']
    }
};

  // Default fallback
  const defaultRecommendation = {
    title: '🏠 為您量身定制的選擇',
    desc: '根據您的需求，我們建議您預約專人到府丈量與諮詢。我們的專業團隊將為您的居住環境進行全面評估，推薦最適合的門款方案。',
    tags: ['免費丈量', '專人諮詢', '客製方案']
  };

  if (advisorBtn) {
    advisorBtn.addEventListener('click', () => {
      const env = document.getElementById('advisor-env').value;
      const feature = document.getElementById('advisor-feature').value;

      if (!env || !feature) {
        // Shake animation for missing selection
        gsap.to('#advisor-card', {
          x: [-8, 8, -6, 6, -3, 3, 0],
          duration: 0.5,
          ease: 'power2.out'
        });
        return;
      }

      const key = `${env}-${feature}`;
      const rec = recommendations[key] || defaultRecommendation;

      advisorResultTitle.textContent = rec.title;
      advisorResultDesc.textContent = rec.desc;
      advisorResultTags.innerHTML = rec.tags.map(tag => 
        `<span class="result-tag">${tag}</span>`
      ).join('');

      const recommendationTargetMap = {
        'villa-security': '#prod-carbon',
        'villa-soundproof': '#prod-double-window',
        'villa-waterproof': '#prod-waterproof',
        'villa-luxury': '#prod-louvre',
        'elevator-security': '#prod-steel',
        'elevator-soundproof': '#prod-double-a',
        'elevator-waterproof': '#prod-ventilate',
        'elevator-luxury': '#prod-paint',
        'apartment-security': '#prod-in-door',
        'apartment-soundproof': '#prod-japan',
        'apartment-waterproof': '#prod-tech-wood',
        'apartment-luxury': '#prod-stone'
      };

      if (advisorResultLink) {
        const targetHash = recommendationTargetMap[key] || '#door-series';
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const targetHref = currentPage === 'products.html' ? targetHash : `./products.html${targetHash}`;
        advisorResultLink.setAttribute('href', targetHref);
      }

      advisorResult.classList.add('show');

      // Animate result
      gsap.fromTo(advisorResult,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    });
  }


  // ============================================
  // 8. FLOATING ACTION BUTTON (FAB)
  // ============================================
  const fabMain = document.getElementById('fab-main');
  const fabProgressBar = document.getElementById('fab-progress-bar');
  const fabWrapper = document.getElementById('fab-wrapper');
  const circumference = 2 * Math.PI * 26; // r=26
  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update progress ring on scroll
  function updateProgressRing() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    const offset = circumference - (scrollPercent * circumference);

    if (fabProgressBar) {
      fabProgressBar.style.strokeDashoffset = offset;
    }

    // Show/hide FAB based on scroll position
    if (fabWrapper) {
      if (scrollTop > 300) {
        fabWrapper.style.opacity = '1';
        fabWrapper.style.pointerEvents = 'all';
      } else {
        fabWrapper.style.opacity = '0';
        fabWrapper.style.pointerEvents = 'none';
      }
    }
  }

  // Initialize FAB visibility
  if (fabWrapper) {
    fabWrapper.style.opacity = '0';
    fabWrapper.style.pointerEvents = 'none';
    fabWrapper.style.transition = 'opacity 0.4s ease';
  }

  window.addEventListener('scroll', updateProgressRing);
  updateProgressRing();

  // Scroll to top on click
  if (fabMain) {
    fabMain.addEventListener('click', () => {
      scrollToTopSmooth();
    });
  }

  // Touch device: keep "back to top" behavior consistent
  if (fabWrapper) {
    fabWrapper.addEventListener('touchstart', (e) => {
      if (e.target.closest('.fab-main')) {
        e.preventDefault();
        scrollToTopSmooth();
        fabWrapper.classList.remove('active');
      }
    }, { passive: false });
  }


  // ============================================
  // 9. FEATURE CARDS — Stagger Animation
  // ============================================
  const featureCards = document.querySelectorAll('.feature-card');
  if (featureCards.length > 0) {
    gsap.fromTo(featureCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ============================================
  // 10. SHOWCASE — Stagger Animation
  // ============================================
  const showcaseItems = document.querySelectorAll('.showcase-item');
  if (showcaseItems.length > 0) {
    gsap.fromTo(showcaseItems,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.showcase-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ============================================
  // 11. CTA Banner Content Animation
  // ============================================
  const ctaContent = document.querySelector('.cta-banner-content');
  if (ctaContent) {
    gsap.fromTo(ctaContent,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-banner',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }


  // ============================================
  // 12. SMOOTH SCROLL — for anchor links
  // ============================================
  const getHeaderOffset = () => {
    const siteHeader = document.getElementById('site-header');
    return siteHeader ? siteHeader.offsetHeight + 20 : 100;
  };

  const scrollToHashTarget = (hash, animate = true) => {
    if (!hash || hash === '#') return false;
    const targetEl = document.querySelector(hash);
    if (!targetEl) return false;

    const offsetY = getHeaderOffset();
    if (animate) {
      gsap.to(window, {
        scrollTo: { y: targetEl, offsetY },
        duration: 0.75,
        ease: 'power2.inOut'
      });
    } else {
      const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - offsetY;
      window.scrollTo(0, Math.max(0, targetTop));
    }
    return true;
  };

  if (window.location.hash) {
    setTimeout(() => {
      scrollToHashTarget(window.location.hash, false);
    }, 60);
  }

  const highlightTargetCard = () => {
    const hash = window.location.hash;
    if (!hash || !hash.startsWith('#prod-')) return;

    const targetCard = document.querySelector(hash);
    if (!targetCard) return;

    targetCard.classList.add('card-highlight');
    setTimeout(() => {
      targetCard.classList.remove('card-highlight');
    }, 2200);
  };

  if (window.location.hash) {
    setTimeout(highlightTargetCard, 140);
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      e.preventDefault();
      if (targetId.startsWith('#prod-')) {
        if (window.location.hash !== targetId) {
          window.location.hash = targetId;
        }
        setTimeout(highlightTargetCard, 80);
      }
      scrollToHashTarget(targetId, true);
    });
  });


  // ============================================
  // 13. FAQ ACCORDION — Category Tabs + Toggle
  // ============================================
  const faqTabs = document.getElementById('faq-tabs');
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqTabs && faqItems.length > 0) {
    // Tab filtering
    faqTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.faq-tab');
      if (!tab) return;

      // Update active tab
      faqTabs.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      faqItems.forEach(item => {
        // Close any open items
        item.classList.remove('open');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = '0';

        // Filter by category
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });

    // Accordion toggle
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        const answer = item.querySelector('.faq-answer');
        const answerInner = item.querySelector('.faq-answer-inner');

        // Close all other items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            const otherAnswer = other.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = '0';
          }
        });

        // Toggle this item
        if (isOpen) {
          item.classList.remove('open');
          answer.style.maxHeight = '0';
        } else {
          item.classList.add('open');
          answer.style.maxHeight = answerInner.scrollHeight + 32 + 'px';
        }
      });
    });
  }


  // ============================================
  // 14. INTERACTIVE STORE MAP — Leaflet
  // ============================================
  const mapEl = document.getElementById('store-map-leaflet');

  if (mapEl && typeof L !== 'undefined') {
    // Store data with real lat/lng
    const stores = {
      yonghe: {
        name: '永和旗艦店',
        address: '新北市永和區仁愛路166號1樓',
        lat: 24.9962,
        lng: 121.5134,
        phone: '02-8923-0772',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8C%97%E5%B8%82%E6%B0%B8%E5%92%8C%E5%8D%80%E4%BB%81%E6%84%9B%E8%B7%AF166%E8%99%9F1%E6%A8%93'
      },
      luzhou: {
        name: '蘆洲展示中心',
        address: '新北市蘆洲區中山一路80號1樓',
        lat: 25.0847,
        lng: 121.4738,
        phone: '02-2848-7783',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8C%97%E5%B8%82%E8%98%86%E6%B4%B2%E5%8D%80%E4%B8%AD%E5%B1%B1%E4%B8%80%E8%B7%AF80%E8%99%9F1%E6%A8%93'
      },
      xinyi: {
        name: '信義精品店',
        address: '臺北市基隆路二段215號1樓',
        lat: 25.0261,
        lng: 121.5567,
        phone: '02-8732-8128',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E8%87%BA%E5%8C%97%E5%B8%82%E5%9F%BA%E9%9A%86%E8%B7%AF%E4%BA%8C%E6%AE%B5215%E8%99%9F1%E6%A8%93'
      },
      jianguo: {
        name: '建國旗艦店',
        address: '臺北市建國北路三段169號1樓',
        lat: 25.0659,
        lng: 121.5370,
        phone: '02-2501-6706',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E8%87%BA%E5%8C%97%E5%B8%82%E5%BB%BA%E5%9C%8B%E5%8C%97%E8%B7%AF%E4%B8%89%E6%AE%B5169%E8%99%9F1%E6%A8%93'
      },
      taoyuan: {
        name: '桃園旗艦店',
        address: '桃園市桃園區經國路695號1樓',
        lat: 24.9969,
        lng: 121.2942,
        phone: '03-325-9837',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E5%9C%92%E5%B8%82%E6%A1%83%E5%9C%92%E5%8D%80%E7%B6%93%E5%9C%8B%E8%B7%AF695%E8%99%9F1%E6%A8%93'
      },
      yilan: {
        name: '宜蘭服務處',
        address: '宜蘭縣美功路一段41巷22號1樓',
        lat: 24.7517,
        lng: 121.7532,
        phone: '03-9301487',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E5%AE%9C%E8%98%AD%E7%B8%A3%E7%BE%8E%E5%8A%9F%E8%B7%AF%E4%B8%80%E6%AE%B541%E5%B7%B722%E8%99%9F1%E6%A8%93'
      }
    };

    // Init map centered on first store
    const map = L.map('store-map-leaflet', {
      zoomControl: true,
      scrollWheelZoom: true
    }).setView([25.0261, 121.5000], 11);

    // Use OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 18
    }).addTo(map);

    // Custom gold marker icon
    const goldIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        width: 30px; height: 30px;
        background: linear-gradient(135deg, #C5A059, #A8863D);
        border: 3px solid #F5F5F5;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      "><div style="
        width: 8px; height: 8px;
        background: #F5F5F5;
        border-radius: 50%;
        margin: 8px auto;
      "></div></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });

    // Add markers
    const markers = {};
    Object.entries(stores).forEach(([key, store]) => {
      const marker = L.marker([store.lat, store.lng], { icon: goldIcon }).addTo(map);
      marker.bindPopup(`
        <h4>${store.name}</h4>
        <p>${store.address}</p>
        <p style="color: #C5A059 !important;margin-top:4px !important;">${store.phone}</p>
        <p style="margin-top:8px !important;"><a href="${store.mapUrl}" target="_blank" rel="noopener noreferrer" style="color:#C5A059 !important;text-decoration:underline;">開啟 Google Maps</a></p>
      `);
      markers[key] = marker;
    });

    // Open first store popup
    markers.yonghe.openPopup();

    // Store card click — fly to location
    const storeCards = document.querySelectorAll('.store-card');
    const storeActionLinks = document.querySelectorAll('.store-actions a');
    storeActionLinks.forEach((link) => {
      link.addEventListener('click', (e) => e.stopPropagation());
    });

    storeCards.forEach(card => {
      card.addEventListener('click', () => {
        const storeKey = card.getAttribute('data-store');
        const store = stores[storeKey];
        if (!store) return;

        // Update active card
        storeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Fly to marker
        map.flyTo([store.lat, store.lng], 15, {
          duration: 1.5,
          easeLinearity: 0.25
        });

        // Open popup after fly animation
        setTimeout(() => {
          markers[storeKey].openPopup();
        }, 1500);
      });
    });

    // Fix Leaflet rendering issues when container becomes visible
    setTimeout(() => { map.invalidateSize(); }, 300);

    // Also recalculate on scroll (for lazy-loaded sections)
    ScrollTrigger.create({
      trigger: '#store-map',
      start: 'top 80%',
      onEnter: () => {
        setTimeout(() => map.invalidateSize(), 200);
      }
    });
  }


  // ============================================
  // 15. BOOKING FORM — Submission Handler
  // ============================================
  const bookingForm = document.getElementById('booking-form');
  const bookingSuccess = document.getElementById('booking-success');
  const bookingResetBtn = document.getElementById('booking-reset-btn');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate form submission
      const submitBtn = document.getElementById('booking-submit-btn');
      submitBtn.textContent = '⏳ 送出中...';
      submitBtn.disabled = true;

      setTimeout(() => {
        // Hide form, show success
        const bookingCard = bookingForm.closest('.booking-card');
        if (bookingCard) bookingCard.style.display = 'none';
        bookingSuccess.classList.add('show');

        // Animate success
        gsap.from(bookingSuccess, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
      }, 1200);
    });

    if (bookingResetBtn) {
      bookingResetBtn.addEventListener('click', () => {
        // Reset and show form again
        bookingForm.reset();
        const bookingCard = bookingForm.closest('.booking-card');
        if (bookingCard) bookingCard.style.display = '';
        bookingSuccess.classList.remove('show');

        const submitBtn = document.getElementById('booking-submit-btn');
        submitBtn.innerHTML = '<span>📅</span> 送出預約申請';
        submitBtn.disabled = false;
      });
    }
  }


  // ============================================
  // 12. PRODUCTS PAGE — Filter Tabs
  // ============================================
  const doorFilterTabs = document.querySelectorAll('#door-filter-tabs .pf-tab');
  const productCards = document.querySelectorAll('#door-grid .product-card');

  if (doorFilterTabs.length > 0) {
    const refreshProductTriggers = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
        });
      });
    };

    doorFilterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        doorFilterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        productCards.forEach((card, index) => {
          const categories = card.getAttribute('data-category');
          const shouldShow = filter === 'all' || categories.includes(filter);

          gsap.killTweensOf(card);

          if (shouldShow) {
            card.classList.remove('hiding');

            gsap.fromTo(card,
              { opacity: 0, y: 20, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: 'power3.out',
                delay: index * 0.03
              }
            );
          } else {
            card.classList.add('hiding');
          }
        });

        refreshProductTriggers();
      });
    });
  }


  // ============================================
  // 13. PRODUCTS PAGE — Variant Image Switcher
  // ============================================
  const variantThumbs = document.querySelectorAll('.variant-thumb');

  variantThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const targetId = thumb.getAttribute('data-target');
      const newSrc = thumb.getAttribute('data-src');
      const targetImg = document.getElementById(targetId);

      if (!targetImg) return;

      // Update active state within the same variant group
      const siblings = thumb.closest('.product-variants').querySelectorAll('.variant-thumb');
      siblings.forEach(s => s.classList.remove('active'));
      thumb.classList.add('active');

      // Smooth image transition
      gsap.to(targetImg, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          targetImg.src = newSrc;
          gsap.to(targetImg, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });

      // Also update the wishlist button's data-img
      const card = thumb.closest('.product-card');
      if (card) {
        const wishBtn = card.querySelector('.product-wishlist-btn');
        if (wishBtn) wishBtn.setAttribute('data-img', newSrc);
      }
    });
  });

  // Product detail row toggle (cards in the same row open/close together)
  const productDetailToggles = document.querySelectorAll('.product-detail-toggle');

  productDetailToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const clickedCard = btn.closest('.product-card');
      if (!clickedCard) return;

      const visibleCards = Array.from(document.querySelectorAll('#door-grid .product-card'))
        .filter(card => !card.classList.contains('hiding'));
      const clickedTop = clickedCard.offsetTop;

      // Cards sharing similar offsetTop are treated as the same visual row.
      const rowCards = visibleCards.filter(card => Math.abs(card.offsetTop - clickedTop) < 8);
      const rowPanels = rowCards
        .map(card => card.querySelector('.product-detail-panel'))
        .filter(Boolean);
      const rowButtons = rowCards
        .map(card => card.querySelector('.product-detail-toggle'))
        .filter(Boolean);

      if (rowPanels.length === 0) return;

      const shouldOpen = rowPanels.some(panel => !panel.classList.contains('open'));

      rowPanels.forEach((panel) => {
        panel.classList.toggle('open', shouldOpen);
      });

      rowButtons.forEach((toggleBtn) => {
        toggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      });

      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  });


  // ============================================
  // 14. PRODUCTS PAGE — Wishlist (localStorage)
  // ============================================
  const WISHLIST_STORAGE_KEY = 'guobaoWishlist';
  const LEGACY_WISHLIST_STORAGE_KEY = 'eliteDoorWishlist';

  function migrateLegacyWishlistIfNeeded() {
    try {
      const hasNewKey = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (hasNewKey) return;

      const legacyRaw = localStorage.getItem(LEGACY_WISHLIST_STORAGE_KEY);
      if (!legacyRaw) return;

      const legacyData = JSON.parse(legacyRaw);
      if (!Array.isArray(legacyData)) return;

      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(legacyData));
      localStorage.removeItem(LEGACY_WISHLIST_STORAGE_KEY);
    } catch (e) {
      // Ignore corrupted legacy data to avoid breaking page initialization.
    }
  }

  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveWishlist(list) {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
  }

  function showToast(message) {
    const toast = document.getElementById('wishlist-toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add('show');

    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  function updateWishlistButtons() {
    const wishlist = getWishlist();
    const allBtns = document.querySelectorAll('.product-wishlist-btn');

    allBtns.forEach(btn => {
      const name = btn.getAttribute('data-product');
      if (wishlist.some(item => item.name === name)) {
        btn.classList.add('wishlisted');
      } else {
        btn.classList.remove('wishlisted');
      }
    });
  }

  migrateLegacyWishlistIfNeeded();

  // Initialize wishlist state
  updateWishlistButtons();

  // Wishlist button clicks
  const wishlistBtns = document.querySelectorAll('.product-wishlist-btn');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.getAttribute('data-product');
      const img = btn.getAttribute('data-img');

      let wishlist = getWishlist();
      const existingIndex = wishlist.findIndex(item => item.name === name);

      if (existingIndex > -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        btn.classList.remove('wishlisted');
        showToast(`已從願望清單移除「${name}」`);
      } else {
        // Add to wishlist
        wishlist.push({ name, img, addedAt: Date.now() });
        btn.classList.add('wishlisted');
        showToast(`已將「${name}」加入願望清單 ❤️`);

        // Pulse animation
        gsap.fromTo(btn,
          { scale: 1 },
          { scale: 1.3, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.inOut' }
        );
      }

      saveWishlist(wishlist);
    });
  });

  // ============================================
  // 14-1. WISHLIST PAGE — Render & Compare
  // ============================================
  const wishlistGrid = document.getElementById('wishlist-grid');
  const wishlistEmpty = document.getElementById('wishlist-empty');
  const wishlistCountText = document.getElementById('wishlist-count-text');
  const wishlistClearBtn = document.getElementById('wishlist-clear-btn');
  const compareHint = document.getElementById('compare-hint');
  const compareSelect1 = document.getElementById('compare-select-1');
  const compareSelect2 = document.getElementById('compare-select-2');
  const compareSelect3 = document.getElementById('compare-select-3');
  const compareTableWrap = document.getElementById('compare-table-wrap');
  const compareTable = document.getElementById('compare-table');

  if (wishlistGrid) {
    const compareSelects = [compareSelect1, compareSelect2, compareSelect3].filter(Boolean);
    const selectedCompare = ['', '', ''];

    const getMeta = (name) => WISHLIST_PRODUCT_META[name] || {
      series: '玄關門系列',
      need: '依現場需求評估',
      feature: '客製化規格',
      price: '歡迎洽詢',
      anchor: ''
    };

    const renderCompareSelectOptions = (wishlist) => {
      if (compareSelects.length === 0) return;

      compareSelects.forEach((select, index) => {
        const currentValue = selectedCompare[index] || '';
        const options = [
          `<option value="">請選擇門款</option>`,
          ...wishlist.map((item) => `<option value="${item.name}">${item.name}</option>`)
        ];
        select.innerHTML = options.join('');
        select.value = wishlist.some(item => item.name === currentValue) ? currentValue : '';
        selectedCompare[index] = select.value;
      });
    };

    const renderCompareTable = () => {
      const wishlist = getWishlist();
      const selectedNames = selectedCompare.filter(Boolean);
      const selectedItems = selectedNames
        .map((name) => wishlist.find(item => item.name === name))
        .filter(Boolean);

      if (selectedItems.length < 2) {
        compareTableWrap.hidden = true;
        compareHint.textContent = `已選 ${selectedItems.length} 款，請再選擇至少 2 款門型開始對比。`;
        return;
      }

      compareHint.textContent = `已選 ${selectedItems.length} 款門型進行對比。`;

      const rows = [
        { label: '系列定位', getter: (m) => m.series },
        { label: '適合需求', getter: (m) => m.need },
        { label: '主要特色', getter: (m) => m.feature },
        { label: '參考價格', getter: (m) => m.price },
        {
          label: '查看門款',
          getter: (m, item) => {
            if (!m.anchor) return '—';
            return `<a href="./products.html#${m.anchor}">前往 ${item.name}</a>`;
          }
        }
      ];

      const headerCells = selectedItems.map(item => `<th>${item.name}</th>`).join('');
      const bodyRows = rows.map((row) => {
        const cells = selectedItems.map((item) => {
          const meta = getMeta(item.name);
          return `<td>${row.getter(meta, item) || '—'}</td>`;
        }).join('');
        return `<tr><th scope="row">${row.label}</th>${cells}</tr>`;
      }).join('');

      compareTable.innerHTML = `
        <thead>
          <tr>
            <th>比較項目</th>
            ${headerCells}
          </tr>
        </thead>
        <tbody>
          ${bodyRows}
        </tbody>
      `;
      compareTableWrap.hidden = false;
    };

    const renderWishlistPage = () => {
      const wishlist = getWishlist().sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
      const names = new Set(wishlist.map(item => item.name));

      selectedCompare.forEach((name, index) => {
        if (name && !names.has(name)) selectedCompare[index] = '';
      });

      if (selectedCompare.every(v => !v) && wishlist.length >= 2) {
        selectedCompare[0] = wishlist[0].name;
        selectedCompare[1] = wishlist[1].name;
      }

      wishlistCountText.textContent = `目前 ${wishlist.length} 款`;
      wishlistGrid.innerHTML = '';
      renderCompareSelectOptions(wishlist);

      if (wishlist.length === 0) {
        wishlistEmpty.hidden = false;
        compareSelects.forEach((select) => {
          select.innerHTML = '<option value="">請先加入門款</option>';
          select.value = '';
        });
        compareTableWrap.hidden = true;
        compareHint.textContent = '加入門款後即可開始對比。';
        return;
      }

      wishlistEmpty.hidden = true;

      wishlist.forEach((item) => {
        const meta = getMeta(item.name);
        const productHref = meta.anchor ? `./products.html#${meta.anchor}` : './products.html';

        const card = document.createElement('article');
        card.className = 'wishlist-item';
        card.innerHTML = `
          <div class="wishlist-item-img">
            <img src="${item.img || './images/door-carbon.jpg'}" alt="${item.name}" loading="lazy">
          </div>
          <div class="wishlist-item-body">
            <h4>${item.name}</h4>
            <p>${meta.feature}</p>
            <ul class="wishlist-item-meta">
              <li><strong>系列：</strong>${meta.series}</li>
              <li><strong>需求：</strong>${meta.need}</li>
              <li><strong>價格：</strong>${meta.price}</li>
            </ul>
            <div class="wishlist-item-actions">
              <div class="wishlist-item-links">
                <a href="${productHref}">查看門款</a>
                <button type="button" class="wishlist-remove-btn" data-remove-name="${item.name}" aria-label="移除 ${item.name}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        `;
        wishlistGrid.appendChild(card);
      });

      wishlistGrid.querySelectorAll('[data-remove-name]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const name = btn.getAttribute('data-remove-name');
          const list = getWishlist().filter(item => item.name !== name);
          saveWishlist(list);
          for (let i = 0; i < selectedCompare.length; i += 1) {
            if (selectedCompare[i] === name) selectedCompare[i] = '';
          }
          renderWishlistPage();
          showToast(`已從願望清單移除「${name}」`);
        });
      });

      renderCompareTable();
    };

    compareSelects.forEach((select, index) => {
      select.addEventListener('change', () => {
        const nextValue = select.value;
        if (nextValue && selectedCompare.some((value, i) => i !== index && value === nextValue)) {
          showToast('同一款門型不可重複對比');
          select.value = selectedCompare[index] || '';
          return;
        }
        selectedCompare[index] = nextValue;
        renderCompareTable();
      });
    });

    if (wishlistClearBtn) {
      wishlistClearBtn.addEventListener('click', () => {
        saveWishlist([]);
        for (let i = 0; i < selectedCompare.length; i += 1) selectedCompare[i] = '';
        renderWishlistPage();
        showToast('願望清單已清空');
      });
    }

    renderWishlistPage();
  }


  // ============================================
  // 15. PRODUCTS PAGE — Quick Nav Active State
  // ============================================
  const productQuickNav = document.getElementById('product-quick-nav');

  if (productQuickNav) {
    const pqnLinks = productQuickNav.querySelectorAll('.pqn-link');
    const sections = [];

    pqnLinks.forEach(link => {
      const targetId = link.getAttribute('data-target');
      const section = document.getElementById(targetId);
      if (section) sections.push({ link, section });
    });

    // Update active link on scroll
    if (sections.length > 0) {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: () => {
          const scrollY = window.scrollY + 200;

          let activeLink = sections[0].link;

          sections.forEach(({ link, section }) => {
            if (section.offsetTop <= scrollY) {
              activeLink = link;
            }
          });

          pqnLinks.forEach(l => l.classList.remove('active'));
          activeLink.classList.add('active');
        }
      });
    }

    // Smooth scroll on click
    pqnLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
          gsap.to(window, {
            scrollTo: { y: target, offsetY: 130 },
            duration: 0.8,
            ease: 'power3.inOut'
          });
        }
      });
    });
  }


  // ============================================
  // 16. PRODUCTS PAGE — Color Swatch Interaction
  // ============================================
  const colorSwatchesLarge = document.querySelectorAll('.color-swatch-large');

  colorSwatchesLarge.forEach(swatch => {
    swatch.addEventListener('mouseenter', () => {
      gsap.to(swatch.querySelector('.swatch-visual'), {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    swatch.addEventListener('mouseleave', () => {
      gsap.to(swatch.querySelector('.swatch-visual'), {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

});

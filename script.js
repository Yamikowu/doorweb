/* ============================================
   ÉLITE DOOR — Main JavaScript
   GSAP Animations, Interactive Features, FAB
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

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

  // Recommendation database
  const recommendations = {
    'villa-security': {
      title: '🛡️ 推薦：碳纖防爆門 — 「曜黑之盾」',
      desc: '透天別墅入口面積大、暴露面多，建議選擇碳纖維防爆門板搭配三點式鎖閂系統，兼具 C4 防爆等級與現代美學。厚實的門扇亦能有效阻隔戶外噪音。',
      tags: ['碳纖防爆', '三點鎖閂', 'C4 認證']
    },
    'villa-soundproof': {
      title: '🔇 推薦：雙玄關門系列 — 「靜謐堡壘」',
      desc: '雙玄關門的內外雙框雙氣密結構，是隔音的王者方案。獨立雙層門扇系統可有效隔絕 50dB 以上噪音，讓透天別墅也能享有五星級的寧靜。',
      tags: ['雙層隔音', '雙氣密條', '50dB+ 隔音']
    },
    'villa-waterproof': {
      title: '💧 推薦：防水防污門系列 — 「雨幕衛士」',
      desc: '透天別墅大門直面風雨，我們的防水防污門採用 14 層奈米防腐塗裝，通過 2000 小時鹽霧測試，無懼海島型氣候的嚴酷考驗。',
      tags: ['奈米塗裝', '2000H 鹽霧', '防水防污']
    },
    'villa-luxury': {
      title: '✨ 推薦：鑄鋁雕花門 — 「晨暮金淬」',
      desc: '透天別墅的門面即是品味的象徵。鑄鋁雕花門以整塊鋁合金一體成型，搭配手工鍛造花飾，展現歐式宮廷級的尊貴氣度。',
      tags: ['鑄鋁一體成型', '手工鍛造', '歐式美學']
    },
    'villa-smart': {
      title: '🔓 推薦：智能玄關門 — 「未來居所」',
      desc: '為透天別墅量身打造的智能門系統，整合人臉辨識、指紋掃描與手機 NFC/藍牙解鎖，搭配遠端即時監控，出門在外也能掌握家門動態。',
      tags: ['人臉辨識', 'NFC 解鎖', '遠端監控']
    },
    'elevator-security': {
      title: '🛡️ 推薦：鋼製壓板門 — 「鐵壁守護」',
      desc: '電梯大樓多為公共走道環境，鋼製壓板門以高強度冷軋鋼板打造，搭配防撬門框與 C 級鎖芯，在有限門洞中提供最大化的防盜性能。',
      tags: ['冷軋鋼板', '防撬門框', 'C 級鎖芯']
    },
    'elevator-soundproof': {
      title: '🔇 推薦：雙玄關門系列 A — 「寂靜層峰」',
      desc: '大樓走道人來人往，雙玄關 A 系列的雙層氣密結構能有效阻隔電梯運轉、鄰居開關門等日常噪音，讓您在家中享有絕對的寧靜空間。',
      tags: ['雙層門扇', '走道隔音', '氣密封條']
    },
    'elevator-waterproof': {
      title: '💧 推薦：防水防污門 — 「恆淨系列」',
      desc: '大樓走廊的清潔水汽、梅雨季的潮濕環境，防水防污門的奈米鍍膜技術讓門面常保如新，維護保養更是輕鬆省力。',
      tags: ['奈米鍍膜', '易清潔', '防潮設計']
    },
    'elevator-luxury': {
      title: '✨ 推薦：烤漆精雕門 — 「雅典娜」',
      desc: '在大樓統一的走道中脫穎而出——精密 CNC 雕花搭配鋼琴烤漆面板，細膩的光澤質感讓您的門成為整層樓最優雅的存在。',
      tags: ['CNC 精雕', '鋼琴烤漆', '獨特設計']
    },
    'elevator-smart': {
      title: '🔓 推薦：智能電子門 — 「數位門禁」',
      desc: '電梯大樓最適合導入電子鎖系統，支援密碼、卡片、指紋、手機藍牙四合一解鎖，並可搭配社區門禁系統，實現無縫智慧生活。',
      tags: ['四合一解鎖', '社區整合', '智慧門禁']
    },
    'apartment-security': {
      title: '🛡️ 推薦：鋼製壓板門 — 「堅甲系列」',
      desc: '公寓樓層較低、防盜需求高，鋼製壓板門的紮實鋼構搭配防剪鎖栓設計，為您構築最堅實的第一道防線，性價比之王。',
      tags: ['高強鋼構', '防剪鎖栓', '高 CP 值']
    },
    'apartment-soundproof': {
      title: '🔇 推薦：日式玄關門 — 「和風靜界」',
      desc: '日式玄關門採用高密度隔音填充搭配崁入式氣密條，在單層門扇中實現出色的隔音效果，簡約設計也為公寓空間增添文雅氣息。',
      tags: ['高密度填充', '氣密隔音', '日式美學']
    },
    'apartment-waterproof': {
      title: '💧 推薦：防水防污門 — 「晴雨門」',
      desc: '低樓層公寓易受返潮影響，防水防污門的全密封防水結構，有效抵禦濕氣入侵，讓您的玄關門歷久彌新。',
      tags: ['全密封結構', '防潮防鏽', '耐候塗層']
    },
    'apartment-luxury': {
      title: '✨ 推薦：石材玄關門 — 「大理石幻境」',
      desc: '以仿真石材紋理面板重新定義公寓門面，擁有大理石般的奢華視覺效果，卻具備金屬門的防護性能，每天回家都像走進精品飯店。',
      tags: ['石材紋理', '精品質感', '金屬防護']
    },
    'apartment-smart': {
      title: '🔓 推薦：智能安全門 — 「智護衛」',
      desc: '為公寓量身打造的入門級智能方案，支援電子密碼與指紋辨識雙模式，安裝便捷、操作直覺，讓科技守護每一天的回家路。',
      tags: ['指紋解鎖', '密碼鍵盤', '便捷安裝']
    },
    'commercial-security': {
      title: '🛡️ 推薦：防火防爆門 — 「商盾」',
      desc: '商業空間須符合消防法規甲種防火門 F60A 等級，我們的防火防爆門可開立合格證書與標章，安全與法規兩全其美。',
      tags: ['F60A 認證', '防火證書', '消防法規']
    },
    'commercial-soundproof': {
      title: '🔇 推薦：特規隔音門 — 「會議室級」',
      desc: '針對商辦、診所、錄音室等高隔音需求場域，提供客製化特規隔音門方案，隔音量可達 55dB 以上，打造專業級靜音空間。',
      tags: ['客製規格', '55dB+ 隔音', '商業方案']
    },
    'commercial-waterproof': {
      title: '💧 推薦：工業防水門 — 「鐵衛」',
      desc: '針對倉儲、地下室等高濕度商業場所，採用熱浸鍍鋅鋼材搭配工業級防水膠條，從容應對最惡劣的使用環境。',
      tags: ['熱浸鍍鋅', '工業級防水', '高耐久']
    },
    'commercial-luxury': {
      title: '✨ 推薦：藝術大門 — 「品牌門面」',
      desc: '商業空間的大門即是品牌形象。我們提供全客製藝術大門設計，從 LOGO 融入到材質配色，為您的品牌打造獨一無二的第一印象。',
      tags: ['全客製設計', 'LOGO 整合', '品牌門面']
    },
    'commercial-smart': {
      title: '🔓 推薦：商辦門禁系統 — 「智辦」',
      desc: '整合刷卡、人臉辨識與訪客管理系統的商辦門禁方案，支援雲端後台管理進出紀錄，為企業安全管理提供完整解決方案。',
      tags: ['門禁管理', '雲端後台', '訪客系統']
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

      advisorResult.classList.add('show');

      // Smooth scroll to result
      gsap.to(window, {
        scrollTo: { y: advisorResult, offsetY: 100 },
        duration: 0.6,
        ease: 'power2.inOut'
      });

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
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 1,
        ease: 'power3.inOut'
      });
    });
  }

  // Touch device: toggle FAB actions on tap
  if (fabWrapper) {
    fabWrapper.addEventListener('touchstart', (e) => {
      if (e.target.closest('.fab-main')) {
        // If actions are visible, scroll to top; otherwise toggle
        if (fabWrapper.classList.contains('active')) {
          gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 1,
            ease: 'power3.inOut'
          });
        }
        fabWrapper.classList.toggle('active');
      }
    }, { passive: true });
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
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      e.preventDefault();
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        gsap.to(window, {
          scrollTo: { y: targetEl, offsetY: 80 },
          duration: 0.8,
          ease: 'power2.inOut'
        });
      }
    });
  });

});

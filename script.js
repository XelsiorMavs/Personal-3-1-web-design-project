// =====================================================
// WAIT FOR PAGE TO FULLY LOAD BEFORE RUNNING ANY SCRIPT
// =====================================================
document.addEventListener('DOMContentLoaded', () => {


  // =====================================================
  // MAINPAGE BLOCK — runs only if <body class="mainpage">
  // =====================================================
  if (document.body.classList.contains('mainpage')) {

    // --- Pull-tab: slow reveal on load ---
    setTimeout(() => {
      document.querySelector('.pull-tab').classList.add('ready');
    }, 100);

    // --- Pull-tab: click to pull out, then navigate ---
    const pullTab = document.querySelector('.pull-tab');
    if (pullTab) {
      pullTab.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        this.style.transform = 'translateY(-50%) translateX(-20px)';
        setTimeout(() => {
          window.location.href = target;
        }, 300);
      });
    } // end pull-tab click handler

    // --- Tagline typing effect ---
    const meinfo = document.querySelector('.meinfo');
    if (meinfo) {
      const fullText = meinfo.textContent;
      meinfo.textContent = '';
      meinfo.classList.add('typing');

      let i = 0;
      function typeChar() {
        if (i < fullText.length) {
          meinfo.textContent += fullText.charAt(i);
          i++;
          setTimeout(typeChar, 60);
        } else {
          meinfo.classList.remove('typing');
          meinfo.classList.add('typed-done');
        }
      } // end typeChar()

      setTimeout(typeChar, 900); // starts just after the 0.8s fade-in finishes
    } // end tagline typing effect

        // --- Flip cards: hover flips on desktop, tap-to-toggle on touch devices only ---
    const flipCards = document.querySelectorAll('.mainpage .flip-card');
    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        const supportsHover = window.matchMedia('(hover: hover)').matches;
        if (!supportsHover) {
          card.classList.toggle('flipped');
        }
      });
    }); // end flip cards
        // --- Background toggle: swaps between plain and image background ---
    const bgToggle = document.querySelector('.bg-toggle');
    const bgLayer = document.querySelector('.bg-image-layer');
    if (bgToggle && bgLayer) {
      bgToggle.addEventListener('click', () => {
        bgLayer.classList.toggle('active');
        document.body.classList.toggle('bg-active');
      });
    } // end background toggle
  } // end mainpage block


  // =====================================================
  // LIBRARY BLOCK — runs only if <body class="page-library">
  // =====================================================
  if (document.body.classList.contains('page-library')) {

    // --- Pull-tab: slow reveal on load ---
    setTimeout(() => {
      document.querySelector('.pull-tab').classList.add('ready');
    }, 100);

    // --- Pull-tab: click to pull out, then navigate ---
    const pullTab = document.querySelector('.pull-tab');
    if (pullTab) {
      pullTab.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        this.style.transform = 'translateY(-50%) translateX(-20px)';
        setTimeout(() => {
          window.location.href = target;
        }, 300);
      });
    } // end pull-tab click handler

    // --- Background toggle: swaps between plain and image background ---
    const bgToggle = document.querySelector('.bg-toggle');
    const bgLayer = document.querySelector('.bg-image-layer');
    if (bgToggle && bgLayer) {
      bgToggle.addEventListener('click', () => {
        bgLayer.classList.toggle('active');
      });
    } // end background toggle
  } // end library block


  // =====================================================
  // HOBBY BLOCK — runs only if <body class="page-hobby">
  // (placeholder — not yet built)
  // =====================================================
  if (document.body.classList.contains('page-hobby')) {

  } // end hobby block


}); // end DOMContentLoaded
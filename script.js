document.addEventListener('DOMContentLoaded', () => {

  if (document.body.classList.contains('mainpage')) {

  setTimeout(() => {
    document.querySelector('.pull-tab').classList.add('ready');
  }, 100);

  const pullTab = document.querySelector('.pull-tab');
  if (pullTab) {
    pullTab.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      this.style.transform = 'translateY(-50%) translateX(-20px)';
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  }
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
  }

  setTimeout(typeChar, 900); // starts just after your 0.8s fade-in finishes
}
const flipCards = document.querySelectorAll('.mainpage .flip-card');
flipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

}

  if (document.body.classList.contains('page-library')) {

  setTimeout(() => {
    document.querySelector('.pull-tab').classList.add('ready');
  }, 100);

  const pullTab = document.querySelector('.pull-tab');
  if (pullTab) {
    pullTab.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      this.style.transform = 'translateY(-50%) translateX(-20px)';
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  }

}

  if (document.body.classList.contains('page-hobby')) {
  }

});
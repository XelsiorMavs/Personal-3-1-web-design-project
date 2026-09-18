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
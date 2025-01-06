document.querySelectorAll('.menu-item > a').forEach(link => {
    link.addEventListener('click', function (e) {
      const parent = this.parentElement;
      const submenu = parent.querySelector('.submenu');
      if (submenu) {
        e.preventDefault();
        parent.classList.toggle('open');
      }
    });
  });
  
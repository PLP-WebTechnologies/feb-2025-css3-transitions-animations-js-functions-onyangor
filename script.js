// Load saved theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    document.getElementById('theme').value = savedTheme;
  });
  
  // Save theme preference
  document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  });
  
  // Animate button on click
  document.getElementById('animateBtn').addEventListener('click', function() {
    const btn = this;
    btn.classList.add('animated');
  
    // Remove class after animation ends so it can be re-triggered
    btn.addEventListener('animationend', () => {
      btn.classList.remove('animated');
    }, { once: true });
  });
  
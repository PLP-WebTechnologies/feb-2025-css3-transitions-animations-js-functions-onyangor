// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    document.getElementById('theme').value = savedTheme;
  });
  
  // Save theme change to localStorage
  document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  });
  
  // Rocket animation on button click
  document.getElementById('animateBtn').addEventListener('click', () => {
    const rocket = document.getElementById('rocket');
  
    // Reset animation to allow replay
    rocket.classList.remove('fly');
    void rocket.offsetWidth; // force reflow
    rocket.classList.add('fly');
  });
  
// form script

document.getElementById('taxRebateForm').addEventListener('submit', function(e) {
  e.preventDefault();

  alert('Your tax rebate application has been submitted!');
  this.reset();
});


// toggle script

document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById('navbar-toggle');
  const links = document.getElementById('navbar-links');
  const overlay = document.getElementById('navbar-overlay');
  if (toggle && links && overlay) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('active');
      overlay.classList.toggle('active');
    });
    overlay.addEventListener('click', function() {
      links.classList.remove('active');
      overlay.classList.remove('active');
    });
  }
});
// Load Navbar
fetch('component/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data
  })

// Load Footer
fetch('component/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data
  })

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar')
  if (!navbar) return

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

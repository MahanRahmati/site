document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.getElementById('hero-section')
  const headerName = document.getElementById('header-name')

  if (!heroSection || !headerName) {
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headerName.classList.add('opacity-0')
          headerName.classList.remove('opacity-100')
        } else {
          headerName.classList.add('opacity-100')
          headerName.classList.remove('opacity-0')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '-50px 0px 0px 0px'
    }
  )

  observer.observe(heroSection)
})

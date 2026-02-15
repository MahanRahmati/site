document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle')

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const currentTheme = getInitialTheme()
  applyTheme(currentTheme)

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark')
    const newTheme = isDark ? 'light' : 'dark'
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  })

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light')
      }
    })
})

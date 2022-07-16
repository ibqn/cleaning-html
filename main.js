const headerBackground = () => {
  const header = document.querySelector('.js-header')
  window.addEventListener('scroll', () => {
    console.log(this.scrollY)
    if (this.scrollY > 0) {
      header.classList.add('bg-reveal')
    } else {
      header.classList.remove('bg-reveal')
    }
  })
}

headerBackground()

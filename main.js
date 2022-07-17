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

const styleSwitcherToggle = () => {
  const styleSwitcher = document.querySelector('.js-style-switcher')
  const styleSwitcherToggler = document.querySelector(
    '.js-style-switcher-toggler'
  )

  styleSwitcherToggler.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open')
    styleSwitcherToggler
      .querySelector('i')
      .classList.toggle('fa-times')
      .toggle('fa-cog')
  })
}

styleSwitcherToggle()

const headerBackground = () => {
  const header = document.querySelector('.js-header')
  window.addEventListener('scroll', () => {
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
    styleSwitcherToggler.querySelector('i').classList.toggle('fa-times')
    styleSwitcherToggler.querySelector('i').classList.toggle('fa-cog')
  })
}

styleSwitcherToggle()

const themeColor = () => {
  const hueSlider = document.querySelector('.js-hue-slider')
  const html = document.querySelector('html')

  const setHue = (value) => {
    html.style.setProperty('--hue', value)
    document.querySelector('.js-hue').innerHTML = value
  }

  const setSlider = (value) => (hueSlider.value = value)

  hueSlider.addEventListener('input', ({ target }) => {
    const { value } = target
    setHue(value)
    localStorage.setItem('--hue', value)
  })

  const savedHue =
    localStorage.getItem('--hue') ??
    getComputedStyle(html).getPropertyValue('--hue')

  setHue(savedHue)
  setSlider(savedHue)
}

themeColor()

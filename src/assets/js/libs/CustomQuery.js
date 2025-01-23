import { getEaseValue } from "./EasingFunctions"

class CustomQuery {
  constructor(el) {
    this.el = el
    this.isCollapsed
    this.sliding = false
    this.expandedStyle = this.getExpandedStyle()
    window.addEventListener('resize', () => {
      this.resizeTimer && clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        this.expandedStyle = this.getExpandedStyle()
      }, 400)
    })
  }


  toggleClass(cls) {
    if (this.el.classList.contains(cls)) {
      this.el.classList.remove(cls)
    } else {
      this.el.classList.add(cls)
    }
  }

  slideToggle(options = {}) {
    if (this.isCollapsed) {
      this.slideDown(options)
    } else {
      this.slideUp(options)
    }
  }

  slideUp(options = {}) {
    this.slide('up', options)
  }

  slideDown(options = {}) {
    this.slide('down', options)
  }

  slide(type, options = {}) {
    if (this.sliding) return
    const defaultOptions = {
      duration: 400
    }

    options = { ...defaultOptions, ...options }

    const startTime = new Date().getTime()
    this.sliding = true
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime
      const height = getEaseValue(
        time,
        this.expandedStyle.oh * (type === 'up' ? 1 : 0),
        this.expandedStyle.oh * (type === 'up' ? 0 : 1),
        options.duration,
        options.ease)
      const pt = getEaseValue(
        time,
        this.expandedStyle.pt * (type === 'up' ? 1 : 0),
        this.expandedStyle.pt * (type === 'up' ? 0 : 1),
        options.duration, options.ease)
      const pb = getEaseValue(
        time,
        this.expandedStyle.pb * (type === 'up' ? 1 : 0),
        this.expandedStyle.pb * (type === 'up' ? 0 : 1),
        options.duration, options.ease)
      const bt = getEaseValue(
        time,
        this.expandedStyle.bt * (type === 'up' ? 1 : 0),
        this.expandedStyle.bt * (type === 'up' ? 0 : 1),
        options.duration, options.ease)
      const bb = getEaseValue(
        time,
        this.expandedStyle.bb * (type === 'up' ? 1 : 0),
        this.expandedStyle.bb * (type === 'up' ? 0 : 1),
        options.duration, options.ease)

      this.el.style.display = options.display || `block`
      this.el.style.paddingTop = `${pt}px`
      this.el.style.paddingBottom = `${pb}px`
      this.el.style.borderTopWidth = `${bt}px`
      this.el.style.borderBottomWidth = `${bb}px`
      this.el.style.height = `${height}px`
      this.el.style.overflow = `hidden`

      if (time >= options.duration) {
        clearInterval(timer)
        if (type === 'up') {
          this.el.style.paddingTop = `${0}px`
          this.el.style.paddingBottom = `${0}px`
          this.el.style.height = `${0}px`
          this.el.style.borderTopWidth = `${0}px`
          this.el.style.borderBottomWidth = `${0}px`
          this.el.style.display = `none`
          this.isCollapsed = true
        } else {
          this.el.style.paddingTop = ``
          this.el.style.paddingBottom = ``
          this.el.style.height = ``
          this.el.style.borderTopWidth = ``
          this.el.style.borderBottomWidth = ``
          this.el.style.overflow = ``
          this.isCollapsed = false
        }
        this.sliding = false
        options.onComplete && typeof (options.onComplete) == "function" && options.onComplete()
      }
    }, 1000 / 60)
  }

  getExpandedStyle(el = this.el) {
    const cStyle = window.getComputedStyle(el)

    if (cStyle.display !== 'none') {
      this.isCollapsed = false
      return {
        pt: parseFloat(cStyle.paddingTop),
        pb: parseFloat(cStyle.paddingBottom),
        bt: parseFloat(cStyle.borderTopWidth),
        bb: parseFloat(cStyle.borderBottomWidth),
        oh: el.offsetHeight || el.height,
      }
    } else {
      this.isCollapsed = true

      el.style.visibility = 'hidden'
      el.style.position = 'absolute'
      el.style.opacity = 0
      el.style.display = 'block'

      const styles = {
        pt: parseFloat(cStyle.paddingTop),
        pb: parseFloat(cStyle.paddingBottom),
        bt: parseFloat(cStyle.borderTopWidth),
        bb: parseFloat(cStyle.borderBottomWidth),
        oh: el.offsetHeight || el.height,
      }

      el.style = el.originalStyle

      return styles
    }
  }
}

export const $_ = (el = null) => {
  if (!el._cq) {
    el._cq = new CustomQuery(el)
  }
  return el._cq
}

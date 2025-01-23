import {
  getEaseValue
} from "./EasingFunctions"

export default class Helper {
  constructor(el) {
    this.el = el
    this.subscribers = {}
    this.state = {}
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback)
  }

  publish(event, data) {
    if (!this.subscribers[event]) return
    this.subscribers[event].forEach(subscriberCallback =>
      subscriberCallback(data))
  }

  // detect available wheel event
  getWheelEvent(el) {
    if ('onwheel' in el) {
      // spec event type
      return 'wheel';
    } else if (el.onmousewheel !== undefined) {
      // legacy event type
      return 'mousewheel';
    } else {
      // older Firefox
      return 'DOMMouseScroll';
    }
  }

  easeInOutQuart(t, b, c, d) {
    if (t > d) return b + c
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
  }

  getOffset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }

  getScreenHeight() {
    const div = document.createElement("div")
    div.style.opacity = 0
    div.style.pointerEvents = "none"
    div.style.position = "fixed"
    div.style.top = 0
    div.style.height = "100%"
    div.style.width = "100%"
    document.body.appendChild(div)

    const height = window.getComputedStyle(div).height
    div.remove()
    return height
  }

  getSiblings(el) {
    // for collecting siblings
    const siblings = []
    // if no parent, return no sibling
    if (!el.parentNode) {
      return siblings
    }
    // first child of the parent node
    let sibling = el.parentNode.firstChild

    // collecting siblings
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== el) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling
    }
    return siblings
  }

  isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent)
  }

  detectBrowser() {
    // Opera 8.0+
    // const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0

    // Firefox 1.0+
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1

    // Safari 3.0+ "[object HTMLElementConstructor]"
    // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))

    // Internet Explorer 6-11
    // const isIE = /*@cc_on!@*/false || !!document.documentMode

    // Edge 20+
    // const isEdge = !isIE && !!window.StyleMedia

    // Chrome 1 - 79
    // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

    // Edge (based on chromium) detection
    // const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1)

    // Blink engine detection
    // const isBlink = (isChrome || isOpera) && !!window.CSS

    return {
      // isOpera,
      isFirefox,
      // isSafari,
      // isIE,
      // isEdge,
      // isChrome,
      // isEdgeChromium,
      // isBlink
    }
  }

  scrollTo(top, options = {}) {
    const defaultOptions = {
      duration: 400,
      offset: 0
    }

    options = {
      ...defaultOptions,
      ...options
    }
    const to = top + options.offset
    const from = window.pageYOffset || document.documentElement.scrollTop
    const startTime = new Date().getTime()

    clearInterval(this.scrollTimer)
    this.scrollTimer = setInterval(() => {
      const time = new Date().getTime() - startTime
      const step = getEaseValue(time, from, to, options.duration)
      window.scrollTo(0, step)

      if (time >= options.duration) {
        window.scrollTo(0, to)
        clearInterval(this.scrollTimer)
        options.onComplete && typeof (options.onComplete) == "function" && options.onComplete()
      }
    }, 1000 / 60)
  }

  scrollToEl(el, options = {}) {
    if (!el) return
    const to = this.getOffset(el).top
    this.scrollTo(to, options)
  }
}

const constifyProp = (obj, prop, value) => Object.defineProperty(obj, prop, {
  value,
  writable: false
})

const visibilityChangeDetect = callback => {
  let hidden = "hidden";

  // Standards:
  if (hidden in document)
    document.addEventListener("visibilitychange", callback);
  else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", callback);
  else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", callback);
  else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", callback);
  // All others:
  else
    window.onpageshow = window.onpagehide = window.onfocus = window.onblur = callback;
}

const deThrottler = options => {
  const delay = options.delay || 200
  let nextValid = Date.now() + delay
  let callback = 0;
  const func = e => {
    clearTimeout(callback)
    const timeStamp = Date.now()
    if (timeStamp > nextValid) {
      options.callback(e)
      nextValid = timeStamp + delay
      return
    }
    callback = setTimeout(() => {
      if (!options.skipLastCall) {
        options.callback(e)
      }
    }, delay)
  };
  (options.target || window).addEventListener(options.event, func)
  return func
}

const getQueryValue = (() => {
  const QUERY_STRING = {}
  const params = window.location.search.split('?')[1]
  if (params) {
    params.split(/&(?!amp;)/g).forEach(param => {
      const query = param.split('=')
      QUERY_STRING[query[0]] = query[1]
    })
  }
  return name => QUERY_STRING[name]
})()

const $helper = new Helper()

export {
  constifyProp,
  visibilityChangeDetect,
  deThrottler,
  getQueryValue,
  $helper
}

import JSONFormatter from "json-formatter-js"
import {
  isMobile
} from "./Helper"

const styleRules = {
  wrapper: `
    position: fixed;
    z: 9;
    left: 0;
    bottom: 0;
    width: 100vw;
    max-width: 640px;
    min-width: 320px;
    height: 240px;
    max-height: 50%;
    min-height: 40%;
    background: rgba(0, 0, 0, 0.69);
    color: #fafafa;
    padding: 5px;
    font-size: 12px;
    opacity: 0.96;
    display: flex;
    flex-direction: column;
  `,
  wrapperClosed: `
    width: 0;
    min-width: 0;
    height: 0;
    min-height: 0;
    padding: 0;
  `,
  close: `
    position: absolute;
    right: 0;
    bottom: 100%;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: rgba(36, 36, 36, 0.69);
    margin-bottom: 4px;
    margin-right: 4px;
    color: #ffffff;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
  `,
  closeClosed: `
    right: auto;
    left: 100%;
    margin-left: 4px;
  `,
  list: `
    display: block;
    flex: auto;
    overflow-y: auto;
  `,
  form: ``,
  input: `
    border: none;
    outline: none;
    height: 28px;
    line-height: 28px;
    background: #696969;
    color: #ffffff;
    width: 100%;
    font-family: monospace, serif;
  `,
  line: `
    border-top: 1px solid #696969;
    margin: 0;
    padding: 8px 0;
    max-width: 100%;
  `,
  lineError: `
    background: #290001;
    color: #fd8183;
  `,
  logDate: `
    color: #969696;
    font-size: 10px;
  `,
  object: {
    collapsed: `
      background: rgba(180, 160, 30, 0.5);
    `,
    expanded: `
      background: rgba(80, 180, 160, 0.5);
    `
  }
}

if (console.log) {
  let isInitLogger = false
  const log = console.log
  const error = console.error
  const DOMLogger = document.createElement('div')
  const DOMLoggerClose = document.createElement('a')
  const DOMLoggerList = document.createElement('div')
  const DOMLoggerForm = document.createElement('form')
  const DOMLoggerInput = document.createElement('input')
  const maxLogLine = 10
  const paramToEl = param => {
    const el = document.createElement('div')
    if (typeof param === 'object') {
      if (param.name && param.name.includes && param.name.includes('Error')) {
        el.innerText = param
        return el
      }
    }
    if (typeof param === 'function') {
      el.innerText = param.toString()
      return el
    }
    const formatter = new JSONFormatter(param, 0, { theme: 'dark' })
    el.appendChild(formatter.render())
    return el
  }
  const logToLine = (params, isError) => {
    const line = document.createElement('pre')
    const logDate = document.createElement('span')
    logDate.style.cssText = styleRules.logDate
    logDate.innerHTML = `[${ new Date().toLocaleTimeString() }] &#8681; `
    line.appendChild(logDate)
    line.style.cssText = isError ? styleRules.lineError : styleRules.line
    params.map(p => line.appendChild(paramToEl(p)))
    DOMLoggerList.appendChild(line)
    DOMLoggerList.scrollTop = DOMLoggerList.scrollHeight
    if (DOMLoggerList.children.length > maxLogLine) {
      (DOMLoggerList.firstElementChild || {
        remove: () => {}
      }).remove()
    }
  }
  const initLogger = () => {
    if (isInitLogger) return
    DOMLogger.style.cssText = styleRules.wrapper + styleRules.wrapperClosed
    DOMLogger.appendChild(DOMLoggerList)
    DOMLogger.appendChild(DOMLoggerForm)
    DOMLogger.appendChild(DOMLoggerClose)
    DOMLoggerForm.appendChild(DOMLoggerInput)
    DOMLoggerList.style.cssText = styleRules.list
    DOMLoggerForm.style.cssText = styleRules.form
    DOMLoggerInput.style.cssText = styleRules.input
    DOMLoggerClose.style.cssText = styleRules.close + styleRules.closeClosed
    document.body.appendChild(DOMLogger);
    [].__proto__.toString = function () {
      return `Array(${this.length})`
    }
    DOMLoggerClose.setAttribute('href', 'javascript:void(0);')
    DOMLoggerClose.innerHTML = `&#10094; &#10095;`
    DOMLoggerClose.isClose = true
    DOMLoggerClose.addEventListener('click', e => {
      e.preventDefault()
      DOMLoggerClose.isClose = !DOMLoggerClose.isClose
      if (DOMLoggerClose.isClose) {
        DOMLogger.style.cssText = styleRules.wrapper + styleRules.wrapperClosed
        DOMLoggerClose.style.cssText = styleRules.close + styleRules.closeClosed
        DOMLoggerClose.innerHTML = `&#10094; &#10095;`
        return
      }
      DOMLogger.style.cssText = styleRules.wrapper
      DOMLoggerClose.style.cssText = styleRules.close
      DOMLoggerClose.innerHTML = `&#9587;`
    })
    DOMLoggerForm.addEventListener('submit', e => {
      e.preventDefault()
      const value = DOMLoggerInput.value
      try {
        logToLine([eval(value)])
      } catch (e) {
        log(e)
        logToLine([e], true)
      }
      DOMLoggerInput.value = ''
    })
    isInitLogger = true
  }
  console.log = function () {
    if (!isMobile()) {
      log(...arguments)
      return
    }
    initLogger()
    logToLine([...arguments])
    return [...arguments]
  }
  console.error = function () {
    if (!isMobile()) {
      error(...arguments)
      return
    }
    initLogger()
    logToLine([...arguments], true)
    return [...arguments]
  }
}

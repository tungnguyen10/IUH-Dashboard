import random from "../libs/RandomString"
import Publisher from "../libs/Publisher"
import refState from "../libs/ModuleState"
import { constifyProp } from "../libs/Helper"

const setupInitAttr = (el, currentModule) => {
  const name = currentModule.name.toLowerCase()
  const attrs = [...el.attributes]
  attrs.map(a => [a.name, a.value])
    .filter(a => a[0].includes(name))
    .forEach(a => {
      const aName = a[0].split(`${name}-`).pop()
      refState(`${currentModule.id}#${aName}`, a[1])
    })
  currentModule.data = (name, value, subscribe) => {
    const state = refState(`${currentModule.id}#${name}`)
    if (subscribe) state.onChange(subscribe)
    if (value) state.set(value)
    return state.get()
  }
  constifyProp(currentModule, 'data', currentModule.data)
}

export default class BaseModule extends Publisher {
  constructor() {
    super()
    const [el, name] = arguments
    this.id = random()
    this.name = name
    this.el = el
    this.el.modules = this.el.modules || {}
    this.el.modules[this.name] = this.id
    constifyProp(this, 'id', this.id)
    constifyProp(this, 'name', this.name)
    constifyProp(this, 'el', this.el)
    setupInitAttr(this.el, this)
    if (this.register) {
      this.register()
      constifyProp(this, 'register')
    }
  }
}

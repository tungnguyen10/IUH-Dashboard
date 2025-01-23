import random from "./RandomString"
import refState from "./ModuleState"

export default class Subscriber {
  constructor(name, action, refName) {
    this.name = name
    this.action = action
    this.id = random()
    this.refState = refState(refName)
    this.refState.onChange(value => this.action && this.action(value, this.publisher))
  }

  invoke(data, publisher) {
    if (!this.publisher) {
      this.publisher = publisher
    }
    if (publisher !== this.publisher) {
      console.warn('it seems this event is published from multiple publisher. ', this.publisher, publisher)
    }
    this.refState.set(data)
  }
}

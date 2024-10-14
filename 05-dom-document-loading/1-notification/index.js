export default class NotificationMessage {
  element
  constructor(message = '', {
    duration = 0,
    type = '',
  } = {}) {
    this.message = message
    this.duration = duration
    this.type = type
    this.createElement()

  }
  createTemplate() {
    return `
    <div class="notification ${this.type}" style="${this.duration/1000}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
            <div class="notification-header">${this.type}</div>
            <div class="notification-body">
                ${this.message}
            </div>
        </div>
    </div>
    `
  }
  
  createElement() {
    const element = document.createElement('div')
    element.innerHTML = this.createTemplate()
    this.element = element.firstElementChild
  } 

  show(target = document.body) {
    if (NotificationMessage.activeMessage) {
        NotificationMessage.activeMessage.remove()
    }
    target.append(this.element)
    this.timer = setTimeout(() => this.remove(), this.duration)
    NotificationMessage.activeMessage = this
  }

  remove() {
    if(this.timer) {
        clearTimeout(this.timer)
    }
    this.element.remove()
  }

  destroy() {
    this.remove()
  }
}

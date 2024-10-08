export default class ColumnChart {
  element
  subElements = {}
  chartHeight = 50

  constructor(props = {}) {
    const {
      data = [],
        label = '',
        link = '',
        value = 0,
        formatHeading = (value) => value,
    } = props
    this.data = data,
      this.label = label,
      this.link = link,
      this.value = value,
      this.formatHeading = formatHeading,
      this.createCharts()
  }

  createTemplate() {
    return `<div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
          Total ${this.label}
          ${this.getLink()}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">
            ${this.formatHeading(this.value)}
          </div>
          <div data-element="body" class="column-chart__chart">
            ${this.createColumn(this.data)}
          </div>
        </div>
      </div>`
  }

  createColumn(data) {
    const maxValue = Math.max(...data)
    return data.map(i => {
      const scale = this.chartHeight / maxValue
      const percent = (i / maxValue * 100).toFixed(0)
      return `<div style="--value: ${Math.floor(i * scale)}" data-tooltip="${percent}%"></div>`
    }).join('')
  }

  getLink() {
    if (this.link) {
      return `<a class="column-chart__link" href="${this.link}">View all</a>`
    } else {
      return ''
    }
  }

  createCharts() {
    const element = document.createElement('div')
    element.innerHTML = this.createTemplate()
    this.element = element.firstElementChild
    if (this.data.length) {
      this.element.classList.remove('column-chart_loading');
    }
    this.updateElements = this.getSubElements(this.element)
  }

    getSubElements(element) {
      const elements = element.querySelectorAll('[data-element="body"]');
      let result = {}
      for (let i of Array.from(elements)) {
          result[i.dataset.element] = element
      }
      return result
    }

  update(data) {
    this.updateElements.body.innerHTML = this.createColumn(data)
  }

  remove() {
    this.element.remove()
  }

  destroy() {
    this.remove()
  }
}

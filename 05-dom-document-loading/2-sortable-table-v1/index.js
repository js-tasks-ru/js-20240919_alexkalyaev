export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig
    this.data = data
    this.render()
  }

  createHeaderTemplate() {
    return `    
      <div data-element="header" class="sortable-table__header sortable-table__row">
        ${this.headerConfig.map((elem) => `    
            <div class="sortable-table__cell" data-id="${elem.id}" data-sortable="${elem.sortable}" data-order="">
              <span>${elem.title}</span>
            </div>      
          `).join('')}  
      </div>`
  }

  createTableTemplate() {
    return `
      ${this.data.map((item) =>
        `<a href="/products/${item.id}" class="sortable-table__row">
        ${this.headerConfig.map((elem) => {
          if (elem['template']) {
            return elem['template'](item[elem['id']])
          }
          return `<div class="sortable-table__cell">${item[elem['id']]}</div>`
          }).join('')
        } </a>`).join('')
      }`
  }

  createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
  }


  render() {
    const elemHtmlCode = this.createElement(`
      <div data-element="productsContainer" class="products-list__container">
        <div class="sortable-table">
          ${this.createHeaderTemplate()}
          <div data-element="body" class="sortable-table__body">
            ${this.createTableTemplate()}
          </div>
        </div>
      </div>`).firstElementChild;
    this.element = elemHtmlCode;
  }
}

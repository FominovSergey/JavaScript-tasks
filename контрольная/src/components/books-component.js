import { createElement } from "../render.js";

function createBooksComponentTemplate() {
    return (
        `<div class="tab-contents" data-tab="3">
        <p>Война и мир</p>
        <p>Парфюмер</p>
        <p>Волхв</p>
      </div>`
      );
}


export class BooksComponent {
  getTemplate() {
    return createBooksComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
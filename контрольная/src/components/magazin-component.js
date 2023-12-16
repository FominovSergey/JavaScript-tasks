import { createElement } from "../render.js";

function createMagazinComponentTemplate() {
    return (
        `<div class="tab-contents" data-tab="4">
        <p>Burda Style</p>
      </div>`
      );
}


export class MagazinComponent {
  getTemplate() {
    return createMagazinComponentTemplate();
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
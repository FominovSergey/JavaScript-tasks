import { createElement } from "../render.js";

function createFilmComponentTemplate() {
    return (
        `<div class="tab-contents" data-tab="1">
          <p>Один дома</p>
          <p>Рождество</p>
          <p>Санта Клаус</p>
        </div>`
      );
}


export class FilmComponent {
  getTemplate() {
    return createFilmComponentTemplate();
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
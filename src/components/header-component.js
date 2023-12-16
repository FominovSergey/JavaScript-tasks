import {createElement} from '../render.js';


function createHeaderComponentTemplate() {
    return (
        `<header>
        <p>Список задач</p>
    </header>`
      );
}


export class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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

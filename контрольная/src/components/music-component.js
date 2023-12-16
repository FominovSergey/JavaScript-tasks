import { createElement } from "../render.js";

function createMusicComponentTemplate() {
    return (
        `<div class="tab-contents" data-tab="2">
        <p>Музыка из балета Щелкунчик</p>
        <p>Музыка из балета Лебединое озеро</p>
      </div>`
      );
}


export class MusicComponent {
  getTemplate() {
    return createMusicComponentTemplate();
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
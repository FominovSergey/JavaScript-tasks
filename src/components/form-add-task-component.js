import { AbstractComponent } from "../abstract-component.js";

export class FormAddTaskComponent extends AbstractComponent {

  getTemplate() {
    return `<div class="main_box">
    <h1>Новая задача</h1>
    <div>
        <input type="text" class="Input-text" placeholder="Название задачи...">
        <a class="button_blue" href="">+ Добавить</a>
    </div>
</div>`;
  }
};
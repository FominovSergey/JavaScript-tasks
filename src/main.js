import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {render, RenderPosition} from './render.js';

import { TasksService } from './service/TaskService.js';
import { Constanats } from './const.js';

import { TaskBoardComponent } from './components/taskBoard-component.js';
import { TaskListComponent } from './components/taskList_component.js';
import { TaskComponent } from './components/task-component.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');

const mainContainer = document.querySelector('main');


const taskBoardContainer = new TaskBoardComponent();
render(taskBoardContainer, mainContainer);


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);


const taskService= new TasksService();

renderTaskBoard(taskService, taskBoardContainer);

function renderTaskBoard(taskService, container) {
    Object.values(Constanats.Status).forEach((status, i) => {
        const tasksByStatus = taskService.getTasksByStatus(status);

        const taskListComponent = new TaskListComponent({ status });
        render(taskListComponent, container.getElement());

        const statusLabel = Object.values(Constanats.StatusLabel)[i];
        const taskListElement = taskListComponent.getElement().querySelector('p');
        taskListElement.textContent = statusLabel;

        if (tasksByStatus.length > 0) {
            renderTaskList(tasksByStatus, taskListComponent);
        }/*
        else{ 
            const stubComponent = new StubComponent();
            const taskListContainer = taskListComponent.getElement();
            render(stubComponent, taskListContainer);
        }

        */
    });
}

function renderTaskList(tasks, taskListComponent) {
    tasks.forEach((task) => {
        const taskListContainer = taskListComponent.getElement().querySelector('ul');
        renderTask(task, taskListContainer);
    });
}

function renderTask(task, container) {
    const taskComponent = new TaskComponent(task);
    render(taskComponent, container);
}





/*
for(let i=0; i<4; i++){
    const listComponent = new Tasks();
    render(listComponent, tasksBoardConteiner)
    for(let j=0; j<3; j++){
        render(new Task({id: taskList.id, title: taskList.title, status: taskList.status}), listComponent.getElement())
    }
}
*/



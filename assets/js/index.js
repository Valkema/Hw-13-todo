const createTaskBtn = document.getElementById('createTaskBtn');
const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const taskList = document.getElementById('taskList');
const newTask = document.querySelector('input[name="task"]');
const validRegExp = /^\w+/;
let isValid = false;
let TaskListItems = document.getElementsByClassName('taskListItem'); 


newTask.addEventListener('input', inputHandler);

//проверка на валидность
function inputHandler() {
    if (isValid = validRegExp.test(newTask.value)) {
    newTask.classList.remove('invalid_style');
    newTask.classList.add('valid_style');
    createTaskBtn.addEventListener('click', createNewTask);
  } else {
    newTask.classList.add('invalid_style');
    newTask.classList.remove('valid_style');
    createTaskBtn.removeEventListener('click', createNewTask);
  }
}

 //добавление задачи при нажатии на кнопку "Add task"
function createNewTask() {
  createNewElements ();
  newTask.classList.remove('valid_style');
  newTask.value = "";
  createTaskBtn.removeEventListener('click', createNewTask);
};

//добавление времени
function addTimeTask() {
  const timeElement = document.createElement('p');
  timeElement.classList.add('taskDate');
  const time = new Date();
  timeElement.textContent =
    'time of creation: '+time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
  return timeElement;
}


//создание элемента списка
function createNewElements () {
  const newListItem = document.createElement('li');
  newListItem.classList.add('taskListItem');
  taskList.append(newListItem);

  const newListItemCheck = document.createElement('input');
  newListItemCheck.type = "checkbox";
  newListItemCheck.name = "listItem";
  newListItem.append(newListItemCheck);

  const newListItemContainer = document.createElement('div');
  newListItemContainer.classList.add('taskContainer');
  newListItem.append(newListItemContainer);

  const newListItemTask = document.createElement('p');
  newListItemTask.classList.add('taskDescription');
  newListItemContainer.append(newListItemTask);
  newListItemTask.textContent = newTask.value; 

  const newListItemTaskDate = addTimeTask();
  newListItemContainer.append(newListItemTaskDate);
}


 //удаление задачи при нажатии на кнопку "Delete task"
deleteTaskBtn.addEventListener('click', deleteTask);

function deleteTask() {
for (items of TaskListItems) { 
  if (items.children[0].checked) {
   items.remove();
  };
};
}
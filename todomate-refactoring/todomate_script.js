import todoItems from './data.js';

function createTodoList() {
  const sectionTodo = document.querySelector('.section_todo');
  sectionTodo.innerHTML = '';

  
  todoItems.forEach((item) => {
    const todoContainer = document.createElement('ul');
    todoContainer.classList.add('section_todo_ul');
    todoContainer.dataset.category = item.category;

    const todoCategory = document.createElement('h2');
    todoCategory.textContent = item.category;

    const addIcon = document.createElement('img');
    addIcon.src = './img/add.png';
    addIcon.alt = '추가';
    addIcon.classList.add('add-icon');
    addIcon.dataset.category = item.category;
    todoCategory.appendChild(addIcon);

    todoContainer.appendChild(todoCategory);

    item.tasks.forEach((task) => {
      const todoItem = document.createElement('li');
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.textContent = '💗';
      todoItem.appendChild(heart);
      todoItem.innerHTML += ` ${task}`;
      todoContainer.appendChild(todoItem);
    });

    sectionTodo.appendChild(todoContainer);
  });

  const heartCount = document.getElementById('change').querySelector('strong');
  const todoCount = document.querySelectorAll('.section_todo_ul li').length;

  heartCount.textContent = todoCount;

  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      if (heart.classList.contains('completed')) {
        heart.classList.remove('completed');
        heart.textContent = '💗';
        updateTodoCount(+1);
      } else {
        heart.classList.add('completed');
        heart.textContent = '🖤';
        updateTodoCount(-1);
      }
    });
  });
}

function updateTodoCount(countChange) {
  const todoCount = document.querySelectorAll('.section_todo_ul li:not(.completed)').length;
  const heartCount = document.getElementById('change').querySelector('strong');

  heartCount.textContent = parseInt(heartCount.textContent) + countChange;
}

const modal = document.querySelector('.modal');

function addTodoItem(category, task) {
  const todoContainer = document.querySelector(`.section_todo_ul[data-category="${category}"]`);
  const todoItem = document.createElement('li');
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = '💗';
  todoItem.appendChild(heart);
  todoItem.innerHTML += ` ${task}`;
  todoContainer.appendChild(todoItem);
  updateTodoCount(1);
}

function openModal(category) {
  modal.style.display = 'block';
  const modalInput = document.querySelector('.modal_input');
  modalInput.value = '';
  modalInput.focus();

  const modalForm = document.querySelector('.modal_form');

  const closeModalHandler = (event) => {
    event.preventDefault();
    const task = modalInput.value.trim();
    if (task !== '') {
      addTodoItem(category, task);
    }
    closeModal();
  };

  modalForm.addEventListener('submit', closeModalHandler);
  modalForm.addEventListener('reset', closeModalHandler);
}

function closeModal() {
  modal.style.display = 'none';
  const modalForm = document.querySelector('.modal_form');
  modalForm.removeEventListener('submit', closeModal);
  modalForm.removeEventListener('reset', closeModal);
}

function initialize() {
  createTodoList();
  updateTodoCount(0);

  const addIcons = document.querySelectorAll('.add-icon');
  addIcons.forEach((addIcon) => {
    const category = addIcon.dataset.category;
    addIcon.addEventListener('click', () => {
      openModal(category);
    });
  });
}

window.addEventListener('load', initialize);

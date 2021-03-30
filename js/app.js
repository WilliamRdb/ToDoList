/**
 * Todolist
 */
var app = {
  init: function() {
  },
};

//mise en place du formulaire
formLoaded = function() {
  // chargement du MAIN
  const todoDiv = document.querySelector('#todo')
  const main = document.createElement('main')
  main.classList.add('main-content');
  
  // chargement du Formulaire
  const formContent = document.createElement('div')
  formContent.classList.add('form-content')
  const form = document.createElement('form')
  form.classList.add('form-input')
  formContent.appendChild(form)
  
  const newTask = document.createElement('input')
  newTask.setAttribute('placeholder', 'Nouvelle tâche')
  newTask.classList.add('new-task')
  form.appendChild(newTask)

  const inProgress = document.createElement('span')
  inProgress.classList.add('in-progress')
  inProgress.textContent = `Pas de tâches actuellement`
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newToDo = document.createElement('li')
    newToDo.innerText = newTask.value
    newToDo.classList.add('todo-item')
    const newCase = document.createElement('input')
    newCase.classList.add('todo-item-checkbox')
    newCase.setAttribute('type','checkbox')
    toDoContent.appendChild(newToDo)
    newToDo.appendChild(newCase)
    newTask.value = " "
    const countTask = document.querySelectorAll('.todo-item')
    inProgress.textContent = `${countTask.length} tâche(s) en cours`
  })


  
  // chargement de la ToDo list
  const toDoContent = document.createElement('div')
  toDoContent.classList.add('todo-content')
  
  // envoi des éléments au DOM
  todoDiv.appendChild(main)
  main.appendChild(formContent)
  main.appendChild(inProgress)
  main.appendChild(toDoContent)
}
formLoaded()



// Ajout d'une tache



// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);

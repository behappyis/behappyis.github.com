const todoDIV = document.querySelector("#todo");
const todoFORM = todoDIV.querySelector("form");
const todoINPUT = todoFORM.querySelector("input");
const todoBTN = todoFORM.querySelector("button");
const todoH1 = todoDIV.querySelector("h1");
const todoUL = todoDIV.querySelector("ul");

const TODOSKEY="todos";
let todos = [];

todoH1.classList.add("todo-title")

function saveTodos(){
    localStorage.setItem(TODOSKEY,JSON.stringify(todos));
}

function deleteTodo(event){
    event.preventDefault();
    const todoDEL_LI = event.target.parentElement;
    const todoDEL_SPAN = event.target.parentElement.querySelector("span");
    if(confirm(`Are you sure delete ${todoDEL_SPAN.innerText}?`)){
        todoDEL_LI.remove();
        todos = todos.filter((todo) => todo.id !== parseInt(todoDEL_LI.id));
    }
    saveTodos();
}

function displayTodo(newTodoObj){
    const todoLI = document.createElement("li");
    const todoSPAN = document.createElement("span");
    const todoDELBTN= document.createElement("button");

    todoDELBTN.innerText = "❌";
    todoDELBTN.addEventListener("click", deleteTodo);
    todoLI.appendChild(todoDELBTN);

    todoSPAN.innerText = newTodoObj.text;
    todoSPAN.classList.add("span");
    todoLI.appendChild(todoSPAN)

    todoLI.id = newTodoObj.id;
    todoLI.classList.add("todo-item");
    todoUL.appendChild(todoLI);
}

function addTodo(event){
    event.preventDefault();
    const newTodo = todoINPUT.value;
    todoINPUT.value = "";


    const newTodoObj ={
        id: Date.now(),
        text: newTodo
    }

    todos.push(newTodoObj);
    displayTodo(newTodoObj);
    saveTodos();
}

todoFORM.addEventListener("submit",addTodo);

const savedTodos = localStorage.getItem(TODOSKEY);
if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos=parsedTodos;
    parsedTodos.forEach(displayTodo);
}
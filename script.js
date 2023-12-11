var list = document.getElementById("list");
var count = 0;

var todos = [];

document.getElementById('form').addEventListener('submit', function(){ todosPush(document.getElementById("todoField").value); event.preventDefault();} );

function todosPush(input){
    todos.push({text: input, completed: false, finish: document.createElement("button"), del: document.createElement("button")});
    let i = 0;
    do{
        list.innerHTML = `${todos[i].text} <button key=${count} id="finish">Complete Todo</button> <button key=${count} id="del">Delete Todo</button> </li> `;
        i++;
    }while(i <= todos.length);
    //list.innerHTML = todos.map(todo => `<li>${todo.text} <button key=${count} id="finish">Complete Todo</button> <button key=${count} id="del">Delete Todo</button> </li>` ).join('');
    todos[count].finish.addEventListener('click', function(){completeTodo(count)});
    todos[count].del.addEventListener('click', function(){deleteTodo(count)});
    count++;
}

function completeTodo(index){
    console.log("hey");
    todos[index].completed = true;
    todos[index].text = `<del>todos[index].text</del>`;
}

function deleteTodo(index){
    console.log("bye");
    todos.splice(index, 1);
    count--;
}
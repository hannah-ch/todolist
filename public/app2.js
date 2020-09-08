import Todo from './Todo.js'
import CurrentDate from './date.js'
import Ajax from './Ajax.js'

const $date = document.querySelector('.dateTag');
const $ul = document.querySelector("ul");
const $wrapper = document.querySelector('.wrapper')

$date.innerHTML = CurrentDate.getDate()


function deleteTodo(){

}

function listRender(results){  
    $ul.innerHTML = results.map(data => new Todo(data.id, data.title, data.completed))
        .map(todo => todo.todoRender()).join('')
}

Ajax.getData(listRender)


$wrapper.addEventListener('click', ({target})=>{
    switch(target.dataset.key){
        case "icon_trash":
            Ajax.deleteData(target.dataset.id, listRender)
            break;
    }



})

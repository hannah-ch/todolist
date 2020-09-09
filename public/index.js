import CurrentDate from './Date.js';
import Todo from './Todo.js';
import Network from './network.js'

const $ul = document.querySelector("ul");
const $date = document.querySelector('.dateTag');
const $section = document.querySelector('.section')

$date.innerText = CurrentDate.getDate();

function listRender(todos){
    $ul.innerHTML = todos.map(todo => todo.render()).join('')
}

Network.getData(listRender)


$section.addEventListener('click', ({target})=>{
    switch(target.dataset.key){
        case "icon_trash":
            Network.delete(target.dataset.id, listRender);
            break;
    }
})

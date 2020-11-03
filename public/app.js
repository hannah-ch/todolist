import CurrentDate from './date.js'
import Ajax from './Ajax.js'
import List from './List.js'

const $date = document.querySelector('.dateTag');
const $textinput = document.querySelector(".textinput");
const $wrapper = document.querySelector('.wrapper')

$date.innerHTML = CurrentDate.getDate()

const list = new List()
Ajax.getData(list.updateData)

$wrapper.addEventListener('click', ({target})=>{
    switch(target.dataset.key){
        case "icon_trash":
            Ajax.deleteTodo(target.dataset.id)
            .then(text => {
                console.log(text)
                if(text==='success'){
                    list.deleteTodo(target.dataset.id)
                }
            })
            break;
        case "addButton":
            if(!$textinput.value){
                alert('type something');
            } else {
            Ajax.addTodo($textinput.value, list.newTodo)
            $textinput.value = "";}
            break;
        case "checkbox":
            {
            const index = target.parentElement.parentElement.dataset.index
            const completed = +target.dataset.complete === 1? 0:1
            target.parentElement.nextElementSibling.classList.toggle('completed');
            Ajax.completeTodo(index, completed)
            break;
            }
        case "contents":
            const index = target.parentElement.dataset.index
            let checkbox = target.previousElementSibling.firstElementChild;
            checkbox.checked = !checkbox.checked;
            target.classList.toggle('completed');
            const contentsCompleted = +target.dataset.complete === 1 ? 0:1
            Ajax.completeTodo(index, contentsCompleted)
            break;
        case "icon_edit":
            list.updateClick(target, target.dataset.id);
            break;
        case "submitButton":
            const newTodoText = target.previousElementSibling.value
            if(!newTodoText){alert('type something')}
            Ajax.updateTodo(+target.dataset.id, newTodoText)
            list.updateTodo(+target.dataset.id, newTodoText)
            break;
        case "cancelButton":
            list.listRender();
            break;
        default:
            return;
    }})



import Todo from './Todo.js'
import CurrentDate from './date.js'
import Ajax from './Ajax.js'
import List from './List.js'

const $date = document.querySelector('.dateTag');
const $textinput = document.querySelector(".textinput");
const $wrapper = document.querySelector('.wrapper')

$date.innerHTML = CurrentDate.getDate()

const list = new List()
const todo = new Todo()
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
            }
            Ajax.addTodo($textinput.value, list.newTodo)
            $textinput.value = "";
            break;
        case "checkbox":
            Ajax.checkboxClick(target.dataset.id, list.updateData)
            break;
        // case "contents":
        //     Ajax.contentClick(target.dataset.id, list.listRender)
        //     break;
        // case "icon_edit":
        //     Ajax.editClick(target.dataset.id, list.listRender);
        //     break;
        // case "submitButton":
        //     Ajax.clickSubmitButton(target.dataset.id, list.listRender);
        //     break;
        // case "cancelButton":
        //     Ajax.clickCancelButton(target.dataset.id, list.listRender);
        //     break;
        default:
            return;
    }})



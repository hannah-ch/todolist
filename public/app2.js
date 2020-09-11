import Todo from './Todo.js'
import CurrentDate from './date.js'
import Ajax from './Ajax.js'
import List from './List.js'

const $date = document.querySelector('.dateTag');
const $wrapper = document.querySelector('.wrapper')

$date.innerHTML = CurrentDate.getDate()

const list = new List()
Ajax.getData(list.listRender)

$wrapper.addEventListener('click', ({target})=>{
    switch(target.dataset.key){
        case "icon_trash":
            Ajax.deleteData(target.dataset.id, list.listRender)
            break;
    }})



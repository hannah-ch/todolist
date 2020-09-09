import CurrentDate from './Date.js'
import Todo from './Todo.js'

const $addButton = document.querySelector(".addButton");
const $textinput = document.querySelector(".textinput");
const $ul = document.querySelector("ul");
const $date = document.querySelector('.dateTag');


$date.innerText = CurrentDate.getDate() 

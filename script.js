// const list = document.querySelector("ul");
const content = document.querySelector(".contents");
const li = document.querySelector("li");
const checkbox = document.querySelector(".cb");
// const addButton = document.querySelector(".button");
const textinput = document.querySelector(".textinput");
const ul = document.querySelector("ul");
let completeOnOff = false;

const createLi = document.createElement("li");

let todos = [];

const eventList = {
    addTodo: function () {
        if (!textinput.value) {
            alert("Type something");
        } else {
            todos += textinput.value;
            textinput.value = "";
            ul.appendChild(createLi);
        }
    },
    completeTodo: function () {},
};

// function addTodoLi(){
// 	ul.innerHTML="";
// 	for(let i=0;i<)
// }

function addComplete() {
    if (!completeOnOff) {
        completeOnOff = true;
        checkbox.checked = true;
        content.classList.add("complete");
    } else {
        completeOnOff = false;
        checkbox.checked = false;
        content.classList.remove("complete");
    }
}

// li.addEventListener("click", (e) => {
//     switch (e.target.className) {
//         case "contents":
//             addComplete(e.target, checkbox);
//             break;
//         case "cb":
//             addComplete(content, e.target);
//             break;
//     }
// });

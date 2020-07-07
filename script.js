// const list = document.querySelector("ul");
const $content = document.querySelector(".contents"); //요소의 경우에는 $를 붙여서 명확하게 표시를 해준다
const $li = document.querySelector("li");
const checkbox = document.querySelector(".checkbox");
const $button = document.querySelector(".button");
const textinput = document.querySelector(".textinput");
const $ul = document.querySelector("ul");
let completeOnOff = false;

const createLi = document.createElement("li");

//플래그는 최후의 보루로 쓰는게 좋다 
//이 경우는 체크박스의 체크여부나 클래스 포함 여부로 대신할 수 있다 

let todos = [];

//인라인에다가 onclick을 쓰는것은 피할것
//html에는 정보 위주로 보여주고
//제어는 자바스크립트 안에서 하는것이 맞다 




const eventList = {
    addTodo: function () {
        if (!textinput.value) {
            alert("Type something");
        } else {
            // todos += textinput.value; //1.li를 만든다 2.li에 텍스트를 집어넣는다 3.그걸ul에 집어넣는다


            // let newLi = document.createElement('li');
            // let text = document.createTextNode(textinput.value);
            // newLi.appendChild(text);

            var li = document.createElement('li')
            li.innerHTML = ` <div class="check">
                <input type="checkbox" class="checkbox" />
                </div>
                <div class="contents">
                    ${textinput.value}
                </div>
                <div class="icons">
                    <i class="far fa-trash-alt"></i>
                </div>`


            $ul.appendChild(li);
            li.onclick = toggleComplete;

        }
    },
    completeTodo: function () { },
};

// function addTodoLi(){
// 	ul.innerHTML="";
// 	for(let i=0;i<)
// }


$button.onclick = eventList.addTodo;
checkbox.onclick = toggleComplete; //onclick에서만 함수가 바로 실행되므로, ()괄호는 생략한다 
$content.onclick = toggleComplete;

function toggleComplete(e) { //온클릭에도 e 객체는 있다 


    if (e.target.classList.contains("contents")) {
        e.target.classList.toggle('complete')
        completeOnOff = !completeOnOff;

        let checked = e.target.previousElementSibling.firstElementChild;
        checked.checked = !checked.checked;
        // if (!completeOnOff) {

        //     completeOnOff = true;
        // } else {
        //     e.target.previousElementSibling.firstElementChild.checked = false;
        //     completeOnOff = false;
        // }
    }

    else if (e.target.classList.contains("checkbox")) {


        if (!completeOnOff) {
            e.target.checked = true;
            completeOnOff = true;
        }
        else {
            e.target.checked = false;
            completeOnOff = false;
        }
    }
}

    // if (!completeOnOff) {
    //     completeOnOff = true;
    //     e.target.checked = true;
    //     e.target.classList.add("complete");
    // } else {
    //     completeOnOff = false;
    //     e.target.checked = false;
    //     e.target.classList.remove("complete");
    // }



    //ul에 이벤트 위임방식으로 switch 구문에 넣을 것
    // 함수 수정하고 함수를 만들 필요도 없다 




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

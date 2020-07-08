// const list = document.querySelector("ul");
const $content = document.querySelector(".contents"); //
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






//ul에 이벤트 위임방식으로 switch 구문에 넣을 것
// 함수 수정하고 함수를 만들 필요도 없다 


$ul.addEventListener('click', (e) => {
    switch (e.target.dataset.key) {
        case "checkbox":
            alert('!!!')
            break;
        case "contents":
            alert('$$$')
            break;
        case "icon":
            alert('%%%')
            break;
    }



})

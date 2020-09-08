import Todo from './Todo.js'

const $addButton = document.querySelector(".addButton");
const $textinput = document.querySelector(".textinput");
const $ul = document.querySelector("ul");


//호출만 하는 파일의 경우 app.js라는 파일이름으로 암묵적으로 동의가 되어있음 



todoList.getData(); //비동기 방식


$addButton.addEventListener('click', () => {

    //지금은 네트워크 통신없이 됐는데
    //서버와의 통신이 성공했을때만 되도록 코드를 고쳐보자


    if (!$textinput.value) {
        alert('type something');
    } else {
        let text = $textinput.value;
        todoList.addTodo(text);


        $textinput.value = "";

    }
});

//ul에 이벤트 위임방식으로 switch 구문에 넣을 것
// 함수 수정하고 함수를 만들 필요도 없다 


$ul.addEventListener('click', (e) => {
    switch (e.target.dataset.key) {
        case "checkbox":
            todoList.checkboxClick(e.target)
            break;
        case "contents":
            todoList.contentClick(e.target)
            break;
        case "icon_trash":
            todoList.removeClick(e.target);
            break;
        case "icon_edit":
            todoList.editClick(e.target);
            break;
        case "submitButton":
            todoList.clickSubmitButton(e.target);
            break;
        case "cancelButton":
            todoList.clickCancelButton(e.target);
            break;
    }



})

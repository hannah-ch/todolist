// const list = document.querySelector("ul");
const $content = document.querySelector(".contents"); //
const $li = document.querySelector("li");
const checkbox = document.querySelector(".checkbox");
const $button = document.querySelector(".button");
const textinput = document.querySelector(".textinput");
const $ul = document.querySelector("ul");
const icon = document.querySelector('i');

const createLi = document.createElement("li");

//플래그는 최후의 보루로 쓰는게 좋다 
//이 경우는 체크박스의 체크여부나 클래스 포함 여부로 대신할 수 있다 

let todos = [];







function checkboxClick(checkbox) {
    if (checkbox.checked) {
        checkbox.parentElement.nextElementSibling.classList.add('complete')
    }
    else {
        checkbox.parentElement.nextElementSibling.classList.remove('complete')
    }
}

function contentClick(content) {
    content.classList.toggle('complete');

    if (!content.classList.contains('complete')) {
        content.previousElementSibling.firstElementChild.checked = false;
    } else {
        content.previousElementSibling.firstElementChild.checked = true;
    }
}

function removeClick(item) {

    let selectedLi = item.parentNode.parentNode;
    selectedLi.classList.add('remove');
    let removeItem = document.querySelector('.remove');
    removeItem.parentNode.removeChild(removeItem);
}



$button.addEventListener('click', () => {

    if (!textinput.value) {
        alert('type something');
    } else {
        let text = textinput.value;
        let li = document.createElement('li');
        li.innerHTML += `<div class="check">
                <input type="checkbox" class="checkbox" data-key="checkbox" />
            </div>
            <div class="contents" data-key="contents">${text}</div>
            <div class="icons">
                <i class="far fa-trash-alt" data-key="icon"></i>
            </div>`

        $ul.appendChild(li);
        textinput.value = "";

    }
});



//ul에 이벤트 위임방식으로 switch 구문에 넣을 것
// 함수 수정하고 함수를 만들 필요도 없다 


$ul.addEventListener('click', (e) => {
    switch (e.target.dataset.key) {
        case "checkbox":
            checkboxClick(e.target)
            break;
        case "contents":
            contentClick(e.target)
            break;
        case "icon":
            removeClick(e.target);
            break;
    }



})

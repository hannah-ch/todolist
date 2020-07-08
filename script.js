// const list = document.querySelector("ul");
const $button = document.querySelector(".button");
const textinput = document.querySelector(".textinput");
const $ul = document.querySelector("ul");

let edit = document.getElementById('edit')

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

function editClick(item) {
    let text = item.parentNode.previousElementSibling;
    text.innerHTML = `<input type="text" id="textEdit"><input type="button" value="submit" id="editButton">`

    let textEdit = document.getElementById('textEdit');
    let editButton = document.getElementById('editButton');

    editButton.addEventListener('click', (e) => {
        text.innerHTML = e.target.previousElementSibling.value
    })

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
                        <i class="far fa-edit" data-key="icon_edit"></i>
                        <i class="far fa-trash-alt" data-key="icon_trash"></i>
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
        case "icon_trash":
            removeClick(e.target);
            break;
        case "icon_edit":
            editClick(e.target);
            break;
    }



})

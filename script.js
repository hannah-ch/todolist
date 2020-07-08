const $addButton = document.querySelector(".button");
const textinput = document.querySelector(".textinput");
const $ul = document.querySelector("ul");



function checkboxClick(checkbox) {

    checkbox.parentElement.nextElementSibling.classList.toggle('complete')

    //클릭한 체크박스의 옆에 있는 div에 complete 클래스 토글

}

function contentClick(content) {
    content.classList.toggle('complete');
    content.previousElementSibling.firstElementChild.checked = !content.previousElementSibling.firstElementChild.checked;
    //클릭한 div 옆에 있는 체크박스 체크 해제
}

function removeClick(item) {

    let selectedLi = item.parentNode.parentNode;    //선택한 아이콘이 있는 li 선택
    //필요없는 코드  selectedLi.classList.add('remove');             //클릭한 li에 remove 클래스 부여    
    selectedLi.parentNode.removeChild(selectedLi); // remove 클래스로 선택하여 해당 li 제거
    //필요없는 코드 - 중복 (let removeItem = document.querySelector('.remove');)
}

function editClick(item) {
    let text = item.parentNode.previousElementSibling;  //선택한 아이콘이 있는 li 선택
    let originalValue = text.innerHTML; //기존 value를 저장


    text.innerHTML = `<input type="text" id="textEdit" data-text=${originalValue}>
                      <input type="button" value="submit" class="editButton" data-key="editButton">
                      <input type="button" value="cancel" class="cancelButton" data-key="cancelButton">` //li 내용을 입력하는 input 및 버튼 추가 (줄맞춤)




    //cancel버튼은 이제 배열이기 때문에 바로 eventlistener를 걸어준다
    //이벤트 위임이 아니면 추가됐을 때 코드를 붙여줘야한다 



}

function clickEditButton(item) {

    let text = item.parentNode.firstElementChild.value;
    if (!text) {
        alert('type something')
        return;
    } else {
        item.parentElement.innerHTML = text;
    } //기존 li의 내용을, 위의 입력창에서 입력한 텍스트값으로 교체한다


}

function clickCancelButton(item) {
    let text = item.parentNode.firstElementChild.value;
    text.innerHTML = text.dataset.text  //처음에 저장해놨던 기존 value를 저장해서 반환

}



$addButton.addEventListener('click', () => {

    if (!textinput.value) {
        alert('type something');
    } else {
        let text = textinput.value;
        $ul.innerHTML += `<li><div class="check">
                        <input type="checkbox" class="checkbox" data-key="checkbox" />
                        </div>
                        <div class="contents" data-key="contents">${text}</div>
                        <div class="icons">
                        <i class="far fa-edit" data-key="icon_edit"></i>
                        <i class="far fa-trash-alt" data-key="icon_trash"></i>
                        </div></li>`

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
        case "editButton":
            clickEditButton(e.target);
            break;
        case "cancelButton":
            clickCancelButton(e.target);
            break;
    }



})

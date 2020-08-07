

const todoList = {

    todos: [],

    getData: function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos?userId=1', //
            type: 'get',
            success: function (result) {
                todoList.todos = result.splice(0, 5)
                todoList.displayTodo();  //동기 방식
            },
            error: function (result) { //주소를 잘못쳤거나, 서버와의 통신장애로 통신이 잘 안됐을때

            }
        })
    },



    addTodo: function (newTodoText) {
        //서버와의 통신이 성공했을때만 push가 되도록
        $.ajax({
            url: `http://localhost:3000/write?title=${newTodoText}&completed=${false}`, //
            type: 'get', //타입까ㅣㅈ 맞춰줄것
            success: (object) => {
                todoList.todos.push(object);
                todoList.displayTodo();
            },



        })

        // $.ajax({
        //     url: '/write', //
        //     type: 'post',
        //     data: JSON.stringify{
        //     title: newTodoText,
        //     completed: false
        // },
        //     success: (object) => {


        //     }



    },


    /* 수정할 때는 
    var id = //클릭한 요소의 아이디
    삭제할 때 가져와봤던 아이디
    수정을 할 때는 새로운 값을 서버에게 준다
    
    이것도 똑같이 객체를 리턴하므로, 똑같이 배열에 넣어준다
    */


    changeTodo: function (index, newTodoText) {
        //this.todos[index].todoText = newTodoText;
        let id = index;

        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos/${id}`, //
            type: 'put',
            data: {
                id: id,
                title: newTodoText
                //completed: false
            },
            success: function (object) {
                todoList.todos[id - 1].title = object.title;  // 객체는 없는 프로퍼티를 호출하면, 프로퍼티 자체를 만든다
                //console.log(todoList.todos[id].todoText)
                todoList.displayTodo();

            }
        })

    },

    deleteTodo: function (id) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos/${id}`, //
            type: 'delete', //이미 여기까지의 명령으로 서버에서의 데이터는 삭제되었으므로, todos의 배열[해당인덱스]만 삭제해주면 된다 
            success: function () {

                function todoIdCompare(todo) {
                    return todo.id === id;
                }

                todoList.todos.splice(todoList.todos.findIndex(todoIdCompare(todo)), 1);
                todoList.displayTodo();
            }
        })

    },

    //정확하게 삭제하는 방법은 id -1 이 아닌 현재 배열에서 해당 id를 가지고 있는 요소의 인덱스를 찾아서, 그 인덱스의 요소를 제거해주는 구조로 변경해야해욤



    completeTodo: function (index) {
        this.todos[index].completed = !this.todos[index].completed;
    },


    displayTodo: function () {
        $ul.innerHTML = "";
        let innerContents = '';

        for (let i = 0; i < this.todos.length; i++) {

            let todo = this.todos[i];
            let className = 'completed'
            let checked = 'checked'

            if (todo.completed === false) {
                className = "";
                checked = "";
            }

            innerContents += `<li data-index="${todo.id}"><div class="checkboxDiv">
                             <input type="checkbox" class="checkbox" data-key="checkbox" ${checked}/></div>
                             <div class="contents ${className}" data-key="contents">
                             ${todo.title}</div>
                             <div class="icondiv"><i class="far fa-edit" data-key="icon_edit"></i>
                             <i class="far fa-trash-alt" data-key="icon_trash"></i></div>
                             </li>`

            //innerHTML 명령 자체가 다 덮어쓰기 때문에 += 기호랑 함꼐 쓰면 추가가 되는 것이 아니라,
            //실제로는 초기화 후에 내용이 추가되는 것이다 
            //브라우저의 부담을 가중시키지 않기 위해서 텍스트 컨텐츠를 먼저 만들고 변수에 넣어서 마지막에 변수만 넣어준다
        }

        $ul.innerHTML = innerContents;

    },


    checkboxClick: function (checkbox) {

        let selectedIndex = checkbox.parentElement.parentElement.dataset.index;
        checkbox.parentElement.nextElementSibling.classList.toggle('completed');
        todoList.completeTodo(selectedIndex);
        //클릭한 체크박스의 옆에 있는 div에 complete 클래스 토글

    },

    contentClick: function (content) {

        let selectedIndex = content.parentElement.dataset.index;
        content.classList.toggle('completed');

        let checkbox = content.previousElementSibling.firstElementChild;
        checkbox.checked = !checkbox.checked;
        todoList.completeTodo(selectedIndex);
        //클릭한 div 옆에 있는 체크박스 체크 해제
    },



    removeClick: function (icon) {


        // let selectedLi = icon.parentElement.parentElement;
        // selectedLi.parentElement.removeChild(selectedLi);



        let id = icon.parentElement.parentElement.dataset.index;
        todoList.deleteTodo(id);


        //let indexOfSelectedItem = todosArray.findIndex(findIndexofSelectedItem);
        //console.log(indexOfSelectedItem);





        //현재 배열에서 해당 id를 가지고 있는 요소의 인덱스를 찾아서, 그 인덱스의 요소를 제거해주는 구조로 변경해야해욤

    },

    editClick: function (icon) {

        text = icon.parentElement.parentElement.children[1];
        let originalText = text.innerText;
        //icon.previousElementSibling.children[1].innerText //기존 value를 저장


        text.innerHTML = `<input type="text" id="textEdit" data-text=${originalText}>
        <input type="button" value="submit" class="submitButton" data-key="submitButton">
        <input type="button" value="cancel" class="cancelButton" data-key="cancelButton">` //li 내용을 입력하는 input 및 버튼 추가 (줄맞춤)

        //cancel버튼은 이제 배열이기 때문에 바로 eventlistener를 걸어준다
        //이벤트 위임이 아니면 추가됐을 때 코드를 붙여줘야한다 

    },

    clickSubmitButton: function (item) {

        let text = item.previousElementSibling.value;
        let dataIndex = item.parentElement.parentElement.dataset.index;
        if (!text) {
            alert('type something')
            return;
        } else {
            todoList.changeTodo(dataIndex, text); //서버에서 데이터를 가지고 올 때 배열이 아니므로, 배열에 데이터를 할당할 때 주의한다 
        } //기존 li의 내용을, 위의 입력창에서 입력한 텍스트값으로 교체한다
    },

    clickCancelButton: function (item) {
        let text = item.parentNode.firstElementChild.value;
        text.innerHTML = item.previousElementSibling.previousElementSibling.dataset.text  //처음에 저장해놨던 기존 value를 저장해서 반환
        todoList.displayTodo();
    }



};


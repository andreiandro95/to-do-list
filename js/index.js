// to do list
(function(){
    let inputToDo = document.querySelector(".input-word");
    let addToList = document.querySelector(".addtodo");
    let createList = document.querySelector(".create-list");
    let deleteAll = document.querySelector(".delete-all");

    addToList.addEventListener("click", function(){

        let list = document.createElement("li");
        list.classList.add("item-in-list")
        let listMessage = document.createTextNode(inputToDo.value)
        list.appendChild(listMessage);

        let divButton = document.createElement('div');
        divButton.classList.add("button-modify")
        list.appendChild(divButton);

        let doneButton = document.createElement("i");
        doneButton.innerHTML = `<i class="fas fa-check-circle"></i>`;
        doneButton.classList.add("done-button")
        divButton.appendChild(doneButton);

        let deleteButton = document.createElement("i");
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
        deleteButton.classList.add("delete-button")
        divButton.appendChild(deleteButton);

        let modifyButton = document.createElement("i");
        modifyButton.innerHTML = `<i class="fas fa-edit"></i>`;
        modifyButton.classList.add("modify-button")
        divButton.appendChild(modifyButton);

        createList.appendChild(list)

        doneButton.addEventListener("click", function() {
            list.style.textDecoration = "line-through"
        })

        deleteButton.addEventListener("click", function(){
            list.style.display = 'none'
        })

        modifyButton.addEventListener("click", function(){
            inputToDo.value = list.textContent
            list.style.display = "none";
        })

        deleteAll.addEventListener("click", function(){
            list.style.display = "none"
        })

        inputToDo.value = ""
    })
})();
function addTask() {
    let input = document.querySelector("#taskInput").value;
    if (input === ""){
        alert("Please enter yor task");
        return;
    }
    let ul = document.querySelector("#taskList");
    let li = document.createElement("li");
    
    let taskText = document.createTextNode(input);
    li.appendChild(taskText);
    ul.appendChild(li);

    let deleteButton = document.createElement("button");
    deleteButton.className ="delete-button"
    deleteButton.innerHTML = "DELETE"
    deleteButton.onclick = function(){
      ul.removeChild(li);

    }
    li.appendChild(deleteButton);
    
}
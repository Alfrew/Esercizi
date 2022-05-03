list = [];
TASKS = document.querySelector("#list");
TASKTITLE = document.querySelector("#task");
TASKTEXT = document.querySelector("#taskText");
TASKBTN = document.querySelector("#addTask");
jsonTask = localStorage.getItem("tasks");
if (jsonTask !== null && TASKTITLE !== null && TASKTEXT !== null) {
    list = JSON.parse(jsonTask);
    for (let i = 0; i < list.length; i++) {
        let closeBtn = `<span class="text-danger" onClick="remover(${i})"><i class="bi bi-x-circle-fill"></i></span>`;
        let newLi = elementizer("li", list[i], "id", `task${i}`, closeBtn); // trasformazione in nodo
        appender(newLi, TASKS); // affisione alla ul
    }
}
index = list.length;
if (TASKTITLE !== null && TASKTEXT !== null) {
    TASKBTN.addEventListener("click", () => {
        let task = reader(TASKTITLE) + " - " + reader(TASKTEXT); // return di input
        if (task == "") {
            return alert("Inserisci un task");
        } else {
            arrayPusher(task, list); // aggiunta all'array
            let closeBtn = `<span class="text-danger" onClick="remover(${index})"><i class="bi bi-x-circle-fill"></i></span>`;
            let newLi = elementizer("li", task, "id", `task${index}`, closeBtn); // trasformazione in nodo
            appender(newLi, TASKS); // affisione alla ul
            inputCleaner(TASKTITLE); // pulizia input
            inputCleaner(TASKTEXT); // pulizia input
            index++;
            storageSetter("tasks", list); // sovrascrizione del local storage
        }
    });
}
function reader(element) {
    return element.value.trim();
}
function arrayPusher(element, array) {
    array.push(element);
}
function elementizer(elementType, text, attribute, attrvalue, innerElement) {
    let newElement = document.createElement(elementType);
    if (attribute !== undefined && attrvalue !== undefined) {
        newElement.setAttribute(attribute, attrvalue);
    }
    if (innerElement !== undefined) {
        newElement.innerHTML = text + innerElement;
    } else {
        newElement.innerHTML = text;
    }
    return newElement;
}
function appender(child, parent) {
    parent.appendChild(child);
}
function inputCleaner(input) {
    input.value = "";
}
function storageSetter(name, array) {
    localStorage.setItem(name, JSON.stringify(array));
}
function remover(index) {
    let tsk = document.querySelector(`#task${index}`);
    let sel = list.indexOf(tsk.innerText);
    list.splice(sel, 1);
    tsk.remove();
    storageSetter("tasks", list);
}

"use strict";
const PSWD = document.querySelector("#password");
const SRNM = document.querySelector("#username");
const LIBTN = document.querySelector("#login");
if (LIBTN !== null) {
    LIBTN.addEventListener("click", login);
    function login() {
        if (SRNM.value.trim() == "") {
            return alert("inserire username");
        }
        else if (PSWD.value.trim() == "") {
            return alert("inserire password");
        }
        else {
            window.open("todo.html", "_self", "");
        }
    }
}
let list = [];
const TASKS = document.querySelector("#list");
const TASKINPUT = document.querySelector("#task");
let jsonTask = localStorage.getItem("tasks");
if (jsonTask !== null && TASKINPUT !== null) {
    list = JSON.parse(jsonTask);
    for (let i = 0; i < list.length; i++) {
        let closeBtn = `<span class="text-danger" onClick="remover(${i})"><i class="bi bi-x-circle-fill"></i></span>`;
        let newLi = elementizer("li", list[i], "id", `task${i}`, closeBtn); // trasformazione in nodo
        appender(newLi, TASKS); // affisione alla ul
    }
}
let i = list.length;
if (TASKINPUT !== null) {
    TASKINPUT.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            let task = reader(TASKINPUT); // return di input
            if (task == "") {
                return alert("Inserisci un task");
            }
            else {
                arrayPusher(task, list); // aggiunta all'array
                let closeBtn = `<span class="text-danger" onClick="remover(${i})"><i class="bi bi-x-circle-fill"></i></span>`;
                let newLi = elementizer("li", task, "id", `task${i}`, closeBtn); // trasformazione in nodo
                appender(newLi, TASKS); // affisione alla ul
                inputCleaner(TASKINPUT); // pulizia input
                i++;
                localStorage.setItem("tasks", JSON.stringify(list));
            }
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
    }
    else {
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
function remover(index) {
    let tsk = document.querySelector(`#task${index}`);
    let sel = list.indexOf(tsk.innerText);
    list.splice(sel, 1);
    tsk.remove();
    localStorage.setItem("tasks", JSON.stringify(list));
}

const PSWD = <HTMLInputElement>document.querySelector("#password");
const SRNM = <HTMLInputElement>document.querySelector("#username");
const LIBTN = <HTMLAnchorElement>document.querySelector("#login");
if (LIBTN !== null) {
    LIBTN.addEventListener("click", login);
    function login() {
        if (SRNM.value.trim() == "") {
            return alert("inserire username");
        } else if (PSWD.value.trim() == "") {
            return alert("inserire password");
        } else {
            window.open("todo.html", "_self", "");
        }
    }
}

let list: string[] = [];
const TASKS = <HTMLUListElement>document.querySelector("#list");
const TASKINPUT = <HTMLInputElement>document.querySelector("#task");
let jsonTask = localStorage.getItem("tasks");
if (jsonTask !== null && TASKINPUT !== null) {
    list = JSON.parse(jsonTask);
    for (let i = 0; i < list.length; i++) {
        let closeBtn = `<span class="text-danger" onClick="remover(${i})"><i class="bi bi-x-circle-fill"></i></span>`;
        let newLi: Node = elementizer("li", list[i], "id", `task${i}`, closeBtn); // trasformazione in nodo
        appender(newLi, TASKS); // affisione alla ul
    }
}
let i: number = list.length;
if (TASKINPUT !== null) {
    TASKINPUT.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            let task: string = reader(TASKINPUT); // return di input
            if (task == "") {
                return alert("Inserisci un task");
            } else {
                arrayPusher(task, list); // aggiunta all'array
                let closeBtn = `<span class="text-danger" onClick="remover(${i})"><i class="bi bi-x-circle-fill"></i></span>`;
                let newLi: Node = elementizer("li", task, "id", `task${i}`, closeBtn); // trasformazione in nodo
                appender(newLi, TASKS); // affisione alla ul
                inputCleaner(TASKINPUT); // pulizia input
                i++;
                storageSetter("tasks", list); // sovrascrizione del local storage
            }
        }
    });
}
function reader(element: HTMLInputElement): string {
    return element.value.trim();
}
function arrayPusher(element: string, array: string[]): void {
    array.push(element);
}
function elementizer(elementType: string, text: string, attribute?: string, attrvalue?: string, innerElement?: string): Node {
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
function appender(child: Node, parent: HTMLElement): void {
    parent.appendChild(child);
}
function inputCleaner(input: HTMLInputElement): void {
    input.value = "";
}
function storageSetter(name: string, array: string[]) {
    localStorage.setItem(name, JSON.stringify(array));
}

function remover(index: number): void {
    let tsk = <HTMLLIElement>document.querySelector(`#task${index}`);
    let sel: number = list.indexOf(tsk.innerText);
    list.splice(sel, 1);
    tsk.remove();
    storageSetter("tasks", list);
}

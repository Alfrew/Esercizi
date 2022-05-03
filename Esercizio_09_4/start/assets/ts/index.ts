list = [];
TASKS = <HTMLUListElement>document.querySelector("#list");
TASKTITLE = <HTMLInputElement>document.querySelector("#task");
TASKTEXT = <HTMLInputElement>document.querySelector("#taskText");
TASKBTN = <HTMLButtonElement>document.querySelector("#addTask");

jsonTask = localStorage.getItem("tasks");
if (jsonTask !== null && TASKTITLE !== null && TASKTEXT !== null) {
    list = JSON.parse(jsonTask);
    for (let i = 0; i < list.length; i++) {
        let closeBtn = `<span class="text-danger" onClick="remover(${i})"><i class="bi bi-x-circle-fill"></i></span>`;
        let newLi: Node = elementizer("li", list[i], "id", `task${i}`, closeBtn); // trasformazione in nodo
        appender(newLi, TASKS); // affisione alla ul
    }
}
index = list.length;
if (TASKTITLE !== null && TASKTEXT !== null) {
    TASKBTN.addEventListener("click", () => {
        let task: string = reader(TASKTITLE) + " - " + reader(TASKTEXT); // return di input
        if (task == "") {
            return alert("Inserisci un task");
        } else {
            arrayPusher(task, list); // aggiunta all'array
            let closeBtn = `<span class="text-danger" onClick="remover(${index})"><i class="bi bi-x-circle-fill"></i></span>`;
            let newLi: Node = elementizer("li", task, "id", `task${index}`, closeBtn); // trasformazione in nodo
            appender(newLi, TASKS); // affisione alla ul
            inputCleaner(TASKTITLE); // pulizia input
            inputCleaner(TASKTEXT); // pulizia input
            index++;
            storageSetter("tasks", list); // sovrascrizione del local storage
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

let list;
let TASKS;
let TASKTITLE;
let TASKTEXT;
let TASKBTN;
let jsonTask;
let index;

let scriptType, char, color, text;
var pulsanti = document.getElementsByClassName("scripter");
for (var i = 0; i < pulsanti.length; i++) {
    pulsanti[i].addEventListener("click", selezionaScript);
}
function selezionaScript() {
    scriptType = this.innerHTML;

    switch (scriptType) {
        case "JavaScript":
            char = "J";
            color = "warning";
            text = "JAVASCRIPT";
            break;
        case "JQuery":
            char = "Q";
            color = "success";
            text = "JQUERY";
            break;
        case "TypeScript":
            char = "T";
            color = "info";
            text = "TYPESCRIPT";
    }
    // rimozione degli altri script
    let scripts = document.querySelectorAll(".scripts");
    scripts.forEach((el) => {
        el.remove();
    });
    // aggiunta dell'app
    document.querySelector("#app").innerHTML = `<input placeholder="Titolo" type="text" class="input-group" id="task" />
            <textarea placeholder="Descrizione" name="taskText" class="input-group" id="taskText" cols="30" rows="5"></textarea>
            <button type="button" class="btn btn-primary input-group" id="addTask">Aggiungi Task</button>
            <ul id="list"></ul>`;
    // aggiunta del nuovo script
    let script = document.createElement("script");
    script.setAttribute("src", "assets/js/script" + char + ".js");
    script.setAttribute("class", "scripts");
    document.querySelector("body").appendChild(script);
    // Scrittura del p
    document.querySelector("#selected").innerHTML = `Script in esecuzione:<strong class='text-${color}'>${text}</strong>`;
}

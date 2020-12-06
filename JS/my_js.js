let newNoteBtn = document.querySelector(".button_1")
let themeBtn = document.querySelector(".button_2")
let saveBtn = document.querySelector(".button_3")
let cancelBtn = document.querySelector(".button_4")
let button_class = document.querySelector(".Placeholder")
let textBox = document.querySelector(".textbox-child")

function changeThemes() {
    let notes_class = document.querySelector(".notes");
    btnArray = [newNoteBtn, themeBtn, saveBtn, cancelBtn]
    if (themeBtn.innerHTML === "Dark Theme") {
        themeBtn.innerHTML = "Light Theme";
        notes_class.style.backgroundColor = "#740023";
        button_class.style.backgroundColor = "#740023";
        notes_class.style.color = "white";
        for (items of btnArray)
            items.classList.toggle("darkColor");
    } else {
        themeBtn.innerHTML = "Dark Theme";
        notes_class.style.backgroundColor = "#BD8B9C";
        button_class.style.backgroundColor = "#4B8F8C";
        notes_class.style.color = "black";
        for (items of btnArray)
            items.classList.toggle("darkColor");
    }
}

themeBtn.addEventListener("click", changeThemes)

function hide() {
    cancelBtn.classList.toggle("hidden-style");
    saveBtn.classList.toggle("hidden-style");
    textBox.classList.toggle("hidden-style");
}
cancelBtn.addEventListener("click", hide);

function showAndClear() {
    if (cancelBtn.classList.contains("hidden-style")) {
        cancelBtn.classList.toggle("hidden-style");
        saveBtn.classList.toggle("hidden-style");
        textBox.classList.toggle("hidden-style");
    } else {
        textBox.value = "";
    }

}

newNoteBtn.addEventListener("click", showAndClear)


function saveInput() {
    let tempObject = { title: null, body: null }
    if (textBox.value !== "") {
        x = textBox.value.split('\n');
        tempObject.title = x[0];
        let y = "";
        for (i = 1; i < x.length; i++) {
            y = y + x[i] + " ";
        }
        y = y.replace(tempObject.title, '');
        tempObject.body = y;
        notesArray.push(tempObject);
        console.log(notesArray);
        newListItem();
    }
}

let notesArray = [{ title: "Note one", body: "some text 1" }, { title: "Note two", body: "some text 2" }]
saveBtn.addEventListener("click", saveInput)

function newListItem() {
    let x = document.createElement("li");
    length = notesArray.length - 1;
    let y = document.createTextNode(notesArray[length].title);
    x.appendChild(y);
    document.querySelector("ul").appendChild(x);
}


let list_items = document.querySelector("ul");
console.log(list_items);
list_items.addEventListener("click", savedNotes);

function savedNotes(evt) {
    x = evt.target.innerText;
    for (let i = 0; i < notesArray.length; i++) {
        if (x == notesArray[i].title) {
            textBox.value = notesArray[i].body;
        }
    }

}
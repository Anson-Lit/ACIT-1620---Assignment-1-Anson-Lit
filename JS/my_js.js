let newNoteBtn = document.querySelector(".button_1")
let themeBtn = document.querySelector(".button_2")
let saveBtn = document.querySelector(".button_3")
let cancelBtn = document.querySelector(".button_4")
let button_class = document.querySelector(".Placeholder")
let textBox = document.querySelector(".textbox-child")

function changeThemes() {
    let notes_class = document.querySelector(".notes");

    if (themeBtn.innerHTML === "Dark Theme") {
        themeBtn.innerHTML = "Light Theme";
        notes_class.style.backgroundColor = "#740023"
        button_class.style.backgroundColor = "#740023"
    } else {
        themeBtn.innerHTML = "Dark Theme";
        notes_class.style.backgroundColor = "#BD8B9C"
        button_class.style.backgroundColor = "#4B8F8C"
    }
}

themeBtn.addEventListener("click", changeThemes)
    //changes theme
    //class list toggle?

function hide() {
    cancelBtn.classList.toggle("hidden-style")
    saveBtn.classList.toggle("hidden-style")
    textBox.classList.toggle("hidden-style")
}
cancelBtn.addEventListener("click", hide)

function showAndClear() {
    if (cancelBtn.classList.contains("hidden-style")) {
        cancelBtn.classList.toggle("hidden-style")
        saveBtn.classList.toggle("hidden-style")
        textBox.classList.toggle("hidden-style")
    } else {
        textBox.value = ""
    }

}

newNoteBtn.addEventListener("click", showAndClear)
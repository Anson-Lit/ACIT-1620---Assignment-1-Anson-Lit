let newNoteBtn = document.querySelector(".button_1")
let themeBtn = document.querySelector(".button_2")
let saveBtn = document.querySelector(".button_3")
let cancelBtn = document.querySelector(".button_4")
let button_class = document.querySelector(".Placeholder")

function changeThemes() {
    let notes_class = document.querySelector(".notes");

    if (themeBtn.innerHTML === "Dark Theme") {
        themeBtn.innerHTML = "Light Theme";
        notes_class.style.backgroundColor = "#740023"
        button_class.style.backgroundColor = "#740023"
    } else {
        theme_btn.innerHTML = "Dark Theme";
        notes_class.style.backgroundColor = "#BD8B9C"
        button_class.style.backgroundColor = "#4B8F8C"
    }
}

themeBtn.addEventListener("click", changeThemes)
    //changes theme
    //class list toggle?

function hide() {
    let textBox = document.querySelector(".textbox")
    cancelBtn.style.visibility = "hidden"
    saveBtn.style.visibility = "hidden"
    textBox.style.visibility = "hidden"
}
cancelBtn.addEventListener("click", hide)
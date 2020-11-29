let theme_btn = document.querySelector(".button_2")

function changeThemes() {
    let notes_class = document.querySelector(".notes");
    let button_class = document.querySelector(".Placeholder")
    if (theme_btn.innerHTML === "Dark Theme") {
        theme_btn.innerHTML = "Light Theme";
        notes_class.style.backgroundColor = "#740023"
        button_class.style.backgroundColor = "#740023"
    } else {
        theme_btn.innerHTML = "Dark Theme";
        notes_class.style.backgroundColor = "#BD8B9C"
        button_class.style.backgroundColor = "#4B8F8C"
    }
}

theme_btn.addEventListener("click", changeThemes)
    //changes theme
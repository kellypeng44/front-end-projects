const todoForm = document.getElementById("todo_form");
const list = document.getElementById("list_container");
const input = document.getElementById("todo_item_input");
const buttons = document.getElementById("buttons");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if (value) addToList(value);
});

const addToList = (item) => {
    const todoElement = buttons.content.cloneNode(true);
    todoElement.querySelector(".text").textContent = item;
    list.appendChild(todoElement);
    input.value = "";
}

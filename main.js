// 30 попыткии тест

let btn = document.querySelector(".plus");
let noteinp = document.getElementById("note");
let content = document.getElementById("taskscontent");
let total = document.getElementById("total");
let total1 = document.getElementById("total1");
let tasksCount = 0;
let completedCount = 0;

// Обработка нажатия на кнопку

btn.addEventListener("click", function () {
  let text = noteinp.value.trim();

  // Создаем новый элемент для заметки
  if (text !== "") {
    // Создаем новый элемент для заметки

    let note = document.createElement("div");
    note.textContent = text;
    // Так создать кнопку удаления
    let delet = document.createElement("button");
    delet.textContent = "Delete";
    delet.classList.add("delete-btn");
    delet.style.fontSize = "15px";
    delet.style.color = "white";
    delet.style.background = "red";
    delet.style.borderRadius = "6px";

    delet.style.border = "red";

    // Добавляем обработка события для кнопки удаления

    delet.addEventListener("click", function () {
      content.removeChild(note);
      tasksCount--;
      completedCount = 0; // (Выполнено) проблема счетик

      uptask();

      // Проверяем есть ли еще заметки

      if (content.childElementCount === 0) {
        // Показываем сообщение о отсутствии заметок
        let msg = content.querySelector(".message");
        if (msg) {
          msg.style.display = "block";
        }
      }
    });

    // Добавляем и удаления в элемент с содержимым заметок
    note.appendChild(delet);
    content.appendChild(note);
    note.style.display = "flex";
    note.style.justifyContent = "space-between";
    note.style.marginBottom = "10px";

    tasksCount++;
    // Счетик
    uptask();
    // очищаем поле ввода (type='text' id=note)

    noteinp.value = "";
    // скрыть сообщение
    let msg = content.querySelector(".message");
    if (msg) {
      msg.style.display = "none";
    }
  }
});

function uptask() {
  total.textContent = tasksCount;
  total1.textContent = completedCount;
}
// клика на заметку для пометки выполненной
content.addEventListener("click", function (eve) {
  let click = eve.target;

  //   кликнули на заметку
  if (click.tagName === "DIV") {
    // Проверяем, была ли заметка уже выполнена
    if (click.classList.contains("completer")) {
      click.classList.remove("completer");
      click.style.textDecoration = "none";
      completedCount--;
    } else {
      click.classList.add("completer");
      click.style.textDecoration = "line-through";
      completedCount++;
    }
    uptask();
  }
});

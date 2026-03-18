//your JS code here. If required.

const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (!title || !author || !isbn) return;

    // create row
    const row = document.createElement("tr");

    row.innerHTML =
        "<td>" + title + "</td>" +
        "<td>" + author + "</td>" +
        "<td>" + isbn + "</td>" +
        "<td><button class='delete'>X</button></td>";

    bookList.appendChild(row);

    // clear inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

// delete row
bookList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}

const library = [];

const container = document.querySelector(".container");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  const book = new Book(title, author, pages, read);
  library.push(book);
  displayBooks();
  cleanForm();
});

function cleanForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").checked = false;
}

function displayBooks() {
  container.innerHTML = "";
  library.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    const titleElement = document.createElement("h2");
    titleElement.textContent = book.title;
    const authorElement = document.createElement("p");
    authorElement.textContent = book.author;
    const pagesElement = document.createElement("p");
    pagesElement.textContent = book.pages;
    const readElement = document.createElement("p");
    readElement.textContent = book.read ? "Read" : "Not Read";
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);
    container.appendChild(bookElement);
  });
}

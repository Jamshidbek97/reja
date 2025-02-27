console.log("Freontend code is running");

function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text"> ${item.reja} </span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Rename
            </button>
            <button
              data-id="${item._id}"
              class="button delete-me btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </li>`
}


let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", {
      reja: createField.value
    }).
  then((response) => {
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value = "";
    createField.focus();
  }).catch((err) => {
    console.log("error: please try again later");
  });
});

document.addEventListener("click", function (e) {
  // delete item
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Do you really want to delete this item?")) {
      axios.post("/delete-item", {
        id: e.target.getAttribute("data-id")
      }).then(() => {
        e.target.parentElement.parentElement.remove();
      }).catch(() => {
        console.log("please try again later");
      });
    }
  } else if (e.target.classList.contains("edit-me")) {
    alert("you clicked edit button");
  }


});
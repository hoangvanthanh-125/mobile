const listDelete = document.getElementsByClassName("delete");

const addTodo = () => {
  var li = document.createElement("li");
  const input = document.getElementsByClassName("input")[0];
  var inputVal = input.value;
  var text = document.createTextNode(inputVal);
  li.appendChild(text);
  if (inputVal !== "") {
    document.getElementsByTagName("ul")[0].appendChild(li);
    input.value = "";
  }
  var button = document.createElement("button");
  var buttonDelete = document.createTextNode("xóa");
  button.className = "delete";
  button.style.marginLeft = "20px";
  button.appendChild(buttonDelete);
  li.appendChild(button);
  for (i = 0; i < listDelete.length; i++) {
    listDelete[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  li.style.marginBottom = "10px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.width = "300px";
  li.style.alignItems = "center";
  document.getElementsByTagName("ul")[0].style.padding = "0px";
};

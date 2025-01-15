const addProduct = () => {
  const productList = document.querySelector("ul");

  const $listItem = document.createElement("li");

  const $newItem = document.createElement("input");
  $newItem.id = "checkbox";
  $newItem.setAttribute("type", "checkbox");

  const $label = document.createElement("label");
  $label.htmlFor = "checkbox";
  $label.innerText = document.querySelector("input").value;

  $listItem.append($newItem, $label);
  productList.appendChild($listItem);
};

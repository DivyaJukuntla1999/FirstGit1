console.dir(document);
console.log('hi');
console.log(document.doctype);
console.log(document.forms);
console.log(document.URL);
const addItemsHeading = document.querySelector(".title");
addItemsHeading.style.fontWeight = "bold";
addItemsHeading.style.color = "green";
var thirdElement = document.querySelectorAll("#items li")[2];
thirdElement.style.backgroundColor = "green";
var listItems = document.querySelectorAll("#items li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = "bold";
}
const newItem = document.createElement('li');
newItem.textContent = 'New Item';
newItem.classList.add('list-group-item-new'); // add a new class to the element
document.getElementById('items').appendChild(newItem);
const newItem = document.getElementsByClassName('list-group-item-new')[0];
newItem.style.backgroundColor = 'green';

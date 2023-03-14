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
var items = document.getElementById('items').getElementsByTagName('li');
items[1].style.backgroundColor = 'green';
var items = document.getElementById('items').getElementsByTagName('li');
items[2].style.display = 'none';
const headerTitle = document.querySelector('#header-title');
headerTitle.parentElement.insertBefore(document.createTextNode('Hello world '), headerTitle);
const items = document.querySelector('#items');
items.firstElementChild.parentElement.insertBefore(document.createTextNode('Hello world '), items.firstElementChild);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.background = 'yellow';
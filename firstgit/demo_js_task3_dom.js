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
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteListItem = document.getElementsByClassName("delete_item");
var reset_btn =document.getElementById("reset");
var num_list = li.length;

//romove list item after click
function removeElement(li,deleteListItem,i){
	var event_add = deleteListItem[i].addEventListener("click", function(){
		li[i].remove();
		console.log("removed",i);
})
}
for (var i =0; i<deleteListItem.length; i++){
	removeElement(li,deleteListItem,i);
}

//toggle list item
function toggle_item(li,i){
	var event_add = li[i].children[0].addEventListener("click", function(){

		li[i].children[0].classList.toggle("done");
		console.log("cut",i);
})
}
for (var i =0; i<num_list; i++){
	toggle_item(li,i);
}

//create new list item
function featureAdd(new_li,deleteListItem,indexOfNewItem){
	console.log("featureAdd",indexOfNewItem);
	console.log("featureAdd",new_li);
	console.log("featureAdd",deleteListItem);
	// for (var i =0; i<list_length; i++){
	// 	console.log(i)
	// 	removeElement(new_li,deleteListItem,i);
	// 	toggle_item(new_li,i);
	// }
	removeElement(new_li,deleteListItem,indexOfNewItem);
	toggle_item(new_li,indexOfNewItem);
}
function newItemDetect(){
	var deleteListItem = document.getElementsByClassName("delete_item");
	var new_li = document.querySelectorAll("li");
	// var num_list = new_li.length;
	var indexOfNewItem = new_li.length-1;
	// console.log("newItemDetect", num_list)

	// featureAdd(new_li,deleteListItem,num_list);
	featureAdd(new_li,deleteListItem,indexOfNewItem);

}
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var remove_button = document.createElement("button");
	span.appendChild(document.createTextNode(input.value));
	remove_button.className = "delete_item";
	remove_button.appendChild(document.createTextNode("Delete"));
	li.appendChild(span);
	li.appendChild(remove_button);
	ul.appendChild(li);
	input.value = "";
	newItemDetect();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
};

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Delete all item
function deleteChildElements(){
	var child = ul.lastElementChild;
	while (child){
		child.remove();
		var child = ul.lastElementChild;
	} 
}
reset_btn.addEventListener("click", deleteChildElements);




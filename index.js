let me = this;
let doc = document;
doc.make = function(element){
	return doc.createElement(element);
}
doc.append = function(element){
	doc.appendChild(element);
}
doc.getByID = function(element){
	return doc.getElementById(element);
}
doc.getByTag = function(element,n){
	return doc.getElementsByTagName(element)[n];
}
doc.getByClass = function(element,n){
	return doc.getElementsByClassName(element)[n];
}



let temp = doc.make('h1');
temp.innerHTML = 'hello world';



window.onload = function(){
	console.log('index.js is available'); 
	doc.body.append(temp);

}


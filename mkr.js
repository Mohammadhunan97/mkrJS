let me = this; // easy to edit window object
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

function getRand(max,min,except){   //inclusive inclusive
  
  min = Math.round(min) || 0;
  max = Math.round(max)+1 || 100;
  let tempmax = max-1;
  let tempmin = min;
  let tempexc = except;
  let randNum = Math.floor(Math.random() * (max - min)) + min;
  if(randNum === except){
      return getRand(tempmax,tempmin,tempexc);
  }else{    //works in all cases even if except is undefined
      return randNum;
  }

}

function Sort(array){
  let topnum = array.length -1; 
  let random;
  let temp;
  while(topnum>0){
    random = getRand(topnum,0,topnum);
    temp = array[topnum];
    array[topnum] = array[random];
    array[random] = temp;
    topnum--;
    if(topnum === 1){
      return array;
    }
  }
}


function overlap(firstobj,secondobj){
  if((firstobj.style.top >= secondobj.style.top && firstobj.style.top <= secondobj.style.top + secondobj.style.height)&&(firstobj.style.left >= secondobj.style.left && firstobj.style.left <= secondobj.style.left + secondobj.style.width)){
    console.log('collided');
  }//end of if
}

/* USE return others when you have an array index value which you don't want to use and want to use the other elements*/
/*Return others returns a new array of elements which are not the index you do not want */
function returnOthers(arr,index){
let temp = [];
for(a = 0; a < arr.length; a++){
  if(a !== index){
    temp.push(a);
  }
}
return temp;
}

function Queue(array){
	this.queue = array;
	this.length = array.length;
}
Queue.prototype.addNewItem(newItem){
	this.queue.push(newItem);
	this.length += 1;
}
Queue.prototype.deQueue(){
	this.Queue.shift();
	this.length -=1;
}
//test:
Array.prototype.queue = function(arr){
	this.queue = array;
	this.length = array.length;
}

/*Taken from stack overflow, lines 89 to 91 http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript*/ 
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

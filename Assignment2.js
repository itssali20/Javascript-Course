//Task no 1:
let a=+prompt("Enter Number");
function add(a,num2) {
    return a+num2;

}
let res=add(a,5);
console.log(res);

//Task no 2:
function search(arr,startValue,length,value)
{
    if(length<1){
    return -1
}
    else if(arr[startValue] === value)
    {
        return startValue
    }
   else{
    return search(arr,startValue + 1,value)
   }
}

let arr = [1,2,3,4,5,6,7,8,9]
let length=arr.length;
let index = search(arr,0,0)
if(index >= 0)
{
    console.log("true")
}
else{
    console.log("false")
}


//Task no 3:
function addParagraph(text) {
    var para = document.createElement("p");
    
    para.textContent = text;

    var body = document.querySelector("body");
   
    body.appendChild(para);
  }
  
  addParagraph("This is a new paragraph!");

  //Task no 4:
  function addListItem(text) {

    var ul = document.querySelector("ul");
    
    var li = document.createElement("li");

    li.textContent = text;
    
    ul.appendChild(li);
  }
  
  addListItem("This is a new list item!");


  //Task no 5:
  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
var myElement = document.getElementById("myElement");

changeBackgroundColor(myElement, "red");

//Task no 6:
function saveObjectToLocalStorage(key, obj) {
    var json = JSON.stringify(obj);
    
    localStorage.setItem(key, json);
  }
//Task no 7:
function getObjectFromLocalStorage(key) {
    var objectString = localStorage.getItem(key);
    var object = JSON.parse(objectString);
  
    return object;
  }
  var myObject = getObjectFromLocalStorage("myObject");

console.log(myObject);
  

//Task no 8:
function saveObjectToLocalStorage(object) {
    for (var prop in object) {

      var value = object[prop];
      localStorage.setItem(prop, JSON.stringify(value));
    }
  
    var retrievedObject = {};
  
    for (var prop in object) {
      var value = JSON.parse(localStorage.getItem(prop));
  
      retrievedObject[prop] = value;
    }
  
    return retrievedObject;
  }

var myObject = {name: "John", age: 30};

var retrievedObject = saveObjectToLocalStorage(myObject);

console.log(retrievedObject);


  

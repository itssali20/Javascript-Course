//Task no 1:
// let a=+prompt("Enter Number");
// function add(a,num2) {
//     return a+num2;

// }
// let res=add(a,5);
// console.log(res);


//Task no 3:
// function addParagraph(text) {
//     var para = document.createElement("p");
    
//     para.textContent = text;

//     var body = document.querySelector("body");
   
//     body.appendChild(para);
//   }
  
//   addParagraph("This is a new paragraph!");

  //Task no 4:
//   function addListItem(text) {

//     var ul = document.querySelector("ul");
    
//     var li = document.createElement("li");

//     li.textContent = text;
    
//     ul.appendChild(li);
//   }
  
//   addListItem("This is a new list item!");


  //Task no 5:
  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
var myElement = document.getElementById("myElement");

changeBackgroundColor(myElement, "red");

// //Task no 6:
// function saveObjectToLocalStorage(key, obj) {
//     var json = JSON.stringify(obj);
    
//     localStorage.setItem(key, json);
//   }
  
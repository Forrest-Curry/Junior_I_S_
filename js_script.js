// Functions, allowDrop(ev), drag(ev), drop(ev) are slightly modified versions from:
// www.w3schools.com/html/html5_draganddrop.asp 
// The allowDrop, and drag functions remain the same and the drop function is 
// Modified to handle multiple items and prevent overlap or disappearing items

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  //Changes the original function to prevent multiple items in the same drop location
  //and to keep images from attempting to drop on other images and disappearing
  if (ev.target instanceof HTMLDivElement){
    if (ev.target.firstChild == null){
      ev.target.appendChild(document.getElementById(data));
    }
  }
}

// This function is for resetting the location of game pieces by manually 
// reasigning the images back to their start locations
function reset(){
  var drop1 = document.getElementById("start1");
  drop1.appendChild(document.getElementById("drag1"));
  var drop2 = document.getElementById("start2");
  drop2.appendChild(document.getElementById("drag2"));
  var drop3 = document.getElementById("start3");
  drop3.appendChild(document.getElementById("drag3"));
  var drop4 = document.getElementById("start4");
  drop4.appendChild(document.getElementById("drag4"));
  var drop5 = document.getElementById("start5");
  drop5.appendChild(document.getElementById("drag5"));

}

// This verifies if the game pieces have been placed in the correct locations
// and does so by matching the draggable images to the corresponding drop locations 
function checkCorrect(){
  var drop1 = document.getElementById("drop1");
  var drop2 = document.getElementById("drop2");
  var drop3 = document.getElementById("drop3");
  var drop4 = document.getElementById("drop4");
  var drop5 = document.getElementById("drop5");
  if (drop1.querySelector("#drag1") != null 
      && drop2.querySelector("#drag2") != null
      && drop3.querySelector("#drag3") != null 
      && drop4.querySelector("#drag4") != null 
      && drop5.querySelector("#drag5") != null){
    window.alert("Good job you got everything in the correct place!");
  }
  else{
    window.alert("This is not quite right, one or more things are in the wrong place");
  }
}

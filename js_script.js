//drag and drop functions from w3schools.com
function allowDrop(ev) {
  ev.preventDefault();
  }

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (ev.target instanceof HTMLDivElement){
    ev.target.appendChild(document.getElementById(data));
  }
  else{
    return;
  }
}

function reset(){
  var drop1 = document.getElementById("start1");
  drop1.appendChild(document.getElementById("drag1"));
  var drop2 = document.getElementById("start2");
  drop2.appendChild(document.getElementById("drag2"));
  var drop3 = document.getElementById("start3");
  drop3.appendChild(document.getElementById("drag3"));

}

function checkCorrect(){
  var drop1 = document.getElementById("drop1");
  var drop2 = document.getElementById("drop2");
  var drop3 = document.getElementById("drop3");
  if (drop1.querySelector("#drag1") != null && drop2.querySelector("#drag2") != null
        && drop3.querySelector("#drag3") != null){
    window.alert("Good job you got everything in the correct place");
  }
  else{
    window.alert("Not quite right");
  }
}

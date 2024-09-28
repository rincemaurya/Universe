function clos() {
   var x = document.querySelector('.main')
   x.style.display= "none"
   
   var a = document.querySelector('.moin')
   a.style.display= "none"
var b = document.querySelector('.gh')
   b.style.display= "none"
   
   var c = document.querySelector('.mcin')
   c.style.display= "none"
   
   var d = document.querySelector('.mdin')
   d.style.display= "none"
   
   var e = document.querySelector('.mein')
   e.style.display= "none"
}


function min() {
   var p = document.querySelector('.main')
  p.style.width= "80%"
   p.style.height ="60vh"
   
   var q = document.querySelector('.moin')
   q.style.width= "80%"
   q.style.height ="60vh"
   
var r = document.querySelector('.gh')
   r.style.width= "80%"
   r.style.height ="60vh"
   
   var m = document.querySelector('.mdin')
   m.style.width= "80%"
   m.style.height ="60vh"
   
      var p = document.querySelector('.mein')
   p.style.width= "80%"
   p.style.height ="60vh"
}

function max() {
   var p = document.querySelector('.main')
  p.style.width= "100%"
  p.style.top = "0px"
  p.style.left = "0px"
  
   p.style.height ="100vh"
   
   var q = document.querySelector('.moin')
   q.style.width= "100%"
   q.style.height ="100vh"
     q.style.left = "0px"

   
var r = document.querySelector('.gh')
   r.style.width= "100%"
   r.style.height ="100vh"
  r.style.left = "0px"

    var m = document.querySelector('.mdin')
   m.style.width= "100%"
   m.style.height ="100vh"
     m.style.left = "0px"

    var n = document.querySelector('.mein')
   n.style.width= "100%"
   n.style.height ="100vh"
     n.style.left = "0px"
    
}



function main(){
    var u = document.querySelector('.mu')
   u.style.display = "none"
   
    var y = document.querySelector('.main')
//   y.style.display= "block"
if(y.style.display == "block"){

y.style.display = "none"

}

else{

y.style.display = "block"
}   
   
}
function moin(){
        var u = document.querySelector('.mu')
   u.style.display = "none"
    var z = document.querySelector('.moin')
   if(z.style.display == "block"){

z.style.display = "none"

}

else{

z.style.display = "block"
}   

    
}

function mbin(){
        var u = document.querySelector('.mu')
   u.style.display = "none"
    var v = document.querySelector('.gh')
   if(v.style.display == "block"){

v.style.display = "none"

}

else{

v.style.display = "block"
}   

    
}

function mcin(){
        var u = document.querySelector('.mu')
   u.style.display = "none"
    var w = document.querySelector('.mcin')
   if(w.style.display == "block"){

w.style.display = "none"

}

else{

w.style.display = "block"
}   

    
}

function mdin(){
        var u = document.querySelector('.mu')
   u.style.display = "none"
    var s = document.querySelector('.mdin')
//   s.style.display= "block"
if(s.style.display == "block"){

s.style.display = "none"

}

else{

s.style.display = "block"
}   

    
}


function mein(){
        var u = document.querySelector('.mu')
   u.style.display = "none"
    var t = document.querySelector('.mein')
   if(t.style.display == "block"){

t.style.display = "none"

}

else{

t.style.display = "block"
}   

    
}

function mup(){
    var u = document.querySelector('.mu')
//   u.style.display= "block"

if(u.style.display == "block"){

u.style.display = "none" 

}

else{

u.style.display = "block"
}
    
}

// function mdo(){
//     var u = document.querySelector('.mu')
//   u.style.display= "none"
// }







//  const wrapper = document.querySelector(".moin"),
//     header = wrapper.querySelector(".head");

//     function onDrag({movementX, movementY}){
//       let getStyle = window.getComputedStyle(wrapper);
//       let leftVal = parseInt(getStyle.left);
//       let topVal = parseInt(getStyle.top);
//       wrapper.style.left = `${leftVal + movementX}px`;
//       wrapper.style.top = `${topVal + movementY}px`;
//     }

//     header.addEventListener("mousedown", ()=>{
//       header.classList.add("active");
//       header.addEventListener("mousemove", onDrag);
//     });

//     document.addEventListener("mouseup", ()=>{
//       header.classList.remove("active");
//       header.removeEventListener("mousemove", onDrag);
//     });
  
  
  
  
  
  
  const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});




const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false, updateId;

addBox.addEventListener("click", () => {
   
    addBtn.innerText = "Add Note";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
});

closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = descTag.value = "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
});

function showNotes() {
    if(!notes) return;
    document.querySelectorAll(".note").forEach(li => li.remove());
    notes.forEach((note, id) => {
        let filterDesc = note.description.replaceAll("\n", '<br/>');
        let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="uil uil-pen"></i>Edit</li>
                                    <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });
}
showNotes();

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}

function deleteNote(noteId) {
    let confirmDel = confirm("Are you sure you want to delete this note?");
    if(!confirmDel) return;
    notes.splice(noteId, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

function updateNote(noteId, title, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\r\n');
    updateId = noteId;
    isUpdate = true;
    addBox.click();
    titleTag.value = title;
    descTag.value = description;
    popupTitle.innerText = "Update a Note";
    addBtn.innerText = "Update Note";
}

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = titleTag.value.trim(),
    description = descTag.value.trim();

    if(title || description) {
        let currentDate = new Date(),
        month = months[currentDate.getMonth()],
        day = currentDate.getDate(),
        year = currentDate.getFullYear();

        let noteInfo = {title, description, date: `${month} ${day}, ${year}`}
        if(!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
        closeIcon.click();
    }
});









// Make the DIV element draggable:
dragElement(document.querySelector(".main"));
dragElement(document.querySelector(".fg"));
dragElement(document.querySelector(".mbin"));
dragElement(document.querySelector(".mcin"));
dragElement(document.querySelector(".mdin")); 
dragElement(document.querySelector(".mein"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}







var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick = function () {
    if (playing == true) {
        location.reload();
    }
    else {
        playing = true;
        score = 0;

        document.getElementById("scorevalue").innerHTML = score;
        //show count
        show("timeremaining");
        timeremaining = 60;

        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over
        hide("gameOver");

        //change start to reset        
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start count
        startCountdown();

        //generate quetion
        generateQA();

    }
}

for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {

                //increase score
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function () {
                    hide("correct");
                }, 1000);
                generateQA();

            } else {
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function () {
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

//functions
//start count
function startCountdown() {
    action = setInterval(function () {
        timeremaining -= 1;


        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountdown();
            show("gameOver");

            //game over            
            document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;

            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

//stop count
function stopCountdown() {
    clearInterval(action);
}

//hide
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

//show
function show(Id) {
    document.getElementById(Id).style.display = "block";
}
//guestion
function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;

    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;//correct answer

    //wrong answers
    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 +
                    Math.round(9 * Math.random())) * (1 +
                        Math.round(9 * Math.random()));//wrong answer

            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
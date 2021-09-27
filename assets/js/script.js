let date = moment();
$("#currentDay").text(date.format("MMMM Do, YYYY"));

// lock feature from https://codepen.io/beccakroese/pen/GQgwbx
$( ".lock" ).click(function() {
    $(this).toggleClass('unlocked');
});

let saveBtn = document.querySelector('#saveButton')
let userTask = document.querySelector('#textb')
let usageNote = document.createElement('p')
let usageNote1 = document.createElement('p')
document.body.appendChild(usageNote)
document.body.appendChild(usageNote1)

usageNote1.setAttribute('style', 'position: relative; top: -665px; left: 370px; color: #000000; padding: 0px; margin: 0px')
usageNote1.textContent = '*To save an entry, first unlock respective row, then lock once finished typing (10AM is only row that saves at the moment).'
usageNote.setAttribute('class', 'note')
usageNote.textContent = '*Click the lock button a second time, then refresh page to clear entry.'
document.querySelector('.note').style.display = 'none'
usageNote1.setAttribute('class', 'note1')

render();

function render() {
    let userInput = localStorage.getItem('textField')

    if (!userInput) {
        return;
    }

    userTask.textContent = userInput;
    document.querySelector('.note').style.display = 'contents';
    document.querySelector('.note1').style.display = 'none';
    usageNote.setAttribute('style', 'color: #FF0000; position: relative; top: -665px; left: 370px')
}

function saveFeature(event) {
    event.preventDefault();

    let userInput = document.querySelector('#task').value;
    // try queryselectorall

    if (userInput !== null) {
        localStorage.setItem('textField', userInput)
        render();
    }
}

let currentTime = parseInt(moment().format('H'));
let textArea = document.getElementsByClassName("barbieArea");

// use Array instead of for loop so idEl can be used outside of loop
Array.from(textArea).forEach(area => {
  let
    idEl = area.id, timeText;
  if (idEl) {
    timeText = parseInt(idEl);
  }
  if (timeText) {
    if (currentTime === timeText) {
        colorMorph(area, "#ff6961");
    } else if ((currentTime > timeText) && (currentTime < timeText + 6)) {
        colorMorph(area, "#d3d3d3");
    } else if ((currentTime < timeText) && (currentTime > timeText - 6)) {
        colorMorph(area, "#77dd77");
    } else {
        colorMorph(area, "#d3d3d3");
    }
  }
});

function colorMorph(element, color) {
  element.style.backgroundColor = color;
}

function log() {
    console.log(currentTime)
}

saveBtn.addEventListener('click', saveFeature)
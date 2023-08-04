const addNote = () => {
  let textAreaDiv = document.querySelector("#hold-text");

  textAreaDiv.innerHTML += `<div class='te'> 
  <textarea placeholder="type here" rows = 5 cols = 50> </textarea> 
  <img class='trash' src='https://media.istockphoto.com/id/928418914/vector/trash-can-garbage-can-rubbish-bin-icon.jpg?s=612x612&w=0&k=20&c=3ryjRO7fxFtK05q5NSR_4xrcVOOYMtmS2fzsmwsRchc=' style='width: 50px; height 50px;'> 
  <img class='save' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8aGhoAAADR0dEYGBgWFhYICAgSEhINDQ2xsbH6+vro6OiQkJDr6+uurq5dXV25ubni4uIfHx8mJiZpaWn19fXb29t3d3dFRUWTk5OFhYW3t7dAQEA2NjbV1dXOzs5KSkptbW1UVFQtnOuaAAADYElEQVR4nO3d2XLiMBBAUdLgDWPMEpYkLAn//5EDw0ApBAXJsaVOzb3vCE4ZGhmq7F6PiIiIiIiIiIiIiIiIiIiIiCh4w0W13LXVsloMY4M+V45X60zaLFuvxmVs1qXhpE4lzQZPbTbIjmvWExVHcrKRvF3dVZnLZhKb1ytryTrhncukjvxenaRph75TaRr1ML5I0jHw6SmRl3jAV+ncd0peYwFfwgCPxEhH8S0U8Eh8iwGcJt1/Bi8lyTSCsO56ipqldXjgJNx79JQE/84Ybrr8ov9atgm9gQt8CCMcxDoPLMwDfxLL0IfweBDDblDHEYTjoMJVyK+Kc+kqqHAbdpKeyrYhgcPwb9Lj2zTk90WEQRN41OyiCHcBhf0owj5ChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgbljS/WubvEOazYtb0KmG/Qiibsldumj74Fwjl+XQhpOFzw0erFyYy+vfwUaMPo3phlhbXxxdpg2uFaRfm872xwH7uP2+UC08zxqzBvNEtlOfFzRIL73mjWTi4zhizkfhdyl2xMJPi7iqF3+Xc9Qrzme2l9b32N2qFsqms61Q+80ar8LyPseWzv9EpTO7OGDP3/Y1KoW3GmDnPG43CfLZ/vFZv7zhvFApv9zG2HPc3+oTfzxgzt3mjTfh4xpi5zBtlwszz4tTjx/NGlzCdu8wYs/380QW0VQnl3f9+FNP3R4sqEsrH7bmSS4uPB6vqEXrNGLPR98tqESYO+xhbxXcjVYswz39y2e1dbt/fKBHK2n6u5FK1ti+tQThoNmPMjvPG8uOGBqHfPsaWbX+jQOhyruSS5XwqvjAftPUS+oN78ya6ULY/mzFm1fbeE0QWSrv38qnvPENUYTszxuzrvIkqNP9Xaqsv/0/FFPqfK7l0ez4VUSjrbu4AU37e38QTuv8e49vn329iCe//r9RW5v9TkYRt7WNsGfubOMJ81vUtinbX34ujCLuaMWbXeRNUOJWOZ4zZZd5I0LutHqSLfYytv/sbOQR6tnPVQWTe7YwxK2Yih/Y29m6Vy5+ezfu0WMa4ITARERERERERERERERERERER/Xf9ASmDVhuOXQVkAAAAAElFTkSuQmCC' style='width:50px; height 50px;'>
  </div>`;
  document.querySelector(".save").dispaly = "none"
  let textAreas = document.querySelectorAll(".te");
  let trashButtons = document.querySelectorAll(".trash");
  let saveButtons = document.querySelectorAll(".save")
  for (let i = 0; i < textAreas.length; i++) {
    let id = `te${i}`
    trashButtons[i].addEventListener('click', () => deleteNote(id));
    saveButtons[i].addEventListener('click', () => saveNote(id))
    textAreas[i].id = id;
  }
}

const deleteNote = (id) => {
  let textAreaDiv = document.querySelector("#hold-text");
  console.log(id);
  let textarea = document.querySelector("#" + id);
  console.log(textarea)
  textAreaDiv.removeChild(textarea);
  console.log("this function is running");
}


// Change Color of the text
const changeColor = () => {
  const btn = document.getElementById('colorButton'); // ID 'colorButton'

  const green = document.getElementById('green');
  green.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'green';
  });

  const blue = document.getElementById('blue');
  blue.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'blue';
  });

  const red = document.getElementById('red');
  red.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'red';
  });

  const yellow = document.getElementById('yellow');
  yellow.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'yellow';
  });

  const black = document.getElementById('black');
  black.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'black';
  });
}

// Change Font of the text
const changeFont = () => {
  const fontBtn = document.getElementById('fontButton'); // Assuming you have a button with the ID 'fontButton'
  const arial = document.getElementById('arial');
  const timesNewRoman = document.getElementById('timesNewRoman');

  arial.addEventListener('click', function onClick(event) {
    const ff = 'Arial'; // Define the desired font family here
    document.body.style.fontFamily = "'" + ff + "', Arial";
  });

  timesNewRoman.addEventListener('click', function onClick(event) {
    const ff = 'Times New Roman'; // Define the desired font family here
    document.body.style.fontFamily = "'" + ff + "', 'Times New Roman'";
  });
}
// This function adds a stroke pattern to the screen.
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.width = 2000;
canvas.height = 900;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);


function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function draw(e) {
  if (!isDrawing) return;

  var x = e.clientX + 275;//- canvas.offsetLeft;
  var y = e.clientY + 30;//- canvas.offsetTop;
  console.log("Canvas offsetLeft: " + canvas.offsetLeft);
  console.log("Canvas offsetTop: " + canvas.offsetTop);

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function stopDrawing() {
  isDrawing = false;
}






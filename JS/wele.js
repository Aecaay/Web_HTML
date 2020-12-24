const msg = "还没写";
function hMes(message = msg) {
  const parentDiv = document.createElement("div");
  const div = document.createElement("div");
  div.className = "mes-ct";
  div.innerHTML = message;
  parentDiv.appendChild(div);
  parentDiv.className = "mes-nt";
  document.getElementById("mes").appendChild(parentDiv);

setTimeout(() => {
  parentDiv.remove();
  }, 1000);
  }

window.onload=function(){
  var text=document.getElementById("ftext");
  text.onmouseover = function(){
    move(10)
  };
  text.onmouseout = function(){
    move(-10)
  };
}

var time;

function move(spd){
  clearInterval(time);
  var text = document.getElementById('ftext');
  time = setInterval(function(){
    console.log(text.offsetLeft);
    if(text.offsetLeft == -100+10*spd){
      clearInterval(time);
    }else{
      text.style.left=text.offsetLeft+spd+'px';
    }
  },10);
}

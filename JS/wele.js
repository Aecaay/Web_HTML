const msg = "还没写";
function handleMessage(message = msg) {
  const parentDiv = document.createElement("div");
  const div = document.createElement("div");
  div.className = "mes-ct";
  div.innerHTML = message;
  parentDiv.appendChild(div);
  parentDiv.className = "mes-nt";
  document.getElementById("mes").appendChild(parentDiv);

setTimeout(() => {
  parentDiv.remove();
  }, 2000);
  }

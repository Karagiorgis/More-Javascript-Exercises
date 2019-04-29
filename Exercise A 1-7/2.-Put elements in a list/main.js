colors = ["red", "green", "blue", "black", "yellow"];

function addBands(a) {
  for (i = 0; i < a.length; i++) {
    var li = document.createElement("li");
    var textnode = document.createTextNode(a[i]);
    li.appendChild(textnode);
    document.getElementById("color-list").appendChild(li);
  }
}

addBands(colors);
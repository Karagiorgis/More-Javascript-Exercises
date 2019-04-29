function getInput() {

  var x = document.getElementById("name").value;

  if (x == 0) {
    alert("Please write some text");
  } else {
    var li = document.createElement('li');
    var textnode = document.createTextNode(x);
    li.appendChild(textnode);
    document.getElementById("text").appendChild(li);
  }
   clearText();
}

function clearText() {
  document.getElementById("myform").reset();
}
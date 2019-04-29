function addTable(a, b) {
  
  document.getElementById("tab").style.backgroundColor = getRandomColor();
  
  var a = 1;
  var b = 1;
  
  var myTableDiv = document.getElementById("tab");
  
  for (var i = 0; i < a; i++) {
    var tr = document.createElement('tr');
    tab.appendChild(tr);

    for (var j = 0; j < b; j++) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(tr);
  getRandomColor();
  
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  
};
































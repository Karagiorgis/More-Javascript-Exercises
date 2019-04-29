var imgArray = ['football.jpg', 'tennis.jpg', 'mix.jpg', 'tennistable.jpg', 'cycling.jpg', 'icehockey.jpg', 'cross.jpg', 'soccer.jpg'];
var basePath= "images/";

function imgRandom() {
  
    document.getElementById("images").innerHTML = "";
    for (var i = 0; i < 1; i++) {
        var img = imgArray[Math.floor(Math.random() * imgArray.length)];
        var image = new Image();
        image.src = basePath+img;
        image.className = "classImg";
        document.getElementById("images").appendChild(image);
    }
    
}


















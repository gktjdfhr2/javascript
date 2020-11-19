function over2(obj) {
	obj.src="./image/oguri.gif";
}
function out2(obj) {
	obj.src="./image/duckguri.jpg";
}

var img4 = document.getElementById("img4");

img4.addEventListener("mouseover", function(){
    img4.src="./image/oguri.gif"
});

img4.addEventListener("mouseout", function(){
    img4.src="./image/duckguri.jpg"
});         

//your JS code here. If required.
const square = document.getElementsByClassName('square');

for(let i = 0; i<3; i++){
	square[i].addEventListener("mouseover",()=>{
		if(square[i].id == "square1"){
			erase();
			square[1].style.backgroundColor = "#6F4E37"
			square[2].style.backgroundColor = "#6F4E37"
		}else if(square[i].id == "square2"){
			erase();
			square[0].style.backgroundColor = "#6F4E37"
			square[2].style.backgroundColor = "#6F4E37"
		}else{
			erase();
			square[0].style.backgroundColor = "#6F4E37"
			square[1].style.backgroundColor = "#6F4E37"
		}
	})
	square[i].addEventListener("mouseout", erase);
}
function erase() {
	for(let i = 0; i<3; i++){
		square[i].style.backgroundColor = "#E6E6FA"
	}
}

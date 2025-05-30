//your JS code here. If required.
const inputs = document.querySelectorAll(".code")

inputs.forEach((input,index) => {
	input.addEventListener("input",function(e){
		if(e.target.value && index < 5){
			inputs[index+1].focus();
		}
	input.addEventListener("keydown",function(e){
		if(e.key === "Backspace"){
			if(index > 0){
				if(inputs[index]===""){
					inputs[index-1].focus();
					inputs[index-1].value = "";
				}
			}
})
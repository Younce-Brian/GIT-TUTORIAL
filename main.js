//The Controller of index.html

//Function 1: Change the h1 word
const toggleButton = document.querySelector(".toggleHelloWorld");

toggleButton.addEventListener('click', (e) => {
	const h1 = document.querySelector("h1");

	h1.innerHTML = "Hello World"; //Change h1 state
	
	//Function 2: Change the h1's word color
	h1.style.color = "red";
});

window.onload = () => {
	localStorage.setItem("clickTimes" , "0");

	var clockScreen = document.createElement('h3');
	document.querySelector('.screen').appendChild(clockScreen);
}

var toggleClock = document.querySelector(".clockToggle");
var stopTime;
var setTime = null;

toggleClock.addEventListener('click', () => {

	const h1 = document.querySelector("h1");

	h1.innerHTML = "Clock is starting";


	//Check clicking times
	if(localStorage.getItem("clickTimes") === "0"){
		toggleClock.innerHTML = "Click here to stop watch";

		stopTime = false;

		localStorage.setItem("clickTimes", "1");
	}else{
		if(localStorage.getItem("clickTimes") === "1"){			
			toggleClock.innerHTML = "Click here to start watch";

			stopTime = true;

			localStorage.setItem("clickTimes", "0");
		}
	}


	if(!stopTime){

		setTime = setInterval(() => {
			let time = +$("h3").html();
			time++;
			$("h3").html(time);
		},1000);

	}else{

		clearInterval(setTime);

	}

});

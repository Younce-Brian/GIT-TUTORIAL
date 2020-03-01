//The Controller of index.html

//Function 1: Change the h1 word

const toggleButton = document.querySelector(".toggleHelloWorld");

toggleButton.addEventListener('click', (e) => {
	const h1 = document.querySelector("h1");

	h1.innerHTML = "Hello World"; //Change h1 state
	
	//Function 2: Change the h1's word color
	h1.style.color = "red";
});

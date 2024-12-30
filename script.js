//your JS code here. If required.

const button = document.getElementById("btn");


button.addEventListener("click", () = {
	const input = document.getElementById("ip").value;
	const output = document.getElementById("output");

	const getInput = (inputValue, timeInSec) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(inputValue)
			}, timeInSec*1000);
		});
}

getInput(Number(input), 2)
	.then((number) => {
		output.textContent = `Result: ${number}`;
		return getInput(number*2, 1)
	})
	.then((number) => {
		output.textContent = `Result: ${number}`
		return getInput(number-3, 1)
	})
	.then((number) => {
		output.textContent = `Result: ${number}`;
		return getInput(number/2, 1);
	})
	.then((number) => {
		output.textContent = `Result: ${number}`;
		return getInput(number+10, 1);
	})
	.then((finalResult) => {
		output.textContent = `Final Result: ${finalResult}`
	})
	.catch((error) => console.error(error));

});





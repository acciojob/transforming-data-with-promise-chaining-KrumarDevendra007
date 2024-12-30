//your JS code here. If required.
const input = document.getElementById("ip").value;
const button = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", getInput(input));

const getInput = (number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			output.textContent = `Result: ${number}`;
			resolve(number);
		}, 2000);
	});
}

getInput
	.then((number) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
			const multiplies = number * 2;
			output.textContent = `Result: ${multiplies}`;
			resolve(multiplies);
		    }, 1000);
		});
	})
	.then((multiplies) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const subtracts =  multiplies-3;
				output.textContent = `Result: ${subtracts}`;
				resolve(subtracts);
			}, 1000);
		});
	})
	.then((subtracts) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const divides = subtracts/2;
				output.textContent = `Result: ${divides}`;
				resolve(divides);
			}, 1000);
		});
	})
	.then((divides) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const add = divides+10;
				output.textContent = `Result: ${add}`;
				resolve(add);
			});
		}, 1000);
	})
	.then((number) => {
		output.textContent = `Final Result: ${number}`
	})
	.catch((error) => console.error(error));




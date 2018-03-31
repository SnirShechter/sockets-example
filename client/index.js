let socket = io();

// event listener
socket.on('msg', receive);

function receive(message) {
	let elContainer = document.querySelector('.container');
	elContainer.innerHTML += message + '<br>';
}

function send(event) {
	let elInput = document.querySelector('input');
	event.preventDefault();

// Event emit
	socket.emit('msg', elInput.value);
	elInput.value = '';
}
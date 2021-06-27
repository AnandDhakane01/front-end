
for (let i = 0; i < 400; i++) {
	add_pix();
}

const pixels = document.getElementsByClassName('pix');

for (let i = 0; i < pixels.length; i++) {
	pixels[i].addEventListener('click', function() {
		pixels[i].classList.toggle('clicked');
	})
}

// add pix
function add_pix() {
	const new_pix = document.createElement('div');
	new_pix.className = 'pix';
	const element = document.getElementsByClassName('center');
	element[0].appendChild(new_pix);
}
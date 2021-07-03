var seatsRemaining = 40;
var seatsBooked = 0;

//make the seats
for (let i = 0; i < 40; i++) {
	add_pix(i+1);
}

//selected seats
const pixels = document.getElementsByClassName('pix');
const bookedStatus = document.querySelector('.booked');
const remainingStatus = document.querySelector('.remaining');

for (let i = 0; i < pixels.length; i++) {
	pixels[i].addEventListener('click', function() {
		pixels[i].classList.toggle('clicked');

		// update seat status
		if (pixels[i].classList.contains('clicked')) {
			seatsRemaining -= 1;
			seatsBooked += 1;
		}
		else {
			seatsRemaining += 1;
			seatsBooked -= 1;
		}

		// update innerHTML
		bookedStatus.innerHTML = `Seats Booked: ${seatsBooked}`;
		remainingStatus.innerHTML = `Seats Remaining: ${seatsRemaining}`;
	})
}

// add pix
function add_pix(seatNumber) {
	var new_pix = document.createElement('div');
    new_pix.innerHTML = `<p>${seatNumber}</p>`;
	new_pix.className = 'pix';
	const element = document.getElementsByClassName('center');
	element[0].appendChild(new_pix);
}





const body = document.getElementById("body");
const menu = document.getElementById("menu");
const openButton = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-menu");

function openMenu() {
	body.style.overflow = "hidden";
	menu.style.display = "flex";
	openButton.style.display = "none";
	closeButton.style.display = "flex";
}

function closeMenu() {
	menu.style.display = "none";
	body.style.overflow = "visible";
	openButton.style.display = "flex";
	closeButton.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	const slides = document.getElementsByClassName("slide-wrapper");
	let i;

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "flex";
}

function showMore() {
	const more = document.getElementById("moreDogs");
	const moreButton = document.getElementById("moreIcon");
	more.style.display = "flex";
	moreButton.style.display = "none";
}

function yesOption() {
	const yes = document.getElementById("button-yes");
	const no = document.getElementById("button-no");

	yes.style.background = "pink";
	no.style.display = "red";
}

function noOption() {
	const yes = document.getElementById("button-yes");
	const no = document.getElementById("button-no");
}




function selectDog(dog) {
	const div = document.getElementById('dog-profile');
	if(dog === 'luna') {
		let tempItem = document.createElement('div');
		let title = renderItem('span', item);
		let deleteTempButton = renderItem('button', 'x');

		deleteTempButton.setAttribute('onclick', 'deleteTemp()');

		tempItem.appendChild(title);
		tempItem.appendChild(deleteTempButton);
		tempList.appendChild(tempItem);
		div.appendChild(tempList);

	} else if (dog === 'duque') {
		console.log('duque');
	} else if (dog === 'perola') {
		console.log('Pérola');
	} else if (dog === 'thor') {
		console.log('thor');
	} else if (dog === 'rex') {
		console.log('rex');
	} else if (dog === 'vilma') {
		console.log('vilma');
	} else if (dog === 'princesa') {
		console.log('princesa');
	} else if (dog === 'eva') {
		console.log('eva');
	} else if (dog === 'puppy') {
		console.log('puppy');
	} else if (dog === 'mike') {
		console.log('mike');
	}
}

function renderItem(el, txt) {
	let listItem = document.createElement(el);
	let itemText = document.createTextNode(txt);

	listItem.appendChild(itemText)

	return listItem;
}
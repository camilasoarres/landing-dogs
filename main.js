const body = document.getElementById("body");
const menu = document.getElementById("menu");
const openButton = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-menu");

let selectedDogDescription = 'undefined';
let selectedDogImage;

function openMenu() {
	body.style.overflow = "hidden";
	menu.style.display = "flex";
	openButton.style.display = "none";
	closeButton.style.display = "flex";
}

function closeMenu() {
	if (window.innerWidth < 780) {
		menu.style.display = "none";
		body.style.overflow = "visible";
		openButton.style.display = "flex";
		closeButton.style.display = "none";
	}
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

	yes.style.background = "#00CA88";
	no.style.background = "#F2F2F2";
	yes.style.color = "#fff";
	no.style.color = "#575757";
}

function noOption() {
	const yes = document.getElementById("button-yes");
	const no = document.getElementById("button-no");

	yes.style.background = "#F2F2F2";
	no.style.background = "#FF0000";
	yes.style.color = "#575757";
	no.style.color = "#fff";
}

function selectDog(dog) {
	console.log(dog);
}

function renderSlide() {
	// dogsArr.map((dog) => {
	// 	let Item = document.getElementById('first-content');
	// 	let dogItem = document.getElementById('dog-profile');
	// 	let title = renderItem('p', selectedDogDescription);
	// 	let age = renderItem('p', selectedDogImage);
	// 	let image = document.createElement("img");
	// 	image.setAttribute("src", selectedDogImage);
	// 	deleteTempButton.setAttribute('src', 'deleteTemp()');

	// 	dogItem.appendChild(title);
	// 	dogItem.appendChild(age);
	// 	Item.appendChild(dogItem);
	// });
}

function renderItem(el, txt) {
	let listItem = document.createElement(el);
	let itemText = document.createTextNode(txt);

	listItem.appendChild(itemText)

	return listItem;
}

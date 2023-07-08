//Typing content in the hoem-main section
var typed = new Typed("#element", {
	strings: ["<i>Web</i> Developer", "<i>Data</i> Analyst", "&#38; <i>Java</i> Developer"],
    typeSpeed: 40,
    loop: true,
});
//Scrolling through the mouse horizontally in certificate section
const scrollContainer1 = document.querySelector(".container-certificate");

scrollContainer1.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	scrollContainer1.scrollLeft += evt.deltaY;
});
const scrollContainer2 = document.querySelector(".container-projects");

scrollContainer2.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	scrollContainer2.scrollLeft += evt.deltaY;
});

const scrollContainer3 = document.querySelector(".work-exp");

scrollContainer3.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	scrollContainer3.scrollLeft += evt.deltaY;
});


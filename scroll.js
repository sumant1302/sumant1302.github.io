const focusRotator = document.querySelector("#focus-rotator");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const siteHeader = document.querySelector(".site-header");
const footerYear = document.querySelector("#year");

const focusAreas = [
	"Enterprise modernization",
	"API performance",
	"Secure full-stack delivery",
	"Reusable AI interfaces",
];

let focusIndex = 0;

if (focusRotator) {
	setInterval(() => {
		focusIndex = (focusIndex + 1) % focusAreas.length;
		focusRotator.textContent = focusAreas[focusIndex];
	}, 2400);
}

if (navToggle && siteNav) {
	navToggle.addEventListener("click", () => {
		const isOpen = siteNav.classList.toggle("is-open");
		navToggle.setAttribute("aria-expanded", String(isOpen));
	});

	siteNav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			siteNav.classList.remove("is-open");
			navToggle.setAttribute("aria-expanded", "false");
		});
	});
}

if (siteHeader) {
	window.addEventListener("scroll", () => {
		siteHeader.classList.toggle("scrolled", window.scrollY > 16);
	});
}

if (footerYear) {
	footerYear.textContent = new Date().getFullYear();
}


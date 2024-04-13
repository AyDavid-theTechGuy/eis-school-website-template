// Submenus - Dropdowns

const dropdown = document.querySelectorAll(".submenu .dropdown-btn");
const dropdownIcon = document.querySelectorAll(".submenu .dropdown-btn .material-icons");
const dropdownContent = document.querySelectorAll(".submenu .dropdown-content");

for (let i = 0; i < dropdown.length; i++) {
	dropdown[i].parentElement.addEventListener("mouseenter", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].style.display = "block";
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].textContent = "expand_less";
			}
		}
	});

	dropdown[i].parentElement.addEventListener("mouseleave", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].style.display = "none";
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].textContent = "expand_more";
			}
		}
	});
}

// Banner Slider

const banner = document.querySelector(".banner");
let imgs = document.querySelectorAll('.banner-slider img');
let currentImg = 0; // index of the first image
const interval = 3000; // duration(speed) of the slide

for (let i = 0; i < imgs.length; i++) { // reset
  imgs[i].style.opacity = 0;
}

const bannerSlider = function () {
	let cur = 0;
	const tick = function () {
		for (let i = 0; i < imgs.length; i++) { // reset
			if (i == cur) {
				imgs[i].style.opacity = 1;
				continue;
			}
			imgs[i].style.opacity = 0;
	  }

		if (cur < 2) {
			cur++;
		} else {
			cur = 0;
		}
	}
	tick();
	timer = setInterval(tick, 3000);
}
bannerSlider();

// News Carousel Slider

const prevNewsBtn = document.getElementById('prevNewsBtn');
const nextNewsBtn = document.getElementById('nextNewsBtn');
const newsCarouselSlide = document.querySelector('.news-carousel-slide');
const newsCards = document.querySelectorAll('.news-card');

let currentIndex = 0;
const totalItems = newsCards.length;
const itemWidth = newsCards[0].offsetWidth;

nextNewsBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 3) {
        currentIndex++;
        updateCarousel();
    }
});

prevNewsBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    newsCarouselSlide.style.transform = `translateX(${offset}px)`;
}


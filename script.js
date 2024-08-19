let images = [{
    url: "img/image_1.jpg",
    city: "Rostov-on-Don",
    cityApart:  "LCD admiral",
    area: "81 m2",
    repairTime: "3.5 months"
}, {
    url: "img/image_2.jpg",
    city: "Sochi",
    cityApart: "Thieves",
    area: "105 m2",
    repairTime: "4 months"
}, {
    url: "img/image_3.jpg",
    city: "Rostov-on-Don",
    cityApart: "Patriotic",
    area: "93 m2",
    repairTime: "3 months"
}]

function initSlider() {
    if (!images || !images.length) return;

    let sliderMedia = document.querySelector(".slider-media");
    let sliderImg = document.querySelector(".slider-imgs");
    let navDiv = document.querySelector(".slider-navigation-buttons");
    let aboutProject = document.querySelector(".slider-description-completed-about");
    let containerSlider = document.querySelector(".container-slider");

    initImages();
    initArrows();
    initCircles();
    initUrls();

    function initImages() {
        images.forEach((imgData, index) => {
            let active = "";
            if (index === 0) active = "active";
            let imgTag = `<img src="${images[index].url}" data-index="${index}" class="img-slider ${active}" alt="${images[index].city} ${images[index].cityApart}">`;
            sliderImg.innerHTML += imgTag;

            let cityTag = `<span data-index="${index}" class="no-active ${active}">${images[index].city}<br>
                           ${images[index].cityApart}</span>`
            aboutProject.querySelector(".city-data").innerHTML += cityTag;

            let areaTag = `<span data-index="${index}" class="no-active ${active}">${images[index].area}</span>`;
            aboutProject.querySelector(".apartment-data").innerHTML += areaTag;

            let timeTag = `<span data-index="${index}" class="no-active ${active}">${images[index].repairTime}</span>`;
            aboutProject.querySelector(".time-data").innerHTML += timeTag;
        });
    };

    function initArrows() {        
        navDiv.querySelectorAll(".slider-arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImg.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    };

    function initCircles() {
        images.forEach((image, index) => {
            let circle = `<div class="nav-circle ${index===0 ? "active" : ""}" data-index="${index}"></div>`;
            navDiv.querySelector(".circles").innerHTML += circle;
        });
        navDiv.querySelectorAll(".nav-circle").forEach(circle => {
            circle.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    };

    function initUrls() {
        sliderMedia.querySelectorAll(".url-project").forEach(urlProject => {
            urlProject.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            });
        });
    };

    function moveSlider(num) {
        containerSlider.querySelectorAll(".active").forEach((index) => {
            index.classList.remove("active");
        });

        containerSlider.querySelectorAll(`[data-index="${num}"]`).forEach((index) => {
            index.classList.add("active");
        });
    }
};

document.addEventListener("DOMContentLoaded", initSlider);
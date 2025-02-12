const slider = document.getElementById("js-cta-slider"),
    sliderCounter = document.getElementById("js-cta-slider-counter"),
    sliderNext = document.getElementById("js-cta-slider-next"),
    sliderPrevious = document.getElementById("js-cta-slider-previous"),
    interleaveOffset = 0.75,
    swiper = new Swiper(slider, {
        loop: !1,
        autoplay: !0,
        speed: 1e3,
        allowTouchMove: !1,
        watchSlidesProgress: !0,
        mousewheelControl: !1,
        mousewheel: !1,
        pagination: {
            el: ".pagination1",
            type: "custom",
            renderCustom: function (e, l, o) {
                return o > 10
                    ? l > 9
                        ? `<span class="current">${l}</span><i>/</i><span class="total">${o}</span>`
                        : `<span class="current">0${l}</span><i>/</i><span class="total">${o}</span>`
                    : l > 9
                    ? `<span class="current">${l}</span><i>/</i><span class="total">0${o}</span>`
                    : `<span class="current">0${l}</span><i>/</i><span class="total">0${o}</span>`;
            },
        },
        scrollbar: { el: ".swiper-progressbar" },
        navigation: { nextEl: ".nextSlide", prevEl: ".prevSlide" },
        on: {
            progress: function () {
                let e = this;
                for (let l = 0; l < e.slides.length; l++) {
                    let o = e.slides[l].progress * (0.75 * e.width);
                    TweenMax.set(e.slides[l].querySelector(".slide-inner"), { x: o });
                }
            },
            touchStart: function () {
                let e = this;
                for (let l = 0; l < e.slides.length; l++) e.slides[l].style.transition = "";
            },
            setTransition: function (e) {
                let l = this;
                for (let o = 0; o < l.slides.length; o++) (l.slides[o].style.transition = e + "ms"), (l.slides[o].querySelector(".slide-inner").style.transition = e + "ms");
            },
        },
    });
let titleMain = document.querySelectorAll(".Title-main");
titleMain.forEach((e) => {
    gsap.to(e.querySelector("h1,h2,h4"), { scrollTrigger: { trigger: e.querySelector("h1,h2,h4"), start: "top 90%", end: "bottom bottom" }, y: "0" }),
        gsap.to(e.querySelector(".line"), { scrollTrigger: { trigger: e.querySelector(".line"), start: "top 90%", end: "bottom bottom" }, width: "60px" });
});
let scrollTop = document.querySelectorAll(".scrollTop");
scrollTop.forEach((e) => {
    gsap.from(e, { scrollTrigger: { trigger: e, start: "top 90%", end: "bottom bottom" }, y: "20vh", opacity: 0 });
});
const videoSlider = new Swiper(".videoSlider", {
        speed: 1e3,
        loop: !0,
        centeredSlides: false,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: { el: ".swiper-pagination" },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        scrollbar: { el: ".swiper-scrollbar" },
    }),
    paraSlider = new Swiper(".paraSlider", { speed: 1e3, loop: !0, allowTouchMove: !1, navigation: { nextEl: ".nextPara", prevEl: ".prevPara" } }),
    imgSlider = new Swiper(".imgSlider", { speed: 1e3, loop: !0, allowTouchMove: !1, navigation: { nextEl: ".nextPara", prevEl: ".prevPara" } });
let sGallery = document.querySelector(".sGallery"),
    popUpVideo = document.querySelector(".popUpVideo"),
    closepopUpVideo = document.querySelector(".closepopUpVideo"),
    playVideoOpen = document.querySelectorAll(".playVideoOpen");
playVideoOpen.forEach((e) => {
    e.addEventListener("click", function (l) {
        popUpVideo.classList.add("popOpen");
        let o = e.getAttribute("data-videoUrl"),
            t = document.querySelector(".popUpVideo iframe");
        console.log("vodUrl", o), console.log("videoPop", t), t.setAttribute("src", o);
    });
}),
    closepopUpVideo.addEventListener("click", function (e) {
        popUpVideo.classList.remove("popOpen");
    });
let popUpGalleryContainer = document.querySelector(".popUpGalleryContainer"),
    closeSlider = document.querySelector(".closeSlider"),
    closePop = document.querySelector(".closePop"),
    openGallery = document.querySelectorAll(".openGallery"),
    galleryFlag = !0,
    body = document.querySelector("body"),
    fThumb = document.querySelector(".fThumb"),
    thumbBox = document.querySelectorAll(".thumbBox"),
    openVideoThumb = document.querySelectorAll(".openVideoThumb"),
    sGalleryFlag = !0;
const popSlider = new Swiper(".popSlider", {
    loop: !0,
    slidesPerView: 1,
    speed: 1e3,
    centeredSlides: !0,
    navigation: { nextEl: ".nextPop", prevEl: ".prevPop" },
    pagination: {
        el: ".popSliderFraction",
        type: "custom",
        renderCustom: function (e, l, o) {
            return o > 10
                ? l > 9
                    ? `<span class="current">${l}</span><i>/</i><span class="total">${o}</span>`
                    : `<span class="current">0${l}</span><i>/</i><span class="total">${o}</span>`
                : l > 9
                ? `<span class="current">${l}</span><i>/</i><span class="total">0${o}</span>`
                : `<span class="current">0${l}</span><i>/</i><span class="total">0${o}</span>`;
        },
    },
});
openGallery.forEach((e) => {
    e.addEventListener("click", function (e) {
        galleryFlag && (fThumb.classList.add("popOpen"), popUpGalleryContainer.classList.add("popOpen"), (galleryFlag = !galleryFlag), (body.style.overflow = "hidden"), lenis.stop());
    });
});
for (let e = 0; e < thumbBox.length; e++) {
    thumbBox[e].addEventListener("click", function (l) {
        popSlider.slideTo(e + 1, 0), sGallery.classList.add("popOpen"), (sGalleryFlag = !sGalleryFlag), popUpGalleryContainer.scrollTo(0, 0), (popUpGalleryContainer.style.overflow = "hidden");
    });
}
closeSlider.addEventListener("click", function (e) {
    sGallery.classList.remove("popOpen"), (sGalleryFlag = !sGalleryFlag), (popUpGalleryContainer.style.overflow = "auto");
}),
    closePop.addEventListener("click", function (e) {
        galleryFlag || (popUpGalleryContainer.classList.remove("popOpen"), (galleryFlag = !galleryFlag), (body.style.overflow = "auto"), lenis.start());
    }),
    openVideoThumb.forEach((e, l) => {
        e.addEventListener("click", function (o) {
            console.log(e),
                galleryFlag &&
                    ((sGallery.style.transition = "0s"),
                    fThumb.classList.add("popOpen"),
                    popUpGalleryContainer.classList.add("popOpen"),
                    setTimeout(() => {
                        sGallery.style.transition = "1s";
                    }, 1e3),
                    sGallery.classList.add("popOpen"),
                    (galleryFlag = !galleryFlag),
                    (body.style.overflow = "hidden"),
                    popSlider.slideTo(l + 1, 0),
                    (sGalleryFlag = !sGalleryFlag),
                    popUpGalleryContainer.scrollTo(0, 0),
                    (popUpGalleryContainer.style.overflow = "hidden"));
        });
    });
let videoC = document.querySelector(".popUpVideo .inVideo"),
    overlays = document.querySelectorAll(".inVideo .overlay"),
    is = !0;
videoC.addEventListener("click", (e) => {
    overlays.forEach((l) => {
        l.classList.add("hide"), e.stopPropagation();
        const o = new Plyr("#player");
        is && (o.play(), (is = !1));
    });
});

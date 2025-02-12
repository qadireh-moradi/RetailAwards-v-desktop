const mainPosterSlider = new Swiper(".mainPosterSlider", {
    autoplay: { delay: 3e3 },
    speed: 1e3,
    effect: "fade",
    fadeEffect: { crossFade: !0 },
    pagination: {
        el: ".pagination1",
        type: "custom",
        renderCustom: function (e, l, o) {
            return o > 9
                ? l > 9
                    ? `<span class="current">${l}</span><i>/</i><span class="total">${o}</span>`
                    : `<span class="current">0${l}</span><i>/</i><span class="total">${o}</span>`
                : l > 9
                ? `<span class="current">${l}</span><i>/</i><span class="total">0${o}</span>`
                : `<span class="current">0${l}</span><i>/</i><span class="total">0${o}</span>`;
        },
    },
    navigation: { nextEl: ".nextMain", prevEl: ".prevMain" },
});
let titleMain = document.querySelectorAll(".Title-main");
titleMain.forEach((e) => {
    gsap.to(e.querySelector("h1,h2,h3,h4"), { scrollTrigger: { trigger: e.querySelector("h1,h2,h4"), start: "top 90%", end: "bottom bottom" }, y: "0" }),
        gsap.to(e.querySelector(".line"), { scrollTrigger: { trigger: e.querySelector(".line"), start: "top 90%", end: "bottom bottom" }, width: "60px" });
});
let scrollTop = document.querySelectorAll(".scrollTop");
scrollTop.forEach((e) => {
    gsap.from(e, { scrollTrigger: { trigger: e, start: "top 90%", end: "bottom bottom" }, y: "20vh", opacity: 0 });
}),
    jQuery(".openPara").readmore({
        speed: 300,
        collapsedHeight: 103,
        moreLink: '<button class="readMoreBtn"> <span>+</span> مشاهده بیشتر</button>',
        lessLink: '<button class="readMoreBtn"> <span>-</span> مشاهده کمتر</button>',
        heightMargin: 16,
        afterToggle: function (e, l, o) {},
    });
const branSlider = new Swiper(".branSlider", { loop: !0, slidesPerView: 5, speed: 1e3, spaceBetween: 51, autoplay: { delay: 0 } }),
    commendSlider = new Swiper(".commendSlider", { loop: !0, slidesPerView: 2.8, speed: 1e3, spaceBetween: 20, navigation: { nextEl: ".nextCommen", prevEl: ".prevCommen" } }),
    imgGallerySlider = new Swiper(".imgGallerySlider", { slidesPerView: 2, speed: 1e3, centeredSlides: !0, spaceBetween: 48, navigation: { nextEl: ".nextconfer", prevEl: ".prevconfer" }, grabCursor: !0, loop: !0 }),
    conferSlider = new Swiper(".conferSlider", {
        slidesPerView: 2,
        speed: 1e3,
        centeredSlides: !0,
        spaceBetween: 48,
        navigation: { nextEl: ".prevconfer", prevEl: ".nextconfer" },
        pagination: { el: ".conferSliderPagination", clickable: !0 },
    }),
    txtSlider = new Swiper(".txtSlider", { effect: "fade", fadeEffect: { crossFade: !0 }, speed: 1e3, navigation: { nextEl: ".nextconfer", prevEl: ".prevconfer" }, pagination: { el: ".conferSliderPagination", clickable: !0 } });
function countLines() {
    var e = document.querySelectorAll(".openParaSlide p");
    let l = document.querySelectorAll(".btnOpenParaSlide");
    e.forEach((e, o) => {
        var r = e.offsetHeight / 22;
        console.log(r), r < 4 && (l[o].style.display = "none");
    });
}
(conferSlider.controller.control = txtSlider), (txtSlider.controller.control = conferSlider), countLines();
const rightSlider = new Swiper(".rightSlider", { speed: 1e3, loop: !1, navigation: { nextEl: ".prevRight", prevEl: ".nextRight" } }),
    leftSlider = new Swiper(".leftSlider", { speed: 1e3, slidesPerView: 1.3, loop: !1, spaceBetween: 20, navigation: { nextEl: ".prevRight", prevEl: ".nextRight" } });
(rightSlider.controller.control = leftSlider), (leftSlider.controller.control = rightSlider);
const videoGallery = new Swiper(".videoGallery", {
    loop: !0,
    slidesPerView: 2,
    speed: 1e3,
    centeredSlides: !0,
    spaceBetween: 200,
    pagination: { el: ".swiper-pagination" },
    navigation: { nextEl: ".nextVideoGallery", prevEl: ".prevVideoGallery" },
});
function countLines6() {
    var e = document.querySelectorAll(".ShowMorePara6 p");
    let l = document.querySelectorAll(".para6Btn");
    e.forEach((e, o) => {
        var r = e.offsetHeight / 22;
        console.log(r), r < 2 && (l[o].style.display = "none");
    });
}
countLines6();
let popUpVideo = document.querySelector(".popUpVideo"),
    closepopUpVideo = document.querySelector(".closepopUpVideo"),
    playVideoOpen = document.querySelectorAll(".playVideoOpen");
playVideoOpen.forEach((e) => {
    e.addEventListener("click", function (l) {
        popUpVideo.classList.add("popOpen");
        let o = e.getAttribute("data-videoUrl"),
            r = document.querySelector(".popUpVideo iframe");
        console.log("vodUrl", o), console.log("videoPop", r), r.setAttribute("src", o);
    });
}),
    closepopUpVideo.addEventListener("click", function (e) {
        popUpVideo.classList.remove("popOpen");
    });
let popUpVideoGalleryContainer = document.querySelector(".popUpVideoGalleryContainer"),
    openGalleryPop = document.querySelectorAll(".openGalleryPop"),
    galleryFlag = !0,
    body = document.querySelector("body"),
    fThumb = document.querySelector(".fThumb"),
    thumbBox = document.querySelectorAll(".thumbBox"),
    sGalleryFlag = !0,
    sGallery = document.querySelector(".sGallery"),
    closeSlider = document.querySelector(".closeSlider"),
    closePop = document.querySelector(".closePop"),
    openVideoGallery = document.querySelectorAll(".openVideoGallery");
openGalleryPop.forEach((e) => {
    e.addEventListener("click", function (e) {
        galleryFlag && (fThumb.classList.add("popOpen"), popUpVideoGalleryContainer.classList.add("popOpen"), (galleryFlag = !galleryFlag), (body.style.overflow = "hidden"));
    });
});
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
for (let e = 0; e < thumbBox.length; e++)
    thumbBox[e].addEventListener("click", function (l) {
        sGalleryFlag && (popSlider.slideTo(e + 1, 0), sGallery.classList.add("popOpen"), (sGalleryFlag = !1), popUpVideoGalleryContainer.scrollTo(0, 0), (popUpVideoGalleryContainer.style.overflow = "hidden"));
    });
closeSlider.addEventListener("click", function (e) {
    sGallery.classList.remove("popOpen"), (sGalleryFlag = !0), (popUpVideoGalleryContainer.style.overflow = "auto");
}),
    closePop.addEventListener("click", function (e) {
        galleryFlag || (popUpVideoGalleryContainer.classList.remove("popOpen"), (galleryFlag = !galleryFlag), (body.style.overflow = "auto"));
    }),
    openVideoGallery.forEach((e, l) => {
        e.addEventListener("click", function (o) {
            console.log(e),
                galleryFlag &&
                    sGalleryFlag &&
                    (fThumb.classList.add("popOpen"),
                    popUpVideoGalleryContainer.classList.add("popOpen"),
                    sGallery.classList.add("popOpen"),
                    (galleryFlag = !galleryFlag),
                    (body.style.overflow = "hidden"),
                    popSlider.slideTo(l + 1, 0),
                    (sGalleryFlag = !sGalleryFlag),
                    popUpVideoGalleryContainer.scrollTo(0, 0),
                    (popUpVideoGalleryContainer.style.overflow = "hidden"));
        });
    });
const thmbPopSlider = new Swiper(".thmbPopSlider", { slidesPerView: 6, spaceBetween: 15, speed: 1e3 }),
    popUpSlider = new Swiper(".popUpSlider", {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 1e3,
        loop: !0,
        autoplay: { delay: 2e3 },
        thumbs: { swiper: thmbPopSlider },
        navigation: { nextEl: ".nextpopUpSlider", prevEl: ".prevpopUpSlider" },
        pagination: {
            el: ".popImgGalleryFractio",
            type: "custom",
            renderCustom: function (e, l, o) {
                return o > 9
                    ? l > 9
                        ? `<span class="current">${l}</span><i>/</i><span class="total">${o}</span>`
                        : `<span class="current">0${l}</span><i>/</i><span class="total">${o}</span>`
                    : l > 9
                    ? `<span class="current">${l}</span><i>/</i><span class="total">0${o}</span>`
                    : `<span class="current">0${l}</span><i>/</i><span class="total">0${o}</span>`;
            },
        },
    });
popUpSlider.autoplay.stop();
let playBtns = document.querySelector(".playBtns"),
    scrollBarpopUpImgGallery = document.querySelector(".scrollBarpopUpImgGallery ");
function pausePop(e) {
    playBtns.classList.remove("pauseFlag"), playBtns.classList.add("playFlag"), scrollSpan.classList.remove("scrollSpanAnimation"), scrollBarpopUpImgGallery.classList.add("hidden"), popUpSlider.autoplay.stop();
}
function playPop(e) {
    playBtns.classList.remove("playFlag"),
        playBtns.classList.add("pauseFlag"),
        scrollSpan.classList.add("scrollSpanAnimation"),
        scrollBarpopUpImgGallery.classList.remove("hidden"),
        setTimeout(() => {
            popUpSlider.autoplay.start();
        }, 800);
}
$(".pausePopUp").click(function () {
    pausePop();
}),
    $(".playPopUp").click(function () {
        playPop();
    });
let overZoom = document.querySelectorAll(".overZoom"),
    thmbPopSliders = document.querySelectorAll(".thmbPopSlider .swiper-slide"),
    scrollSpan = document.querySelector(".scrollSpan"),
    nextpopUpSlider = document.querySelector(".nextpopUpSlider"),
    prevpopUpSlider = document.querySelector(".prevpopUpSlider"),
    closePopUpImgGallery = document.querySelector(".closePopUpImgGallery"),
    popUpImgGallery = document.querySelector(".popUpImgGallery");
overZoom.forEach((e) => {
    e.addEventListener("click", function (e) {
        popUpImgGallery.classList.add("popOpen"),
            setTimeout(() => {
                popUpSlider.autoplay.start();
            }, 800),
            scrollSpan.classList.add("scrollSpanAnimation");
    });
}),
    closePopUpImgGallery.addEventListener("click", function (e) {
        popUpImgGallery.classList.remove("popOpen"), console.log("cls"), popUpSlider.autoplay.stop(), scrollSpan.classList.remove("scrollSpanAnimation");
    }),
    nextpopUpSlider.addEventListener("click", pausePop),
    prevpopUpSlider.addEventListener("click", pausePop),
    thmbPopSliders.forEach((e) => {
        e.addEventListener("click", pausePop);
    });
let openVideoGallery6 = document.querySelectorAll(".openVideoGallery6"),
    fThumb6 = document.querySelector(".fThumb6"),
    thumbBox6 = document.querySelectorAll(".thumbBox6"),
    popUpVideoGalleryContainer6 = document.querySelector(".popUpVideoGalleryContainer6"),
    sGallery6 = document.querySelector(".sGallery6"),
    closeSlider6 = document.querySelector(".closeSlider6"),
    closePop6 = document.querySelector(".closePop6");
const popSlider6 = new Swiper(".popSlider6", {
    loop: !0,
    slidesPerView: 1,
    speed: 1e3,
    centeredSlides: !0,
    navigation: { nextEl: ".nextPop6", prevEl: ".prevPop6" },
    pagination: {
        el: ".popSliderFraction6",
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
for (let e = 0; e < thumbBox6.length; e++)
    thumbBox6[e].addEventListener("click", function (l) {
        console.log(sGalleryFlag), popSlider6.slideTo(e + 1, 0), sGallery6.classList.add("popOpen"), (sGalleryFlag = !sGalleryFlag), popUpVideoGalleryContainer6.scrollTo(0, 0), (popUpVideoGalleryContainer6.style.overflow = "hidden");
    });
closeSlider6.addEventListener("click", function (e) {
    sGallery6.classList.remove("popOpen"), (sGalleryFlag = !sGalleryFlag), (popUpVideoGalleryContainer6.style.overflow = "auto");
}),
    closePop6.addEventListener("click", function (e) {
        galleryFlag || (popUpVideoGalleryContainer6.classList.remove("popOpen"), (galleryFlag = !galleryFlag), (body.style.overflow = "auto"));
    }),
    openVideoGallery6.forEach((e, l) => {
        e.addEventListener("click", function (o) {
            console.log(e),
                galleryFlag &&
                    sGalleryFlag &&
                    (fThumb6.classList.add("popOpen"),
                    popUpVideoGalleryContainer6.classList.add("popOpen"),
                    sGallery6.classList.add("popOpen"),
                    (galleryFlag = !galleryFlag),
                    (body.style.overflow = "hidden"),
                    popSlider6.slideTo(l + 1, 0),
                    (sGalleryFlag = !sGalleryFlag),
                    popUpVideoGalleryContainer6.scrollTo(0, 0),
                    (popUpVideoGalleryContainer6.style.overflow = "hidden"));
        });
    });

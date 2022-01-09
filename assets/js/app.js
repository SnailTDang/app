const imgMove = document.querySelector(".img-move");
const header = document.querySelector("header");
const radiusHovers = document.querySelectorAll(".img-radius");
const hoverUpremoves = document.querySelectorAll(".hover-remove");
const prciceItems = document.querySelectorAll(".price-box");
const priceButton = document.querySelector(".option-button");
const priceOptions = priceButton.querySelectorAll("button");
const freePrice = document.querySelector(".month-button");
const paidPrice = document.querySelector(".annucally-button");
const menuMobile = document.querySelector(".menu-mb-bg");
const menuMobileHiden = document.querySelector(".menu-mb-items");
const menuOpen = document.querySelector(".meunu-mb").querySelector("i");
const menuMobileLinks = document.querySelectorAll(".item-mb-link");

function openMeunu() {
  menuMobileHiden.classList.toggle("menu-mb-open");
  menuMobile.classList.toggle("menu-mb-fly");
  menuOpen.classList.toggle("fa-bars");
  menuOpen.classList.toggle("fa-times");
  menuMobile.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

menuMobileHiden.addEventListener("click", openMeunu);

menuMobileLinks.forEach((e) => {
  e.addEventListener("click", openMeunu);
});

menuOpen.addEventListener("click", openMeunu);

function imageMove() {
  setInterval(() => {
    imgMove.classList.toggle("img-move-active");
  }, 1400);
}

imageMove();

function hover3D() {
  $(".img-radius").hover3d({
    selector: ".img-radius-hover",
    sensitivity: -2.5,
    perspective: 1000,
    hoverInClass: "hover-in",
    hoverOutClass: "hover-out",
    hoverClass: "hover-3d",
  });
}

$(document).ready(function () {
  $(".partners-items").slick({
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplaySpeed: 2000,
    prevArrow: $(".pre"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

function changeHeaderColor() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("header-color");
  } else {
    header.classList.remove("header-color");
  }
}

function hoverBorderPrice() {
  for (let prciceItem of prciceItems) {
    prciceItem.classList.remove("price-box-border");
  }
  this.classList.add("price-box-border");
}

function chooseFree() {
  priceButton.classList.remove("option-button-active");
  for (let priceOption of priceOptions) {
    priceOption.classList.remove("text-color-button");
  }
  this.classList.add("text-color-button");
}

function choosePaid() {
  priceButton.classList.add("option-button-active");
  for (let priceOption of priceOptions) {
    priceOption.classList.remove("text-color-button");
  }
  this.classList.add("text-color-button");
}

window.addEventListener("scroll", changeHeaderColor);
for (let radiusHover of radiusHovers) {
  radiusHover.addEventListener("mouseenter", hover3D);
}
prciceItems.forEach((e) => {
  e.addEventListener("mouseenter", hoverBorderPrice);
});

freePrice.addEventListener("mouseenter", chooseFree);
paidPrice.addEventListener("mouseenter", choosePaid);

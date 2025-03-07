$(document).ready(function () {
  $(".logo-icon").click(() => {
    $(".ul-flex").slideToggle("fast");
  });
});
$(window).on("load", () => {
  $(".page-content, .qoute").addClass("active");
});

// -------javascript---------
const names = document.querySelectorAll(".name");
const talks = document.querySelectorAll(".talk");
const testimonys = document.querySelectorAll(".testimony");
const iconLeft = document.querySelector(".icon-left");
const iconRight = document.querySelector(".icon-right");
function myTestimonies() {
  myClick = 0;
  maxSlide = testimonys.length;
  function goToSlide(myClick) {
    testimonys.forEach((testimony, i) => {
      testimony.style.transform = `translateX(${150 * (i - myClick)}%)`;
    });
  }
  goToSlide(myClick);
  function right() {
    if (myClick === maxSlide - 1) {
      myClick = 0;
    } else {
      myClick++;
    }
    goToSlide(myClick);
  }
  function left() {
    if (myClick === 0) {
      myClick = maxSlide - 1;
    } else {
      myClick--;
    }
    goToSlide(myClick);
  }
  iconLeft.addEventListener("click", left);
  iconRight.addEventListener("click", right);
  setInterval(left, 5000);
}
myTestimonies();

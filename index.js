let resName = document.getElementById("resName");
let resBaka = document.getElementById("resBaka");
let resTel = document.getElementById("resTel");
let resDate = document.getElementById("resDate");
let resTime = document.getElementById("resTime");

function Submit(event){
    event.preventDefault()
    const message = `بعد إذن حضراتكم، عايز أعمل حجز باسم: ${resName.value}، بباقه: ${resBaka.value}، في يوم: ${resDate.value}، الساعة: ${resTime.value}، ورقم التواصل: ${resTel.value}`;
    const phoneNumber = "966 55 078 1986"; // ← حط رقم الواتساب هنا بدون + ومفتاح الدولة في الأول
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



/*============= loader ========*/

let loader = document.querySelector(".loader-container");
let container = document.querySelector(".home");
let home_img = document.querySelector(".home-img");

window.onload = () => {
  container.classList.replace("hidden", "visable");
  loader.classList.replace("visable", "hidden");
};

/*============= toggle nav button expand =======*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

/*============= toggle nav active links ========*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let asta = document.getElementById("asta");
let yono = document.getElementById("yono");
let title = document.getElementById("parallax_title");

window.onscroll = () => {
  /*============= change nav active item ========*/
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height - 5) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
  /*============= Parallax ==========*/
  //title.style.marginTop = top * 2.5 + 'px'
  $("#html").css("left", -top * 1.1 + "px");
  $("#css").css("top", top * 0.1 + "px");
  $("#js").css("right", top * 0.1 + "px");
  $("#ai").css("left", top * 0.1 + "px");
  $("#backend").css("left", top * 0.1 + "px");
  $("#name").css("trans", top * 2.1 + "px");
  $("#python").css("left", top * 0.1 + "px");

  //asta.style.right = top * .5 + 'px'

  /*============= sticky navbar ========*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  /*============= sticky navbar ========*/
};

// home_img.addEventListener('mousemove', function (event) {
//     const xPosition = event.layerX
//     const yPosition = event.layerY

//     home_img.style.transform = `rotateY(${xPosition / 50}deg) rotateX(${-yPosition / 50}deg)`
// })

/*============= Scroll Reveal ========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form ",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content ", { origin: "right" });

/*============= Typed Text ========*/

const typed = new Typed(".multiple-text", {
  strings: [
    "Laravel Developer",
    "Multi-mediaDesigner",
    "System Analyser and Design",
  ],
  typeSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// Window.onload = () => {
//     querySelector('footer-text').style.marginTop = '17px'
// }

(function () {
  emailjs.init("r7d-a8ZmKBM7X-J2v"); // Replace with your EmailJS user ID
})();

function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  const form = event.target;

  const data = {
    name: form.name.value,
    subject: form.subject.value,
    email: form.email.value,
    phone: form.phone.value,
    body: form.body.value,
    reply_to: form.email.value,
  };
  console.log(data);

  emailjs.sendForm("service_427p88x", "template_gwdt16r", "#sendForm").then(
    function () {
      alert("Email sent successfully!");
      console.log("send successfully");

      form.reset(); // Reset the form
    },
    function (error) {
      alert("Failed to send email: " + JSON.stringify(error));
    }
  );
}

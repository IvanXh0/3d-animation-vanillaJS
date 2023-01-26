const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".info h1");
const phone = document.querySelector(".phone img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// container.addEventListener("mouseenter", (e) => {
//   card.style.transition = "none";
//   setTimeout(() => {
//     card.style.transition = "none";
//   }, 300);

//   title.style.transform = "scale3d(1.3, 1.5, 1.5)";
//   title.style.transformOrigin = "center center";
//   phone.style.transform = "scale3d(1.2, 1.2, 1.2) rotateZ(-45deg)";
//   phone.style.transformOrigin = "center center";
//   description.style.transform = "scale3d(1.2, 1.2, 1.2)";
//   description.style.transformOrigin = "center center";
//   purchase.style.transform = "scale3d(1.2, 1.2, 1.2)";
//   purchase.style.transformOrigin = "center center";
//   sizes.style.transform = "scale3d(1.2, 1.2, 1.2)";
//   sizes.style.transformOrigin = "center center";
// });

// container.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all 0.5s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   title.style.transform = `scale3d(1, 1, 1)`;
//   phone.style.transform = "scale3d(1, 1, 1) rotateZ(0deg)";
//   phone.style.transformOrigin = "center center";
//   description.style.transform = `scale3d(1, 1, 1)`;
//   purchase.style.transform = `scale3d(1, 1, 1)`;
//   sizes.style.transform = `scale3d(1, 1, 1)`;
// });

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.2s ease-out";
  setTimeout(() => {
    card.style.transition = "none";
  }, 300);
  
  // Creating the 3D effect
  title.style.transform = "translateZ(150px)";
  phone.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  // Resetting to default
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  phone.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

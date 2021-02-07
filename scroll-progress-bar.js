const scrollProgressIndicator = document.querySelector(
  ".scroll-progress-indicator"
);

const postContent = document.querySelector(".Blog .post-content");

window.addEventListener("scroll", () => {
  let scrollAmount = window.scrollY;
  let postHeight = postContent.clientHeight - window.innerHeight + 120;

  let progress = Math.min((scrollAmount / postHeight) * 100, 100);

  scrollProgressIndicator.style.width = progress + "%";
});

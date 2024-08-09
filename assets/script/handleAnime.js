
const element1 = document.querySelector(".name-teal");

const tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

setTimeout(() => {
  tl.to(element1, {
    duration: 1, // Animation duration
    text: {
      value: "Tamilarasan", // Target text
      scrambleText: { text: "chars" }, // Scramble animation
      ease: "none", // Animation easing
    },
  });
}, 1600);


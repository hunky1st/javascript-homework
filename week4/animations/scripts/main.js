const topLeftArcs = document.querySelectorAll(".arc-shape.top-left");
const bottomLeftArcs = document.querySelectorAll(".arc-shape.bottom-left");
const topRightArcs = document.querySelectorAll(".arc-shape.top-right");
const bottomRightArcs = document.querySelectorAll(".arc-shape.bottom-right");
const speechBubble = document.querySelector(".speech-bubble");
const speechBubbleThrone = document.querySelector(".speech-bubble-throne");
const toggleButton = document.querySelector(".skullthrone-button");

const masterTimeline = gsap.timeline({ paused: true });

masterTimeline.to(
  topLeftArcs,
  { rotation: -360, duration: 2, repeat: -1, ease: "none" },
  0
);
masterTimeline.to(
  bottomLeftArcs,
  { rotation: -360, duration: 2.5, repeat: -1, ease: "none" },
  0.3
);

masterTimeline.to(
  topRightArcs,
  { rotation: 360, duration: 2.2, repeat: -1, ease: "none" },
  0.1
);
masterTimeline.to(
  bottomRightArcs,
  { rotation: 360, duration: 1.8, repeat: -1, ease: "none" },
  0.5
);

masterTimeline.to(
  speechBubble,
  { y: -10, duration: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" },
  0
);

toggleButton.addEventListener("click", () => {
  if (masterTimeline.paused()) {
    masterTimeline.play();
    speechBubbleThrone.textContent = "다시 누르면 멈춥니다!";
  } else {
    masterTimeline.pause();
    speechBubbleThrone.textContent = "해골 왕좌를 눌러보세요!";
  }
});

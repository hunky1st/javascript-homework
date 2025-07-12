const POPOVER_SPACE = 10;

// [여기!] generateUniquePopoverId 함수를 다른 함수들과 함께 위로 이동
function generateUniquePopoverId(length = 5) {
  return `popover-${Math.random()
    .toString(36)
    .substring(2, length + 2)}`;
}

function calculatePopoverPosition(popoverTrigger, popover) {
  const triggerRect = popoverTrigger.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const { position } = popover.dataset;
  const triggerXCenterPosition = (triggerRect.left + triggerRect.right) / 2;
  const triggerYCenterPosition = (triggerRect.top + triggerRect.bottom) / 2;

  switch (position) {
    case "top":
      return {
        left: triggerXCenterPosition - popoverRect.width / 2,
        top: triggerRect.top - popoverRect.height - POPOVER_SPACE,
      };
    case "bottom":
      return {
        left: triggerXCenterPosition - popoverRect.width / 2,
        top: triggerRect.bottom + POPOVER_SPACE,
      };
    case "left":
      return {
        left: triggerRect.left - popoverRect.width - POPOVER_SPACE,
        top: triggerYCenterPosition - popoverRect.height / 2,
      };
    case "right":
      return {
        left: triggerRect.right + POPOVER_SPACE,
        top: triggerYCenterPosition - popoverRect.height / 2,
      };
  }
}

function hide(popover) {
  popover.setAttribute("hidden", "true");
}

function show(popover) {
  popover.removeAttribute("hidden");
}

function isShow(popover) {
  return !popover.hasAttribute("hidden");
}

function createPopover(popoverTrigger) {
  const { content, popoverPosition } = popoverTrigger.dataset;

  const popoverId = generateUniquePopoverId();
  popoverTrigger.dataset.target = popoverId;

  const popover = document.createElement("div");
  popover.classList.add("popover");

  popover.dataset.id = popoverId;
  popover.dataset.position = popoverPosition;

  const popoverContent = document.createElement("p");
  popoverContent.textContent = content;

  popover.append(popoverContent);
  document.body.append(popover);

  return popover;
}

const popoverTriggers = document.querySelectorAll(".popover-trigger");

popoverTriggers.forEach((popoverTrigger) => {
  const selector = `[data-id="${popoverTrigger.dataset.target}"]`;
  let popover = document.querySelector(selector);

  if (!popover) {
    popover = createPopover(popoverTrigger);
  }

  const { left, top } = calculatePopoverPosition(popoverTrigger, popover);
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;

  hide(popover);
});

document.addEventListener("click", ({ target }) => {
  const popoverTrigger = target.closest(".popover-trigger");

  if (popoverTrigger) {
    const selector = `[data-id="${popoverTrigger.dataset.target}"]`;
    const popover = document.querySelector(selector);

    if (!popover) return;

    const isVisible = isShow(popover);

    document.querySelectorAll(".popover").forEach(hide);

    if (!isVisible) {
      show(popover);
    }
    return;
  }

  if (!target.closest(".popover")) {
    document.querySelectorAll(".popover").forEach(hide);
  }
});

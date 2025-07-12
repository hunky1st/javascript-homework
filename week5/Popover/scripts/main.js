{
  const popoverTrigger = document.querySelector(".popover-trigger");
  const popover = document.querySelector(".popover");

  if (popoverTrigger && popover) {
    const triggerRect = popoverTrigger.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();

    const triggerCenterPosition = (triggerRect.left + triggerRect.right) / 2;
    const popoverLeftPosition = triggerCenterPosition - popoverRect.width / 2;

    const POPOVER_SPACE = 10;
    const popoverTopPosition =
      triggerRect.top - popoverRect.height - POPOVER_SPACE;

    popover.style.left = `${popoverLeftPosition}px`;
    popover.style.top = `${popoverTopPosition}px`;

    popover.setAttribute("hidden", "true");

    popoverTrigger.addEventListener("click", () => {
      if (popover.hasAttribute("hidden")) {
        popover.removeAttribute("hidden");
      } else {
        popover.setAttribute("hidden", "true");
      }
    });

    document.addEventListener("click", ({ target }) => {
      if (target.closest(".popover") || target.closest(".popover-trigger"))
        return;
      popover.setAttribute("hidden", true);
    });
  }
}
{
  const [, popoverTrigger] = document.querySelectorAll(".popover-trigger");
  const [, popover] = document.querySelectorAll(".popover");
  const triggerRect = popoverTrigger.getBoundingClientRect();
  console.log(triggerRect.left);
  const POPOVER_SPACE = 10;

  const popoverRect = popover.getBoundingClientRect();

  const popoverLeftPosition =
    triggerRect.left - popoverRect.width - POPOVER_SPACE;
  popover.style.setProperty("left", `${popoverLeftPosition}px`);
  const triggerCenterPosition = (triggerRect.top + triggerRect.bottom) / 2;
  const popoverTopPosition = triggerCenterPosition - popoverRect.height / 2;
  popover.style.setProperty("top", `${popoverTopPosition}px`);
  popover.setAttribute("hidden", "true");
  popoverTrigger.addEventListener("click", () => {
    if (popover.hasAttribute("hidden")) {
      popover.removeAttribute("hidden");
    } else {
      popover.setAttribute("hidden", "true");
    }
  });

  document.addEventListener("click", ({ target }) => {
    if (target.closest(".popover") || target.closest(".popover-trigger"))
      return;
    popover.setAttribute("hidden", "true");
  });
}
{
  const [, , popoverTrigger] = document.querySelectorAll(".popover-trigger");
  const [, , popover] = document.querySelectorAll(".popover");

  if (popoverTrigger && popover) {
    const triggerRect = popoverTrigger.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const triggerYCenter = (triggerRect.top + triggerRect.bottom) / 2;
    const POPOVER_SPACE = 10;

    const popoverLeftPosition = triggerRect.right + POPOVER_SPACE;
    const popoverTopPosition = triggerYCenter - popoverRect.height / 2;

    popover.style.left = `${popoverLeftPosition}px`;
    popover.style.top = `${popoverTopPosition}px`;
    popover.setAttribute("hidden", "true");

    popoverTrigger.addEventListener("click", () => {
      if (popover.hasAttribute("hidden")) {
        popover.removeAttribute("hidden");
      } else {
        popover.setAttribute("hidden", "true");
      }
    });

    document.addEventListener("click", ({ target }) => {
      if (target.closest(".popover") || target.closest(".popover-trigger"))
        return;
      popover.setAttribute("hidden", true);
    });
  }
}

// 아래쪽(Bottom) 팝오버
{
  const [, , , popoverTrigger] = document.querySelectorAll(".popover-trigger");
  const [, , , popover] = document.querySelectorAll(".popover");

  if (popoverTrigger && popover) {
    const triggerRect = popoverTrigger.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const triggerXCenter = (triggerRect.left + triggerRect.right) / 2;
    const POPOVER_SPACE = 10;

    const popoverLeftPosition = triggerXCenter - popoverRect.width / 2;
    const popoverTopPosition = triggerRect.bottom + POPOVER_SPACE;

    popover.style.left = `${popoverLeftPosition}px`;
    popover.style.top = `${popoverTopPosition}px`;
    popover.setAttribute("hidden", "true");

    popoverTrigger.addEventListener("click", () => {
      if (popover.hasAttribute("hidden")) {
        popover.removeAttribute("hidden");
      } else {
        popover.setAttribute("hidden", "true");
      }
    });

    document.addEventListener("click", ({ target }) => {
      if (target.closest(".popover") || target.closest(".popover-trigger"))
        return;
      popover.setAttribute("hidden", true);
    });
  }
}

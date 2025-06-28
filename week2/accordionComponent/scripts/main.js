document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.querySelector(".accordion"); // 단일 'accordion' 컴포넌트 선택

  if (accordion) {
    const accordionButton = accordion.querySelector("button");
    const accordionContentLinks = accordion.querySelectorAll(
      ".accordion__content a"
    );
    if (!accordion.classList.contains("is-open")) {
      accordionContentLinks.forEach((link) => {
        link.setAttribute("tabindex", "-1");
      });
    }

    if (accordionButton) {
      accordionButton.addEventListener("click", () => {
        accordion.classList.toggle("is-open");
        const isExpanded = accordion.classList.contains("is-open");
        accordionButton.setAttribute("aria-expanded", isExpanded);
        accordionContentLinks.forEach((link) => {
          if (isExpanded) {
            link.removeAttribute("tabindex");
          } else {
            link.setAttribute("tabindex", "-1");
          }
        });
      });
    }
  }
});

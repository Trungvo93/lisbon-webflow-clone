const scrollElementToView = (scrollToId: string) => {
  const element = document.getElementById(scrollToId) as HTMLElement;
  const elRect = element.getBoundingClientRect();
  const scrollDistance = elRect.top + window.scrollY;
  const offset =
    Number(element.getAttribute("data-scroll-to-view-offset")) || 0;
  window.scrollTo({
    top: scrollDistance + offset,
    behavior: "smooth",
  });
};

export default scrollElementToView;

const scrollElementToView = (scrollToId: string) => {
  const element = document.getElementById(scrollToId) as HTMLElement;
  const elRect = element.getBoundingClientRect();
  const scrollDistance = elRect.top + window.scrollY;
  window.scrollTo({
    top: scrollDistance,
    behavior: "smooth",
  });
};

export default scrollElementToView;

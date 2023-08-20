const isInViewport = (element: HTMLElement | null) => {
  if (element !== null) {
    let bounding: DOMRect = element?.getBoundingClientRect();
    const locationShow = element.offsetHeight - 70;
    return (
      bounding.top >= -locationShow &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  return false;
};

export default isInViewport;

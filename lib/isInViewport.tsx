const isInViewport = (element: HTMLElement | null) => {
  let bounding = element?.getBoundingClientRect();
  if (bounding != undefined) {
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

export default isInViewport;

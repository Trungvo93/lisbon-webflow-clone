import { clearInterval } from "timers";
import { setInterval } from "timers/promises";

const scrollElementToView = (scrollToId: string) => {
  const element = document.getElementById(scrollToId) as HTMLElement;
  const elRect = element.getBoundingClientRect();
  const scrollDistance = elRect.top + window.scrollY;
  window.scrollTo({
    top: scrollDistance,
    behavior: "smooth",
  });

  // if (elRect.top < 0) {
  //   let count = 0;
  //   let progress = window.scrollY;
  //   while (count >= elRect.top) {
  //     count--;
  //     window.scrollTo({
  //       top: --progress,
  //       behavior: "smooth",
  //     });
  //   }
  // } else {
  //   let count = 200;
  //   let progress = window.scrollY;

  //   let myInterval: number;
  //   myInterval = window.setInterval(() => {
  //     if (progress <= scrollDistance) {
  //       if (count >= 30) {
  //         count -= 10;
  //       }
  //       window.scrollTo({
  //         top: (progress += 10),
  //         behavior: "smooth",
  //       });
  //     } else {
  //       console.log("has been stop interval");
  //       window.clearInterval(myInterval);
  //     }
  //     console.log(count);
  //   }, 30);
  // }
};

export default scrollElementToView;

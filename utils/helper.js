export const ScrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start", // aligns top of section to top of viewport
    });
  }
};
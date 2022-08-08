export const smoothScroll = (e: any) => {
  e.preventDefault();
  const { target } = e;
  const href = target.getAttribute("href") || "#home";
  const offsetTop =
    href != "#home" ? document.querySelector(href).offsetTop : 0;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
};

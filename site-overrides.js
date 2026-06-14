(() => {
  const oldSrc = "assets/hard-rated-result.jpg";
  const newSrc = "assets/hard-rated-second-result.png";
  const newTitle = "No.1 RTD SKU in NZ";

  try {
    const hardRated = typeof projects !== "undefined" && projects.find((p) => p.id === "hard-rated");
    hardRated?.media
      ?.flatMap((item) => item.items || [item])
      .filter((item) => item.src === oldSrc)
      .forEach((item) => {
        item.src = newSrc;
        item.title = newTitle;
      });
  } catch (_) {}

  document.querySelectorAll(`img[src="${oldSrc}"]`).forEach((img) => {
    img.src = newSrc;
    img.alt = newTitle;
  });
})();

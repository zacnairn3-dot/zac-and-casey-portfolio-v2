(() => {
  const oldSrc = "assets/hard-rated-result.jpg";
  const newSrc = "assets/hard-rated-second-result.png";
  const newTitle = "No.1 RTD SKU in NZ";
  const cropClass = "hard-rated-result-crop";

  const style = document.createElement("style");
  style.textContent = `
    #hard-rated .media-unit--half { aspect-ratio: 1800 / 1172; }
    #hard-rated .media-unit--half img,
    .media-unit.${cropClass} img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .media-unit.${cropClass} img { height: 100.6%; transform: translateY(-0.45%); }
  `;
  document.head.append(style);

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

  document.querySelectorAll(`img[src="${oldSrc}"], img[src="${newSrc}"]`).forEach((img) => {
    img.src = newSrc;
    img.alt = newTitle;
    img.closest(".media-unit")?.classList.add(cropClass);
  });
})();

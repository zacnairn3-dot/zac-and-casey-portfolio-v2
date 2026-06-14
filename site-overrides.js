(() => {
  const oldSrc = "assets/hard-rated-result.jpg";
  const newSrc = "assets/hard-rated-second-result.png";
  const newTitle = "No.1 RTD SKU in NZ";
  const cropClass = "hard-rated-result-crop";
  const longWhiteFilm = "https://player.vimeo.com/video/1132862636";

  const style = document.createElement("style");
  style.textContent = `
    #hard-rated .media-unit--half { aspect-ratio: 16 / 9; }
    #hard-rated .media-unit--half img,
    .media-unit.${cropClass} img { display: block; width: 100%; height: 100%; object-fit: cover; }
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

  const longWhiteMedia = document.querySelector("#x-long-white .case-media");
  const caseStudyFilm = longWhiteMedia?.querySelector("[data-video-file='assets/xlong-final.mp4']");
  const hasLongWhiteFilm = !!longWhiteMedia?.querySelector(`iframe[src^="${longWhiteFilm}"]`);

  if (longWhiteMedia && caseStudyFilm && !hasLongWhiteFilm) {
    const film = document.createElement("div");
    film.className = "video is-loaded";
    film.innerHTML = `
      <iframe src="${longWhiteFilm}?background=1&autoplay=1&muted=1&loop=1&dnt=1" title="The Sugar Liquidation Sale!" allow="autoplay; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <div class="video-controls">
        <button class="video-restart" type="button" aria-label="Restart from the beginning"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></button>
        <button class="video-sound" type="button" aria-label="Unmute video">Unmute</button>
      </div>
    `;
    caseStudyFilm.after(film);
  }
})();

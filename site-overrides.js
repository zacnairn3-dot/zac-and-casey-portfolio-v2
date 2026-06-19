(() => {
  const oldSrc = "assets/hard-rated-result.jpg";
  const newSrc = "assets/hard-rated-second-result.png";
  const newTitle = "No.1 RTD SKU in NZ";
  const cropClass = "hard-rated-result-crop";
  const longWhiteDriveId = "1bV04KzcLyzcPH-ZyPSJyiFuWxMKHUbio";

  const style = document.createElement("style");
  style.textContent = `
    #hard-rated .media-unit--half { aspect-ratio: 1800 / 1172; }
    #hard-rated .media-unit--half img,
    .media-unit.${cropClass} img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .media-unit.${cropClass} img { height: 100.6%; transform: translateY(-0.45%); }
    .drive-embed { grid-column: span 12; position: relative; overflow: hidden; background: #000; border: 1px solid var(--rule); }
    .drive-embed::before { content: ""; display: block; padding-top: 56.25%; }
    .drive-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: #000; }
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
  const firstLongWhiteVideo = longWhiteMedia?.querySelector(".video");
  const hasDriveEmbed = !!longWhiteMedia?.querySelector(`[data-drive-id="${longWhiteDriveId}"]`);

  if (longWhiteMedia && firstLongWhiteVideo && !hasDriveEmbed) {
    const driveEmbed = document.createElement("div");
    driveEmbed.className = "drive-embed";
    driveEmbed.dataset.driveId = longWhiteDriveId;
    driveEmbed.innerHTML = `
      <iframe src="https://drive.google.com/file/d/${longWhiteDriveId}/preview" title="X by Long White case study" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>
    `;
    firstLongWhiteVideo.before(driveEmbed);
  }
})();

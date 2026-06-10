/* =============================================================
   ZAC & CASEY — Portfolio (001)  ·  data + render + motion
   ============================================================= */

const projects = [
  {
    id: "hard-rated", client: "Hard Rated", title: "The Hard Rated Homecoming",
    line: "To launch Hard Rated in New Zealand, we turned one Kiwi in Sydney into a national retrieval mission — then gave him every reason to come home.",
    role: "Launch / Activation / PR", result: "No.1 selling RTD three weeks after launch.",
    image: "assets/hard-rated-helicopter-hero.jpg", thumb: "assets/hard-rated-human-billboards.jpg",
    watch: "https://vimeo.com/1195855067",
    awards: ["Spikes Asia ’26 Silver", "AXIS ’26 2× Bronze", "AXIS ’26 3× Finalist", "Bestads Best Print"],
    media: [
      { type: "image", title: "Helicopter banner", src: "assets/hard-rated-helicopter-hero.jpg" },
      { type: "embed", title: "The Homecoming — case study", src: "https://player.vimeo.com/video/1195855067", poster: "assets/hard-rated-helicopter-hero.jpg" },
      { type: "image", title: "Newspaper takeover", src: "assets/hard-rated-pursuit-support.jpg" },
      { type: "embed", title: "Operation Helicopter", src: "https://player.vimeo.com/video/1195854179", poster: "assets/hard-rated-helicopter-hero.jpg", autoplay: true },
      { type: "image", title: "Homecoming street posters", src: "assets/hard-rated-homecoming-support-6.jpg" },
      { type: "imageGrid", items: [
        { title: "Welcome home", src: "assets/hard-rated-welcome-home.jpg" },
        { title: "Won over New Zealand", src: "assets/hard-rated-result.jpg" }
      ] }
    ]
  },
  {
    id: "wwf", client: "WWF", title: "Give Shane Jones the Finger",
    line: "We got 40,000+ New Zealanders to send a corrupt Oceans and Fisheries Minister the fish finger.",
    role: "Activation / Protest / Earned", result: "40,000+ fingers given to Shane.",
    image: "assets/wwf-1.jpg", thumb: "assets/wwf-2.jpg",
    watch: "https://vimeo.com/1110653590",
    awards: ["AXIS ’25 3× Bronze", "AWARD ’25 Bronze", "Webby ’25 Honoree", "Cairns Crocodiles ’25 Bronze"],
    media: [
      { type: "embed", title: "WWF — The Finger", src: "https://player.vimeo.com/video/1110653590", poster: "assets/wwf-video-poster.jpg" },
      { type: "image", title: "Campaign hero", src: "assets/wwf-seq-01.jpg" },
      { type: "image", title: "The platform", src: "assets/wwf-seq-02.png" },
      { type: "image", title: "The platform", src: "assets/wwf-seq-03.png" },
      { type: "imageGrid", items: [
        { title: "On the ground", src: "assets/wwf-seq-04.jpg" },
        { title: "On the ground", src: "assets/wwf-seq-05.jpg" }
      ] },
      { type: "image", title: "Earned coverage", src: "assets/wwf-seq-06.jpg" }
    ]
  },
  {
    id: "x-long-white", client: "X by Long White", title: "The Sugar Liquidation Sale!",
    line: "We turned the sugar Long White left out of its new RTD, X, into a full-blown mid-90s sugar sale — starring our deranged salesman, Gary.",
    role: "Launch Platform / Film / Social", result: "Gary lived, and sold unused sugar.",
    image: "assets/xlong-1.jpg", thumb: "assets/xlong-2.jpg",
    watch: "https://vimeo.com/1132862636",
    awards: ["Bestads Best Interactive", "AXIS ’26 Finalists", "Mumbrella ’26 Shortlist"],
    media: [
      { type: "imageGrid", items: [
        { title: "PR mockup", src: "assets/xlong-seq-01.jpg" },
        { title: "Out of home", src: "assets/xlong-seq-03.jpg" }
      ] },
      { type: "embed", title: "The Sugar Liquidation Sale!", src: "https://player.vimeo.com/video/1132862636", poster: "assets/xlong-video-poster.jpg" },
      { type: "embed", title: "Sugar Liquidation — Dancing", src: "https://player.vimeo.com/video/1132863466", poster: "assets/xlong-dancing-poster.jpg", autoplay: true },
      { type: "image", title: "The notebook", src: "assets/xlong-seq-04.gif" },
      { type: "embed", title: "Sugar pour", src: "https://player.vimeo.com/video/1195854720", poster: "assets/xlong-sugar-pour-poster.jpg", autoplay: true },
      { type: "imageGrid", items: [
        { title: "Weekly giveaways", src: "assets/xlong-giveaways.jpeg" },
        { title: "Merch", src: "assets/xlong-merch.jpg" }
      ] },
      { type: "image", title: "Sticker system", src: "assets/xlong-support-7.jpg" },
      { type: "image", title: "Playing cards", src: "assets/xlong-playing-cards-box.jpg" }
    ]
  },
  {
    id: "realestate", client: "Realestate.co.nz", title: "Your Next Rental Starts Here",
    line: "We highlighted all the reasons renters move — to show that finding your next rental starts at Realestate.co.nz.",
    role: "OOH / Print / Platform", result: "Renting, made painfully legible.",
    image: "assets/realestate-1.jpg", thumb: "assets/realestate-2.jpg",
    watch: "https://zacandcasey.com/realestate-co-nz",
    awards: ["Bestads Best Outdoor"],
    media: [
      { type: "image", title: "Outdoor", src: "assets/realestate-seq-01.jpg" },
      { type: "image", title: "South facing", src: "assets/realestate-seq-02.jpg" },
      { type: "image", title: "Surprise", src: "assets/realestate-seq-04.jpg" },
      { type: "image", title: "Next door", src: "assets/realestate-seq-03.jpg" },
      { type: "image", title: "New friend", src: "assets/realestate-seq-05.jpg" }
    ]
  },
  {
    id: "black-heart", client: "Black Heart Rum", title: "The Shanty for Missing Chums",
    line: "We rewrote a sea shanty to drag flaky mates out of group-chat purgatory and into the night.",
    role: "Audio / Radio / Craft", result: "Best Radio, plus a haul of AXIS metal.",
    image: "assets/black-heart-award-board.jpg", thumb: "assets/black-heart-pirate-full-song.png",
    watch: "https://www.bestadsontv.com/best/radio",
    awards: ["AXIS ’26 Silver", "AXIS ’26 2× Bronze", "Bestads Best Radio"],
    media: [
      { type: "image", title: "Award board", src: "assets/black-heart-award-board.jpg" },
      { type: "image", title: "“I’ve got work”", src: "assets/black-heart-pirate-work.png" },
      { type: "audio", title: "I’ve Got Work", src: "assets/black-heart-work.mp3", duration: "0:30", lyrics: ["You say, “I’ve got work,” then abscond", "Like we’re all jobless vagabonds", "You heart a meme but nev’r respond", "Still reckon you’re a bro", "Soon may the Black Heart come", "We’ll round up ev’ry missing chum", "Crack a can and call your name", "The night starts with a rum"] },
      { type: "image", title: "“It might rain”", src: "assets/black-heart-pirate-rain.png" },
      { type: "audio", title: "It Might Rain", src: "assets/black-heart-rain.mp3", duration: "0:30", lyrics: ["You say, “It might rain,” then you bail", "The sky’s just grey, no wind, no gale", "You’ve got four coats and still you quail", "Like rain could kill a man", "Soon may the Black Heart come", "We’ll round up ev’ry missing chum", "Crack a can and call your name", "The night starts with a rum"] },
      { type: "image", title: "“I’m broke”", src: "assets/black-heart-pirate-broke.png" },
      { type: "audio", title: "I’m Broke", src: "assets/black-heart-broke.mp3", duration: "0:30", lyrics: ["You say, “I’m broke,” then stay in", "Order naan and a butter chicken", "Spend forty bucks, for not one grin", "But say a night’s too much", "Soon may the Black Heart come", "We’ll round up ev’ry missing chum", "Crack a can and call your name", "The night starts with a rum"] },
      { type: "image", title: "The full crew", src: "assets/black-heart-pirate-full-song.png" },
      { type: "audio", title: "The Full Shanty", src: "assets/black-heart-full-song.mp3", duration: "1:30", lyrics: ["Soon may the Black Heart come", "We’ll round up ev’ry missing chum", "Crack a can and call your name", "The night starts with a rum", "Black Heart in hand, we ring the bell", "Still in ya trackies, look like hell", "You raise the can and laugh as well", "The crew is back as one", "Black Heart Rum.", "The call of ye crew since 1842"] }
    ]
  },
  {
    id: "no-ugly", client: "No Ugly Gut", title: "Beauty is Gut Deep",
    line: "We turned probiotic bacteria into works of art for a wellness drink brand called No Ugly Gut.",
    role: "Design / OOH / Film", result: "Bacteria, but gallery-lit.",
    image: "assets/nougly-video-poster.jpg", thumb: "assets/nougly-2.jpg",
    watch: "https://vimeo.com/1110651390",
    awards: ["AXIS ’25 2× Silver", "AXIS ’25 2× Bronze"],
    media: [
      { type: "embed", title: "No Ugly Gut", src: "https://player.vimeo.com/video/1110651390", poster: "assets/nougly-video-poster.jpg" },
      { type: "image", title: "Campaign cover", src: "assets/nougly-seq-01.jpg" },
      { type: "imageGrid", items: [
        { title: "OOH", src: "assets/nougly-seq-02.jpg" },
        { title: "Mockup", src: "assets/nougly-seq-03.jpg" }
      ] },
      { type: "image", title: "Press", src: "assets/nougly-seq-04.jpg" },
      { type: "image", title: "OOH", src: "assets/nougly-seq-05.jpg" }
    ]
  },
  {
    id: "post-it", client: "Post-it", title: "A Little Space to Think",
    line: "We made the humble note relevant again, when the world was glued to screens in COVID lockdown.",
    role: "Film / Digital / Participation", result: "A tiny square got roomy again.",
    image: "assets/postit-1.jpg", thumb: "assets/postit-2.jpg",
    watch: "https://vimeo.com/1195858195",
    awards: ["AWARD ’22 Bronze", "AWARD ’22 2× Finalist", "Immortal ANZ Finalist", "MAD STARS Finalist", "Bestads Interactive"],
    media: [
      { type: "embed", title: "Post-it — case study", src: "https://player.vimeo.com/video/1195858195", poster: "assets/postit-1.jpg" },
      { type: "imageGrid", items: [
        { title: "Idea board", src: "assets/postit-seq-01.jpg" },
        { title: "Idea board", src: "assets/postit-seq-02.jpg" }
      ] },
      { type: "image", title: "Idea board", src: "assets/postit-seq-03.jpg" }
    ]
  },
  {
    id: "bulla", client: "Bulla Family Dairy", title: "Chief Cottage Cheese Officer",
    line: "We created a lovable, cringeworthy cottage-cheese influencer for Australia’s most beloved dairy company. She blew up on the TikToks, landed on The Gruen Transfer, and even earned real media for selling too much cottage cheese.",
    role: "Character / Social / Earned", result: "Sold too much cottage cheese.",
    image: "assets/bulla-1.jpg", thumb: "assets/bulla-2.png",
    watch: "https://vimeo.com/951795401",
    awards: ["B&T ’24 Best Digital — Winner", "B&T ’24 Bravery Finalist", "B&T ’24 Social Finalist", "AWARD ’25 Finalist"],
    media: [
      { type: "image", title: "Meet Margaret", src: "assets/bulla-seq-01.png" },
      { type: "embed", title: "Bulla on Gruen", src: "https://player.vimeo.com/video/951795401", poster: "assets/bulla-1.jpg" },
      { type: "embed", title: "Intro", src: "https://player.vimeo.com/video/1059403358", poster: "assets/bulla-intro-poster.jpg", orientation: "portrait", autoplay: true },
      { type: "embed", title: "POV", src: "https://player.vimeo.com/video/1059403352", poster: "assets/bulla-pov-poster.jpg", orientation: "portrait", autoplay: true },
      { type: "embed", title: "Eat in a Day", src: "https://player.vimeo.com/video/1059403329", poster: "assets/bulla-eat-poster.jpg", orientation: "portrait", autoplay: true }
    ]
  }
];

const awardsData = [
  { org: "Cannes Young Lions", items: [["Global Gold", "2023 — Digital — Little Learners League"], ["Australian National Gold", "2023 — Digital"]] },
  { org: "Spikes Asia", items: [["Silver Spike", "2026 — Retail Promotions — Hard Rated Homecoming"]] },
  { org: "B&T Awards", items: [["Winner", "2024 — Best Digital Campaign — Bulla Margaret"], ["Finalist", "2024 — Award for Bravery — Bulla Margaret"], ["Finalist", "2024 — Best Use of Social — Bulla Margaret"]] },
  { org: "AWARD Awards", items: [["Bronze", "2022 — Best Use of Social — Post-it"], ["2× Finalist", "2022 — Integrated & Digital — Post-it"], ["Finalist", "2025 — Community — Bulla Margaret"], ["Bronze", "2025 — PR & Promotion — WWF The Finger"]] },
  { org: "AXIS Awards", wide: true, items: [["2× Silver", "2025 — No Ugly Gut"], ["2× Bronze", "2025 — No Ugly Gut"], ["3× Bronze", "2025 — WWF The Finger"], ["2× Bronze", "2026 — Hard Rated Homecoming"], ["3× Finalist", "2026 — Hard Rated Homecoming"], ["Silver", "2026 — Radio — Shanty for Missing Chums"], ["Bronze", "2026 — Radio 30s+ — Shanty"]] },
  { org: "Cairns Crocodiles", items: [["Bronze", "2025 — Data-Driven — WWF The Finger"], ["Shortlist", "2025 — Changing the World — WWF"], ["Finalist", "2026 — Hard Rated Homecoming"]] },
  { org: "Webby Awards", items: [["Honoree", "2025 — Non-Profit — WWF: Give Shane Jones The Finger"]] },
  { org: "MAD STARS", items: [["Finalist", "2022 — Post-it A Little Space to Think"]] },
  { org: "Mumbrella", items: [["Shortlist", "2026 — Hard Rated Homecoming"], ["Shortlist", "2026 — Sugar Liquidation Sale"]] },
  { org: "The Immortal Awards", items: [["ANZ Finalist", "2022 — Post-it A Little Space to Think"]] },
  { org: "Bestads", wide: true, items: [["Best Radio", "Black Heart — Shanty for Missing Chums"], ["Best Interactive", "X by Long White"], ["Best Interactive", "Post-it"], ["Best Print", "Hard Rated Official Apology"], ["Best Outdoor", "No Ugly Gut"], ["Best Outdoor", "realestate.co.nz Flatmates"]] }
];

const tickerItems = ["Cannes Young Lions — Global Gold", "Spikes Asia Silver", "Webby Honoree", "B&T Best Digital", "AXIS Metal ×11", "Available for the good briefs", "Art Direction", "Copywriting", "Misc. Trouble"];

/* signature colour per project — drives a duotone tint for each panel + its index hover */
const tones = {
  "hard-rated": "#b3741a",   // amber / ochre
  "wwf": "#1c7d57",          // forest green
  "x-long-white": "#8e3cc7", // electric purple
  "realestate": "#1f6fb8",   // signpost blue
  "black-heart": "#8c2747",  // oxblood
  "no-ugly": "#c8463a",      // coral red
  "post-it": "#c8930c",      // post-it gold
  "bulla": "#2f8fb5"         // dairy teal
};

const TOTAL = String(projects.length).padStart(2, "0");
const pad2 = (n) => String(n).padStart(2, "0");
const esc = (s = "") => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ---------- render: work index ---------- */
function renderWorkIndex() {
  const list = document.querySelector("[data-worklist]");
  if (!list) return;
  list.innerHTML = projects.map((p, i) => `
    <a class="worklist-row" href="#${p.id}" data-preview-src="${p.thumb || p.image}" style="--accent: ${tones[p.id]}">
      <span class="worklist-num">(${pad2(i + 1)} / ${TOTAL})</span>
      <span class="worklist-client">${esc(p.client)}</span>
      <span class="worklist-meta">
        <span class="worklist-title">${esc(p.title)}</span>
        <span class="worklist-role">${esc(p.role)}</span>
      </span>
    </a>`).join("");
}

/* ---------- render: overlay nav ---------- */
function renderOverlayNav() {
  const list = document.querySelector("[data-overlay-list]");
  if (!list) return;
  list.innerHTML = projects.map((p) => `
    <li><a href="#${p.id}" data-overlay-link>${esc(p.client)}<small>${esc(p.title)}</small></a></li>`).join("");
}

/* ---------- render: media ---------- */
function mediaImage(item, cls) {
  return `<figure class="media-unit ${cls}">
      <img src="${item.src}" alt="${esc(item.title || "")}" loading="lazy" decoding="async" />
    </figure>`;
}
function mediaEmbed(item) {
  const portrait = item.orientation === "portrait";
  // Use the video's real Vimeo thumbnail (downloaded to assets/vimeo-<id>.jpg) so the
  // static frame always matches the actual video; fall back to a curated poster if needed.
  const vid = item.src.match(/\/video\/(\d+)/)?.[1];
  const poster = vid ? `assets/vimeo-${vid}.jpg` : item.poster;
  if (item.autoplay) {
    // ambient autoplaying video — muted, looping (Vimeo background mode) + a custom unmute toggle
    const asrc = `${item.src}?background=1&autoplay=1&muted=1&loop=1&dnt=1`;
    return `<div class="video ${portrait ? "video--portrait" : ""} is-loaded">
      <iframe src="${asrc}" title="${esc(item.title || "video")}" allow="autoplay; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <button class="video-sound" type="button" aria-label="Unmute video">Unmute</button>
    </div>`;
  }
  const src = `${item.src}?title=0&byline=0&portrait=0&dnt=1`;
  return `<div class="video ${portrait ? "video--portrait" : ""}" data-video="${src}" role="button" tabindex="0" aria-label="Play ${esc(item.title || "video")}">
      <img class="video-poster" src="${poster}" alt="" loading="lazy" decoding="async" />
      <span class="video-play"><span>▶</span></span>
    </div>`;
}
function mediaTrack(image, audio, i) {
  return `<div class="track" data-track>
      <div class="track-cover"><img src="${image.src}" alt="${esc(image.title || "")}" loading="lazy" /></div>
      <div class="track-body">
        <div class="track-head"><b>${esc(audio.title)}</b><span>${audio.duration || "Audio"}</span></div>
        <div class="track-controls">
          <button class="track-play" type="button" aria-label="Play ${esc(audio.title)}">▶</button>
          <div class="track-progress" data-track-bar><i></i></div>
          <span class="track-time">0:00</span>
        </div>
        ${audio.lyrics?.length ? `<button class="track-lyrics-toggle" type="button">Lyrics +</button>
        <ol class="track-lyrics">${audio.lyrics.map((l) => `<li>${esc(l)}</li>`).join("")}</ol>` : ""}
        <audio src="${audio.src}" preload="none"></audio>
      </div>
    </div>`;
}

function renderMedia(project) {
  const m = project.media;
  const out = [];
  let i = 0;
  while (i < m.length) {
    const item = m[i];

    // group image + audio -> track deck (Black Heart)
    if (item.type === "image" && m[i + 1]?.type === "audio") {
      const tracks = [];
      while (m[i]?.type === "image" && m[i + 1]?.type === "audio") {
        tracks.push(mediaTrack(m[i], m[i + 1], i));
        i += 2;
      }
      out.push(`<div class="tracks">${tracks.join("")}</div>`);
      continue;
    }

    // group consecutive portrait embeds -> reel
    if (item.type === "embed" && item.orientation === "portrait") {
      const reel = [];
      while (m[i]?.type === "embed" && m[i]?.orientation === "portrait") {
        reel.push(mediaEmbed(m[i]));
        i += 1;
      }
      out.push(`<div class="reel">${reel.join("")}</div>`);
      continue;
    }

    if (item.type === "embed") { out.push(mediaEmbed(item)); i += 1; continue; }

    if (item.type === "imageGrid") {
      out.push(item.items.map((g) => mediaImage(g, "media-unit--half")).join(""));
      i += 1; continue;
    }

    if (item.type === "image") {
      out.push(mediaImage(item, "")); // single images render full-width, matching the reference site
      i += 1; continue;
    }
    i += 1;
  }
  return out.join("");
}

/* ---------- render: case panels ---------- */
function renderCases() {
  const wrap = document.querySelector("[data-cases]");
  if (!wrap) return;
  wrap.innerHTML = projects.map((p, i) => {
    const num = pad2(i + 1);
    const theme = i % 2 === 0 ? "tint-dark" : "tint-light";
    return `
    <section class="case panel panel--${theme}" id="${p.id}" data-panel="case" style="--tone: ${tones[p.id]}" data-hud-index="(${num} / ${TOTAL})" data-hud-label="${esc(p.client)}">
      <div class="case-head">
        <p class="case-top" data-reveal>
          <span class="case-client">${esc(p.client)}</span>
        </p>
        <h2 class="case-title" data-reveal><span>${esc(p.title)}</span><span class="case-index">(${num})</span></h2>
        <div class="case-info">
          <p class="case-line" data-reveal>${esc(p.line)}</p>
          <dl class="case-specs" data-reveal data-delay="1">
            <div class="case-spec"><dt>Discipline</dt><dd>${esc(p.role)}</dd></div>
            <div class="case-spec"><dt>Result</dt><dd>${esc(p.result)}</dd></div>
          </dl>
        </div>
        ${p.awards?.length ? `<div class="case-awards" data-reveal data-delay="2"><span class="label">Hardware</span>${p.awards.map((a) => `<span class="tag">${esc(a)}</span>`).join("")}</div>` : ""}
      </div>
      <div class="case-media" data-reveal data-delay="1">${renderMedia(p)}</div>
    </section>`;
  }).join("");
}

/* ---------- render: awards ---------- */
function renderAwards() {
  const board = document.querySelector("[data-awards]");
  if (!board) return;
  board.innerHTML = awardsData.map((a) => `
    <article class="award-card ${a.wide ? "award-card--wide" : ""}" data-reveal>
      <h3>${esc(a.org)}</h3>
      <ul>${a.items.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("")}</ul>
    </article>`).join("");
}

/* ---------- render: ticker ---------- */
function renderTicker() {
  const track = document.querySelector("[data-ticker]");
  if (!track) return;
  const row = tickerItems.map((t) => `<span>${esc(t)}</span>`).join("");
  track.innerHTML = row + row; // doubled for seamless loop
}

/* =============================================================
   INTERACTIONS
   ============================================================= */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function initReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
  targets.forEach((t) => io.observe(t));
}

function initHud() {
  const hudIndex = document.querySelector("[data-hud-index]");
  const hudLabel = document.querySelector("[data-hud-label]");
  const panels = Array.from(document.querySelectorAll("[data-panel]"));
  if (!panels.length) return;
  const labels = { hero: ["(00 / " + TOTAL + ")", "Intro"], index: ["(✦)", "The Index"], awards: ["(✦)", "Shiny Nonsense"], contact: ["(→)", "Slide In"] };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      let idx = el.dataset.hudIndex, lab = el.dataset.hudLabel;
      const fallback = labels[el.dataset.panel];
      if (!idx && fallback) { idx = fallback[0]; lab = fallback[1]; }
      if (hudIndex && idx) hudIndex.innerHTML = idx;
      if (hudLabel && lab) hudLabel.textContent = lab;
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
  panels.forEach((p) => io.observe(p));
}

function initWorklistPreview() {
  const preview = document.querySelector("[data-preview]");
  const img = preview?.querySelector("img");
  const rows = document.querySelectorAll(".worklist-row");
  if (!preview || !img || !canHover || reduceMotion) return;

  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null, visible = false;
  const loop = () => {
    cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
    preview.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
    raf = visible ? requestAnimationFrame(loop) : null;
  };
  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      img.src = row.dataset.previewSrc;
      visible = true; preview.classList.add("is-visible");
      if (!raf) loop();
    });
    row.addEventListener("mousemove", (ev) => { tx = ev.clientX; ty = ev.clientY; });
    row.addEventListener("mouseleave", () => { visible = false; preview.classList.remove("is-visible"); });
  });
}

function initVideos() {
  const boxes = [...document.querySelectorAll(".video")];
  if (!boxes.length) return;
  const entries = []; // { box, player, sound, muted }
  let io = null;

  // mute/unmute an ambient autoplay loop and reflect it on its button
  const setAutoplayMuted = (entry, muted) => {
    if (!entry || entry.sound) return;
    entry.muted = muted;
    if (muted) entry.player.setMuted(true).catch(() => {});
    else entry.player.setMuted(false).then(() => entry.player.setVolume(1)).catch(() => {});
    entry.box.classList.toggle("sound-on", !muted);
    const b = entry.box.querySelector(".video-sound");
    if (b) { b.textContent = muted ? "Unmute" : "Mute"; b.setAttribute("aria-label", muted ? "Unmute video" : "Mute video"); }
  };

  // exactly one source may have audio — pause sound videos, mute ambient loops
  const claimAudio = (except) => entries.forEach((e) => {
    if (e.player === except) return;
    if (e.sound) e.player.pause().catch(() => {});
    else if (e.muted === false) setAutoplayMuted(e, true);
  });

  const register = (box, iframe, sound) => {
    if (!window.Vimeo?.Player || entries.find((e) => e.box === box)) return;
    const player = new Vimeo.Player(iframe);
    const entry = { box, player, sound, muted: true };
    entries.push(entry);
    if (sound) player.on("play", () => claimAudio(player));
    const soundBtn = box.querySelector(".video-sound");
    if (soundBtn) soundBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      if (entry.muted === false) setAutoplayMuted(entry, true);
      else { claimAudio(player); setAutoplayMuted(entry, false); }
    });
    io?.observe(box);
  };

  // click-to-play (sound) — works regardless of the SDK
  boxes.forEach((box) => {
    if (!box.dataset.video) return;
    const open = () => {
      if (box.classList.contains("is-loaded")) return;
      claimAudio(null); // stop any audio already playing
      const iframe = document.createElement("iframe");
      iframe.src = box.dataset.video + "&autoplay=1";
      iframe.title = box.getAttribute("aria-label") || "Video";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.setAttribute("allowfullscreen", "");
      box.appendChild(iframe);
      box.classList.add("is-loaded");
      register(box, iframe, true);
    };
    box.addEventListener("click", open);
    box.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });

  // load the Vimeo SDK to manage cross-pausing + pause/resume on scroll
  const sdk = document.createElement("script");
  sdk.src = "https://player.vimeo.com/api/player.js";
  sdk.onload = () => {
    if (!window.Vimeo?.Player) return;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((obs) => {
        obs.forEach((o) => {
          const entry = entries.find((x) => x.box === o.target);
          if (!entry) return;
          if (o.isIntersecting) { if (!entry.sound) entry.player.play().catch(() => {}); } // resume muted loops
          else { entry.player.pause().catch(() => {}); if (!entry.sound) setAutoplayMuted(entry, true); } // pause + re-mute on exit
        });
      }, { threshold: 0.2 });
    }
    // register any already-loaded iframes (ambient autoplay loops + anything clicked before the SDK arrived)
    boxes.forEach((box) => {
      const iframe = box.querySelector("iframe");
      if (box.classList.contains("is-loaded") && iframe) register(box, iframe, !!box.dataset.video);
    });
  };
  document.head.appendChild(sdk);
}

function fmtTime(v) {
  if (!Number.isFinite(v)) return "0:00";
  const m = Math.floor(v / 60), s = Math.floor(v % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
function initAudio() {
  const tracks = Array.from(document.querySelectorAll("[data-track]"));
  tracks.forEach((track) => {
    const audio = track.querySelector("audio");
    const btn = track.querySelector(".track-play");
    const bar = track.querySelector("[data-track-bar]");
    const fill = track.querySelector("[data-track-bar] i");
    const time = track.querySelector(".track-time");
    const lyricsBtn = track.querySelector(".track-lyrics-toggle");
    if (!audio || !btn) return;

    btn.addEventListener("click", () => {
      if (audio.paused) {
        tracks.forEach((t) => { if (t !== track) t.querySelector("audio")?.pause(); });
        audio.play().catch(() => {});
      } else { audio.pause(); }
    });
    bar?.addEventListener("click", (ev) => {
      const r = bar.getBoundingClientRect();
      if (audio.duration) audio.currentTime = ((ev.clientX - r.left) / r.width) * audio.duration;
    });
    lyricsBtn?.addEventListener("click", () => {
      const open = track.classList.toggle("show-lyrics");
      lyricsBtn.textContent = open ? "Lyrics −" : "Lyrics +";
    });
    audio.addEventListener("play", () => { track.classList.add("is-playing"); btn.textContent = "❚❚"; btn.setAttribute("aria-label", "Pause"); });
    audio.addEventListener("pause", () => { track.classList.remove("is-playing"); btn.textContent = "▶"; btn.setAttribute("aria-label", "Play"); });
    audio.addEventListener("ended", () => { if (fill) fill.style.width = "0%"; });
    audio.addEventListener("timeupdate", () => {
      if (audio.duration && fill) fill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      if (time) time.textContent = fmtTime(audio.currentTime);
    });
  });
}

function initNav() {
  const toggle = document.querySelector(".menu-toggle");
  const overlay = document.querySelector("[data-overlay]");
  if (!toggle || !overlay) return;
  overlay.hidden = false;
  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".menu-toggle-text").textContent = open ? "Close" : "Index";
  };
  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
  document.querySelectorAll("[data-overlay-link]").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

function initToTop() {
  document.querySelector("[data-to-top]")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
}

/* ---------- Lola & Neal: synthesized barks (Web Audio, no sound file) ---------- */
let dogAudioContext;
const dogBarkCooldowns = new Map();

function getDogAudioContext() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  if (!dogAudioContext) dogAudioContext = new AC();
  if (dogAudioContext.state === "suspended") dogAudioContext.resume().catch(() => {});
  return dogAudioContext;
}
function makeNoiseBuffer(ctx, duration) {
  const frames = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frames; i += 1) data[i] = Math.random() * 2 - 1;
  return buffer;
}
function barkPulse(ctx, start, p, phrase = {}) {
  const oscA = ctx.createOscillator(), oscB = ctx.createOscillator();
  const oscGain = ctx.createGain(), filter = ctx.createBiquadFilter(), formant = ctx.createBiquadFilter();
  const noise = ctx.createBufferSource(), noiseGain = ctx.createGain(), output = ctx.createGain();
  const end = start + p.duration;
  const freq = p.frequency * (phrase.frequencyScale || 1);
  oscA.type = p.wave; oscB.type = "square";
  oscA.frequency.setValueAtTime(freq * p.scoop, start);
  oscA.frequency.exponentialRampToValueAtTime(freq, start + 0.012);
  oscA.frequency.setValueAtTime(freq * p.step, start + p.duration * 0.42);
  oscA.frequency.exponentialRampToValueAtTime(freq * p.drop, end);
  oscB.frequency.setValueAtTime(freq * 2.05, start);
  oscB.frequency.setValueAtTime(freq * 1.58, start + p.duration * 0.5);
  oscB.frequency.exponentialRampToValueAtTime(freq * 1.08, end);
  filter.type = "bandpass"; filter.frequency.setValueAtTime(p.noiseFrequency, start); filter.Q.setValueAtTime(p.noiseQ, start);
  formant.type = "bandpass"; formant.frequency.setValueAtTime(p.formant, start); formant.Q.setValueAtTime(p.formantQ, start);
  noise.buffer = makeNoiseBuffer(ctx, p.duration);
  oscGain.gain.setValueAtTime(0.0001, start);
  oscGain.gain.exponentialRampToValueAtTime(p.toneLevel, start + 0.006);
  oscGain.gain.exponentialRampToValueAtTime(p.toneLevel * 0.55, start + 0.026);
  oscGain.gain.exponentialRampToValueAtTime(0.0001, end);
  noiseGain.gain.setValueAtTime(0.0001, start);
  noiseGain.gain.exponentialRampToValueAtTime(p.noiseLevel, start + 0.004);
  noiseGain.gain.exponentialRampToValueAtTime(p.noiseLevel * 0.48, start + 0.03);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, end);
  output.gain.setValueAtTime(p.volume * (phrase.volumeScale || 1), start);
  output.gain.exponentialRampToValueAtTime(0.0001, end + 0.025);
  oscA.connect(oscGain); oscB.connect(oscGain); oscGain.connect(output);
  noise.connect(filter); filter.connect(formant); formant.connect(noiseGain); noiseGain.connect(output);
  output.connect(ctx.destination);
  oscA.start(start); oscA.stop(end + 0.03); oscB.start(start); oscB.stop(end + 0.03); noise.start(start); noise.stop(end + 0.03);
}
function playDogBark(kind) {
  const now = performance.now();
  if (now - (dogBarkCooldowns.get(kind) || 0) < 850) return;
  dogBarkCooldowns.set(kind, now);
  const ctx = getDogAudioContext();
  if (!ctx) return;
  const profiles = {
    lola: { wave: "triangle", frequency: 1180, scoop: 0.72, step: 1.34, drop: 0.86, duration: 0.105, toneLevel: 0.22, noiseLevel: 0.08, noiseFrequency: 5100, noiseQ: 12, formant: 1850, formantQ: 9, volume: 0.22,
      phrases: [{ gap: 0, frequencyScale: 1, volumeScale: 1 }, { gap: 0.115, frequencyScale: 1.26, volumeScale: 0.92 }, { gap: 0.255, frequencyScale: 0.9, volumeScale: 0.78 }] },
    neal: { wave: "square", frequency: 850, scoop: 0.82, step: 1.5, drop: 0.72, duration: 0.13, toneLevel: 0.19, noiseLevel: 0.11, noiseFrequency: 4100, noiseQ: 9, formant: 1350, formantQ: 8, volume: 0.21,
      phrases: [{ gap: 0, frequencyScale: 1, volumeScale: 1 }, { gap: 0.145, frequencyScale: 0.78, volumeScale: 0.92 }, { gap: 0.31, frequencyScale: 1.18, volumeScale: 0.76 }] }
  };
  const profile = profiles[kind] || profiles.lola;
  const start = ctx.currentTime + 0.01;
  profile.phrases.forEach((phrase) => barkPulse(ctx, start + phrase.gap, profile, phrase));
}
function wireDogBarks() {
  const dogs = [[".hero-dog--lola", "lola"], [".hero-dog--neal", "neal"]]
    .map(([sel, kind]) => { const dog = document.querySelector(sel); return dog ? { dog, kind } : null; })
    .filter(Boolean);
  if (!dogs.length) return;
  const setHover = (dog, kind, hovered) => {
    const was = dog.classList.contains("is-dog-hovered");
    dog.classList.toggle("is-dog-hovered", hovered);
    if (hovered && !was) playDogBark(kind);
  };
  document.addEventListener("pointermove", (e) => {
    dogs.forEach(({ dog, kind }) => {
      const r = dog.getBoundingClientRect();
      const pad = 18;
      const hovered = e.clientX >= r.left - pad && e.clientX <= r.right + pad && e.clientY >= r.top - pad && e.clientY <= r.bottom + pad;
      setHover(dog, kind, hovered);
    });
  }, { passive: true });
  dogs.forEach(({ dog, kind }) => {
    dog.addEventListener("focusin", () => setHover(dog, kind, true));
    dog.addEventListener("focusout", () => setHover(dog, kind, false));
    dog.addEventListener("click", () => playDogBark(kind));
  });
}

/* ---------- boot ---------- */
renderWorkIndex();
renderOverlayNav();
renderCases();
renderAwards();
renderTicker();

initReveal();
initHud();
initWorklistPreview();
initVideos();
initAudio();
initNav();
initToTop();
wireDogBarks();

// hero entrance on load
requestAnimationFrame(() => document.querySelector(".hero")?.classList.add("is-in"));

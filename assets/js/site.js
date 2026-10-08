/* Brill.ai — Lumagica homepage behaviour.
   Everything here is enhancement: without JS the page still reads top to bottom. */
(() => {
  "use strict";

  const doc = document.documentElement;
  doc.classList.add("js");

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const stacked = matchMedia("(max-width: 900px)");

  // ---------- crew ----------
  const CREW = {
    brill:    { name: "בריל",            role: "בימוי, בחירות ועריכה" },
    zaid:     { name: "זייד",            role: "הלקוח" },
    chatgpt:  { name: "ChatGPT",         role: "ניסח ויצר" },
    codex:    { name: "Codex",           role: "בנה והפעיל" },
    claude:   { name: "Claude",          role: "הפעיל את Flow" },
    flow:     { name: "Google Flow",     role: "צילם" },
    magnific: { name: "Magnific",        role: "צילם במקביל" },
    davinci:  { name: "DaVinci Resolve", role: "שולחן העריכה" }
  };
  const ORDER = Object.keys(CREW);
  const color = (id) => `var(--c-${id})`;

  const botSVG = () => `
    <svg class="bot" viewBox="0 0 40 58" aria-hidden="true" focusable="false">
      <line class="antenna" x1="20" y1="9" x2="20" y2="5"/>
      <circle class="bulb" cx="20" cy="3.4" r="2.6"/>
      <rect class="limb leg-l" x="14" y="44" width="4" height="12" rx="2"/>
      <rect class="limb leg-r" x="22" y="44" width="4" height="12" rx="2"/>
      <rect class="limb" x="6.5" y="34" width="3.5" height="9" rx="1.75"/>
      <rect class="limb" x="30" y="34" width="3.5" height="9" rx="1.75"/>
      <rect class="shell" x="11" y="32" width="18" height="14" rx="5"/>
      <circle class="heart" cx="20" cy="39" r="2.2"/>
      <rect class="shell" x="5" y="9" width="30" height="22" rx="8"/>
      <rect class="visor" x="9" y="14" width="22" height="12" rx="6"/>
      <circle class="iris" cx="15" cy="20" r="3.4"/>
      <circle class="iris" cx="25" cy="20" r="3.4"/>
      <circle class="pupil" cx="15" cy="20" r="1.8"/>
      <circle class="pupil" cx="25" cy="20" r="1.8"/>
    </svg>`;

  // crew section portraits
  document.querySelectorAll(".member").forEach((li) => {
    const id = li.dataset.bot;
    li.style.setProperty("--c", color(id));
    const holder = li.querySelector(".member-bot");
    if (holder) holder.innerHTML = botSVG();
  });

  // ---------- tooltip ----------
  const tip = document.getElementById("botTip");
  function showTip(text, x, y) {
    tip.textContent = text;
    tip.style.transform = `translate(${x + 14}px, ${y + 16}px)`;
    tip.classList.add("is-on");
  }
  const hideTip = () => tip.classList.remove("is-on");

  // ---------- process: steps, stops, rail robots ----------
  const steps = [...document.querySelectorAll(".step")];
  const stageImgs = [...document.querySelectorAll(".stage-img")];
  const caption = document.getElementById("stageCaption");
  const stopsEl = document.getElementById("railStops");
  const botsEl = document.getElementById("railBots");
  const railFill = document.getElementById("railFill");
  const stage = document.querySelector(".stage");

  const stepWho = steps.map((s) => (s.dataset.who || "").split(/\s+/).filter(Boolean));

  // who-worked-here chips under each step
  steps.forEach((s, i) => {
    const row = document.createElement("div");
    row.className = "step-who";
    row.setAttribute("aria-label", "מי עבד בתחנה");
    row.innerHTML = stepWho[i]
      .map((id) => `<span class="chip" style="--c:${color(id)}">${CREW[id].name}</span>`)
      .join("");
    s.appendChild(row);
  });

  // the rail exists only on the homepage
  const hasRail = Boolean(stopsEl && botsEl);
  if (hasRail) {
    stopsEl.innerHTML = steps
      .map((s, i) => `<li><span class="dot"></span><span class="lbl">${i + 1}</span></li>`)
      .join("");
  }
  const stops = hasRail ? [...stopsEl.children] : [];

  const railBots = (hasRail ? ORDER : []).map((id) => {
    const el = document.createElement("div");
    el.className = "rbot is-idle";
    el.style.setProperty("--c", color(id));
    el.dataset.id = id;
    el.innerHTML = botSVG();
    botsEl.appendChild(el);
    if (finePointer) {
      el.addEventListener("pointermove", (e) => showTip(`${CREW[id].name}: ${CREW[id].role}`, e.clientX, e.clientY));
      el.addEventListener("pointerleave", hideTip);
    }
    return { id, el, x: null };
  });

  // centre of each stop, measured from the rail's left edge
  let stopX = [];
  let railW = 0;
  function measureRail() {
    if (!hasRail) return;
    const r = botsEl.getBoundingClientRect();
    railW = r.width;
    stopX = stops.map((li) => {
      const d = li.querySelector(".dot").getBoundingClientRect();
      return d.left + d.width / 2 - r.left;
    });
  }

  let active = -1;
  const walkTimers = new Map();

  function placeBots(i) {
    if (!stopX.length) return;
    const botW = railBots[0].el.getBoundingClientRect().width || 30;
    const who = stepWho[i];
    const working = railBots.filter((b) => who.includes(b.id));
    const waiting = railBots.filter((b) => !who.includes(b.id));
    const cx = stopX[i];
    const gap = botW * 0.92;
    const idleGap = botW * 0.62;

    const targets = new Map();
    working.forEach((b, k) => targets.set(b, cx + (k - (working.length - 1) / 2) * gap - botW / 2));
    // the rest of the crew waits behind them; in Hebrew "behind" is to the right
    const backStart = cx + (working.length / 2) * gap + botW * 0.15;
    waiting.forEach((b, k) => targets.set(b, backStart + k * idleGap - botW / 2 + idleGap / 2));

    // keep the whole group on the rail
    const xs = [...targets.values()];
    let shift = 0;
    const maxX = Math.max(...xs), minX = Math.min(...xs);
    if (maxX > railW - botW) shift = railW - botW - maxX;
    if (minX + shift < 0) shift = -minX;

    railBots.forEach((b) => {
      const x = targets.get(b) + shift;
      const moved = b.x === null ? false : Math.abs(b.x - x) > 2;
      b.x = x;
      b.el.style.setProperty("--x", `${x.toFixed(1)}px`);
      const isWorking = who.includes(b.id);
      b.el.classList.toggle("is-idle", !isWorking);
      b.el.classList.toggle("is-front", isWorking);
      if (moved && !reduceMotion) {
        b.el.classList.add("is-walking");
        clearTimeout(walkTimers.get(b));
        walkTimers.set(b, setTimeout(() => b.el.classList.remove("is-walking"), 900));
      }
    });
  }

  function setActive(i) {
    if (i === active) return;
    active = i;
    steps.forEach((s, k) => s.classList.toggle("is-active", k === i));
    stageImgs.forEach((img, k) => img.classList.toggle("is-active", k === i));
    stops.forEach((li, k) => {
      li.classList.toggle("is-active", k === i);
      li.classList.toggle("is-done", k < i);
    });
    if (caption && steps[i].dataset.caption) caption.textContent = steps[i].dataset.caption;
    placeBots(i);
  }

  function readingLine() {
    const vh = window.innerHeight;
    if (stacked.matches && stage) return Math.min(vh * 0.8, stage.getBoundingClientRect().bottom + 90);
    return vh * 0.5;
  }

  function updateProcess() {
    if (!steps.length) return;
    const line = readingLine();
    let i = 0;
    steps.forEach((s, k) => { if (s.getBoundingClientRect().top <= line) i = k; });
    setActive(i);

    // rail fill: from the first stop to the current reading position, right to left
    const r = steps[i].getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (line - r.top) / r.height));
    const here = stopX[i], next = stopX[Math.min(i + 1, stopX.length - 1)];
    const x = here + (next - here) * frac;
    const first = stopX[0];
    if (railW) {
      const start = railW - first; // distance of stop 1 from the right edge
      railFill.style.right = `${(start / railW) * 100}%`;
      railFill.style.width = `${(Math.max(0, first - x) / railW) * 100}%`;
    }
  }

  // ---------- statement: words light up as you read ----------
  const statement = document.getElementById("statement");
  let words = [];
  if (statement) {
    const parts = statement.textContent.trim().split(/(\s+)/);
    statement.innerHTML = parts
      .map((p) => (/^\s+$/.test(p) ? p : `<span class="w">${p}</span>`))
      .join("");
    words = [...statement.querySelectorAll(".w")];
    if (reduceMotion) words.forEach((w) => w.classList.add("is-lit"));
  }
  function updateStatement() {
    if (!words.length || reduceMotion) return;
    const r = statement.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.82 - r.top) / (r.height + vh * 0.25)));
    const lit = Math.round(p * words.length);
    words.forEach((w, k) => w.classList.toggle("is-lit", k < lit));
  }

  // ---------- hero ----------
  const nav = document.getElementById("nav");
  const sides = [...document.querySelectorAll(".hero-side")];
  function updateHero() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
    if (reduceMotion) return;
    const py = Math.min(120, window.scrollY * 0.08);
    sides.forEach((s) => s.style.setProperty("--py", `${py.toFixed(1)}px`));
  }

  const video = document.getElementById("teaser");
  const soundBtn = document.getElementById("soundToggle");
  if (video) {
    if (reduceMotion) {
      video.controls = true;
    } else if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      }, { threshold: 0.25 }).observe(video);
    }
  }
  if (soundBtn && video) {
    const label = soundBtn.querySelector("span");
    soundBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      if (!video.muted) {
        if (video.currentTime > 25) video.currentTime = 0;
        video.play().catch(() => {});
      }
      soundBtn.setAttribute("aria-pressed", String(!video.muted));
      label.textContent = video.muted ? "הפעילו קול בטיזר" : "השתיקו את הטיזר";
    });
  }

  // ---------- more work: silent clips play only while on screen ----------
  document.querySelectorAll("video[data-autoplay]").forEach((v) => {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      v.controls = true;
      return;
    }
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.4 }).observe(v);
  });

  // ---------- play the full film with sound in place of its silent loop ----------
  // Without JS the link simply opens the film file.
  document.querySelectorAll("a[data-film]").forEach((link) => {
    const v = document.getElementById(link.dataset.for);
    if (!v) return;
    const loopSrc = v.getAttribute("src");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = link.className;
    btn.innerHTML = link.innerHTML;
    btn.setAttribute("aria-pressed", "false");
    link.replaceWith(btn);
    const label = btn.querySelector("span");
    const idleText = label.textContent;
    const toLoop = () => {
      btn.setAttribute("aria-pressed", "false");
      label.textContent = idleText;
      v.src = loopSrc;
      v.muted = true;
      v.loop = true;
      if (!reduceMotion) v.play().catch(() => {});
    };
    btn.addEventListener("click", () => {
      if (btn.getAttribute("aria-pressed") === "true") { toLoop(); return; }
      btn.setAttribute("aria-pressed", "true");
      label.textContent = "השתיקו וחזרו ללולאה";
      v.src = link.dataset.film;
      v.loop = false;
      v.muted = false;
      v.play().catch(() => {});
    });
    v.addEventListener("ended", () => { if (btn.getAttribute("aria-pressed") === "true") toLoop(); });
  });

  // ---------- work page: one play button per cover, one track at a time ----------
  const tracks = [...document.querySelectorAll(".track")];
  const ICONS = `
    <svg class="i-play" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4.2v11.6a.8.8 0 0 0 1.2.7l9.3-5.8a.8.8 0 0 0 0-1.4L7.2 3.5A.8.8 0 0 0 6 4.2z"/></svg>
    <svg class="i-pause" viewBox="0 0 20 20" aria-hidden="true"><rect x="5" y="4" width="3.4" height="12" rx="1"/><rect x="11.6" y="4" width="3.4" height="12" rx="1"/></svg>`;
  tracks.forEach((li) => {
    const audio = li.querySelector("audio");
    const img = li.querySelector("img");
    if (!audio || !img) return;
    const title = li.querySelector(".track-title")?.textContent.trim() || "";
    const cover = document.createElement("div");
    cover.className = "track-cover";
    img.replaceWith(cover);
    cover.appendChild(img);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "track-play";
    btn.innerHTML = ICONS;
    const bar = document.createElement("span");
    bar.className = "track-bar";
    bar.innerHTML = "<i></i>";
    cover.append(btn, bar);
    const label = () => btn.setAttribute("aria-label", `${audio.paused ? "נגנו" : "עצרו"}: ${title}`);
    label();
    btn.addEventListener("click", () => {
      if (audio.paused) {
        tracks.forEach((other) => { const a = other.querySelector("audio"); if (a !== audio) a?.pause(); });
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });
    audio.addEventListener("play", () => { li.classList.add("is-playing", "has-played"); label(); });
    audio.addEventListener("pause", () => { li.classList.remove("is-playing"); label(); });
    audio.addEventListener("ended", () => { audio.currentTime = 0; });
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) bar.style.setProperty("--p", `${(audio.currentTime / audio.duration) * 100}%`);
    });
    li.classList.add("is-enhanced");
  });

  // ---------- eyes follow the cursor ----------
  const pupils = [];
  document.querySelectorAll(".bot").forEach((svg) => {
    pupils.push({ svg, nodes: [...svg.querySelectorAll(".pupil")] });
  });
  let pointer = null;
  let eyesQueued = false;

  function updateEyes() {
    eyesQueued = false;
    const vh = window.innerHeight;
    pupils.forEach(({ svg, nodes }) => {
      const r = svg.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      let tx = 0, ty = 0;
      if (pointer) {
        const ex = r.left + r.width / 2;
        const ey = r.top + r.height * 0.34;
        const dx = pointer.x - ex, dy = pointer.y - ey;
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1.6, dist / 30);
        tx = (dx / dist) * reach;
        ty = (dy / dist) * reach;
      } else if (svg.closest(".rbot.is-walking")) {
        tx = -1.4; // looking where they walk
      }
      nodes.forEach((n) => { n.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`; });
    });
  }
  const queueEyes = () => { if (!eyesQueued) { eyesQueued = true; requestAnimationFrame(updateEyes); } };

  if (finePointer) {
    window.addEventListener("pointermove", (e) => { pointer = { x: e.clientX, y: e.clientY }; queueEyes(); }, { passive: true });
    document.addEventListener("pointerleave", () => { pointer = null; queueEyes(); });
  }

  // ---------- frame loop on scroll ----------
  let queued = false;
  function frame() {
    queued = false;
    updateHero();
    updateStatement();
    updateProcess();
    updateEyes();
  }
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };

  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", () => { measureRail(); active = -1; queue(); });
  stacked.addEventListener?.("change", () => { measureRail(); active = -1; queue(); });

  measureRail();
  frame();
  // fonts can shift layout; measure again once they are in
  document.fonts?.ready.then(() => { measureRail(); active = -1; queue(); });
})();

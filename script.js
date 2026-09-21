/* =========================================================
   HENSHIN BIO — script.js
   >>> CHỈ CẦN SỬA 2 KHỐI ĐẦU TIÊN: CONFIG và PROJECTS <<<
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIG — thông tin cá nhân & đường dẫn file
   --------------------------------------------------------- */
const CONFIG = {
  // Thông tin hiển thị
  name:        "BB THÍCH SUB KR",
  tagline:     "Subtitle Project",                 // dòng nhỏ dưới tên
  role:        "SUBTITLE OPERATOR",                // hiện ở dòng "ROLE" trong bảng hệ thống
  location:    "VIETNAM",                          // hiện ở dòng "LOCATION"
  description: "Xin chào, mình là ...\n\nMình thực hiện các dự án phụ đề và chia sẻ những bộ phim mà mình yêu thích.",

  // Màn hình mở đầu
  helloTitle:  "Xin chào, cảm ơn bạn đã ghé thăm.",
  helloSub:    "Trước khi vào trang, dành cho mình một giây nhé.",
  systemLabel: "Hệ thống sẵn sàng",
  supportText: "Nếu bạn yêu thích những dự án phụ đề của mình, hãy ủng hộ để mình có thêm động lực tiếp tục.",

  // Hình ảnh (chỉ cần thay file trong thư mục assets, đúng tên + đúng đuôi)
  avatar:       "assets/images/avatar.png",
  background:   "assets/images/background.jpg",
  banner:       "assets/images/banner.jpg",
  qr:           "assets/qr/qr-stk.png",

  // Video henshin — KHÔNG ghi đuôi file. Đặt file tên "henshin.<đuôi>"
  // với đuôi là mp4, webm, mov hoặc ogv (xem thứ tự ở VIDEO_EXTS bên dưới).
  henshinVideo: "assets/videos/henshin",

  // Âm thanh — KHÔNG ghi đuôi file. Đặt file tên "bgm.<đuôi>", "henshin.<đuôi>",
  // "click.<đuôi>" với đuôi là mp3, ogg, wav, m4a hoặc aac (xem AUDIO_EXTS).
  // Chỉ cần có 1 file đúng tên gốc, đuôi nào trong danh sách cũng chạy được.
  audio: {
    bgm:     "assets/audio/bgm",      // NHẠC NỀN (phát ở trang Bio)
    henshin: "assets/audio/henshin",  // tiếng khi bấm HENSHIN
    click:   "assets/audio/click",    // tiếng bấm nút

    // ÂM BẮT ĐẦU — phát ngay khi bấm nút "BẮT ĐẦU" ở màn khởi động (đây là
    // thao tác chạm chủ động đầu tiên của người xem trên trang), phát xong
    // hết mới tới lượt nhạc nền. Đặt file "ambd.mp3" vào assets/audio/ —
    // để trống cũng không lỗi.
    ambd:    "assets/audio/ambd",

    // ÂM KẾT THÚC — phát khi: (1) bấm nút "TRUY CẬP" để mở phim,
    // hoặc (2) người xem rời/tắt trang. Đặt file "amkt.mp3" vào assets/audio/.
    amkt:    "assets/audio/amkt"
  },
  bgmVolume: 0.35,        // 0 → 1
  sfxVolume: 0.6,
  ambdVolume: 0.8,        // âm lượng riêng cho "âm bắt đầu"
  amktVolume: 0.8,        // âm lượng riêng cho "âm kết thúc"
  bgmAutoStart: true,     // tự bật nhạc nền ngay sau khi "âm bắt đầu" (ambd) phát xong

  // Liên kết
  zalo: "https://zalo.me/g/1hjwidg3oi5acdztlqny",
  tiktok: "https://www.tiktok.com/@boizfu?lang=vi-VN",   // hoặc link TikTok thật của bạn

  // Tuỳ chọn
  videoMuted: true,       // true = video henshin chạy không tiếng (an toàn với trình duyệt)
  skipVideo: false        // true = bỏ hẳn bước video
};

/* ---------------------------------------------------------
   2) PROJECTS — thêm phim mới bằng cách thêm 1 object
   --------------------------------------------------------- */
const PROJECTS = [
  {
    title:       "KAMEN RIDER MY-TH",
    poster:      "assets/images/project-01.jpg",
    description: `Nhân vật chính là 音澄 宙 (Otosumi Sora).
Anh là một "Meister" phục vụ cho gia đình danh giá Mizuki. Công việc của Sora không chỉ là quản gia bình thường: anh có thể nấu ăn, dọn dẹp, sửa chữa... gần như chuyện gì cũng làm được, đồng thời từ nhỏ đã chiến đấu với những con quái vật gọi là Fukashigi (不可思議).
Sora đặc biệt trung thành với cô chủ Mizuki Yuna, một nữ sinh trung học. Yuna giao việc gì thì dù ngoài miệng có càu nhàu, Sora vẫn làm hết. 😂
Và khi Fukashigi xuất hiện...

Sora biến thành Kamen Rider Mais — Rider chuột đầu tiên trong lịch sử Kamen Rider..`,
    year:        "2026",
    status:      "Updating",
    link:        "https://odysee.com/@bbthichsubkr:5/KAMEN-RIDER-MY-TH:9",
    extra: {                         // tuỳ chọn — hiện thêm trong modal
      "Thể loại": "Tokusatsu",
      "Số tập": "??"
    }
  },
  {
    title:       "KAMEN RIDER ZEZTZ",
    poster:      "assets/images/project-02.jpg",
    description: `Nhân vật chính là Yorozu Baku (万津 莫), 23 tuổi, một thanh niên khá bình thường nhưng sở hữu khả năng Lucid Dream – mộng tỉnh, cho phép anh tự điều khiển giấc mơ của mình.
Trong giấc mơ, Baku biến thành một đặc vụ gần như bất khả chiến bại. Anh thường xuyên thực hiện các nhiệm vụ để giải cứu Nemu, một cô gái bị mắc kẹt trong thế giới giấc mơ.
Nhưng rồi những sinh vật gọi là Nightmare (ナイトメア) xuất hiện. Chúng không chỉ tồn tại trong mơ mà còn tìm cách xâm nhập thế giới thực và biến những cơn ác mộng thành hiện thực.
Baku nhận được Zeztz Driver và trở thành Kamen Rider Zeztz, chiến đấu chống lại Nightmare.`,
    year:        "2025-2026",
    status:      "ĐÃ XONG",
    link:        "https://app.notion.com/p/KAMEN-RIDER-ZEZTZ-3d0e9319335880e58142ea90601c7ffe?source=copy_link",
    extra: {                         // tuỳ chọn — hiện thêm trong modal
      "Thể loại": "Tokusatsu",
      "Số tập": "50"
    }
  },
    {
    title:       "KAMEN RIDER AGITO 25TH:PSYCHIC WAR",
    poster:      "assets/images/project-03.jpg",
    description: `Bối cảnh hỗn loạn: 25 năm sau, thế giới chấn động bởi các vụ án mạng siêu nhiên do những người thức tỉnh siêu năng lực gây ra.Bi kịch của G3: Anh hùng Makoto Hikawa (G3) bị ngồi tù oan vì nghi án sát hại vị hôn thê của đồng nghiệp.Vai trò của Shoichi: Nhân vật chính Shoichi Tsugami lúc này đã mất sức mạnh Agito, chỉ đóng vai trò hỗ trợ từ phía sau.Phản diện nguy hiểm: Kẻ thù chính là quân đoàn quái vật Gill Clones, được tạo ra từ những người có siêu năng lực bị tiêm tế bào đột biến.Trận chiến cuối cùng: Đội đặc nhiệm G-Unit phải sử dụng các bộ giáp thế hệ mới phối hợp cùng Agito để ngăn chặn âm mưu hủy diệt xã hội.`,
    year:        "2026",
    status:      "COMPLETED",
    link:        "https://app.notion.com/p/Agito-Psychic-War-KAMEN-RIDER-AGITO-25TH-3d2e93193358807ebebed53a1d3a09a7?source=copy_link",
    extra: {                         // tuỳ chọn — hiện thêm trong modal
      "Thể loại": "Tokusatsu",
      "Số tập": "1/1"
    }
  },
      {
    title:       "KAMEN RIDER ALL MOVIE",
    poster:      "assets/images/project-04.jpg",
    description: `Tổng hợp movie kamen rider.`,
    year:        "2026",
    status:      "UPDATE",
    link:        "https://app.notion.com/p/ALL-MOVIE-KAMEN-RIDER-3d0e93193358809d94c1db20f9367ab3?source=copy_link",
    extra: {                         // tuỳ chọn — hiện thêm trong modal
      "Thể loại": "Tokusatsu",
      "Số tập": "??"
    }
  },
];

/* ---------------------------------------------------------
   3) SYSTEM_LOG — nhật ký hệ thống (tuỳ chọn)
   Để trống mặc định — KHÔNG tự bịa lịch sử. Muốn thêm log thì thêm object
   mới vào mảng này, log mới nhất nên để lên đầu mảng:

   { date: "18.09.2026", lines: ["DATABASE UPDATED", "PROJECT ARCHIVE SYNCHRONIZED"] },
   --------------------------------------------------------- */
const SYSTEM_LOG = [
  { date: "20.09.2026", lines: ["CẬP NHẬT KAMEN RIDER MY-TH TẬP 3", "UPDATE"] },
  { date: "30.08.2026", lines: ["HOÀN THÀNH KAMEN RIDER ZEZTZ", "HOÀN THÀNH"] },
  { date: "05.09.2026", lines: ["HOÀN THÀNH KAMEN RIDER AGITO 25TH:Psychic War", "HOÀN THÀNH"] },
  { date: "XX.XX.2026", lines: ["TỔNG HỢP MOVIE KAMEN RIDER", "UPDATE"] },
];

/* =========================================================
   ==========  TỪ ĐÂY TRỞ XUỐNG KHÔNG CẦN SỬA  ============
   ========================================================= */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Thứ tự ưu tiên đuôi file cho audio/video "cân mọi định dạng".
// Trình duyệt sẽ tự thử từng đuôi theo đúng thứ tự này; đuôi nào có
// file thật (không lỗi 404) thì dùng đuôi đó, không cần sửa code.
const AUDIO_EXTS = ["mp3", "ogg", "wav", "m4a", "aac"];
const VIDEO_EXTS = ["mp4", "webm", "mov", "ogv"];

// Gắn nhiều <source> vào <audio>/<video> từ một tên gốc không đuôi.
// basePath ví dụ "assets/audio/bgm" → thử bgm.mp3, bgm.ogg, bgm.wav...
function attachSources(el, basePath, exts) {
  if (!el || !basePath) return;
  el.querySelectorAll("source").forEach(s => s.remove());
  el.removeAttribute("src");
  exts.forEach(ext => {
    const source = document.createElement("source");
    source.src = `${basePath}.${ext}`;
    el.appendChild(source);
  });
  el.load();
}

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
       <rect width="640" height="360" fill="#0a0d13"/>
       <path d="M0 360 L640 0" stroke="#1e2733" stroke-width="2"/>
       <text x="50%" y="52%" fill="#3a4654" font-family="sans-serif"
             font-size="22" text-anchor="middle">chưa có ảnh</text>
     </svg>`
  );

/* ---------- Ảnh lỗi thì thay bằng placeholder ---------- */
function guardImage(img, onFail) {
  if (!img) return;
  img.addEventListener("error", () => {
    if (onFail) onFail();
    else img.src = PLACEHOLDER;
  }, { once: true });
}

/* ---------- Âm thanh ---------- */
const Sound = {
  bgm: $("#bgm"),
  click: $("#sfx-click"),
  henshin: $("#sfx-henshin"),
  ambd: $("#sfx-ambd"),
  amkt: $("#sfx-amkt"),
  ready: false,
  userPausedBgm: false,   // true khi người dùng tự tắt nhạc nền bằng nút

  init() {
    attachSources(this.bgm, CONFIG.audio.bgm, AUDIO_EXTS);
    attachSources(this.click, CONFIG.audio.click, AUDIO_EXTS);
    attachSources(this.henshin, CONFIG.audio.henshin, AUDIO_EXTS);
    attachSources(this.ambd, CONFIG.audio.ambd, AUDIO_EXTS);
    attachSources(this.amkt, CONFIG.audio.amkt, AUDIO_EXTS);
    this.bgm.volume = CONFIG.bgmVolume;
    this.click.volume = this.henshin.volume = CONFIG.sfxVolume;
    this.ambd.volume = CONFIG.ambdVolume ?? CONFIG.sfxVolume;
    this.amkt.volume = CONFIG.amktVolume ?? CONFIG.sfxVolume;
    this.ready = true;
  },

  play(key) {
    const el = this[key];
    if (!el) return;
    try { el.currentTime = 0; el.play().catch(() => {}); } catch (e) {}
  },

  // "Mở khoá" một thẻ audio/video ngay TRONG thao tác chạm của người dùng,
  // để lát sau có thể .play() nó bằng code (trong setTimeout, sự kiện...)
  // mà không bị trình duyệt di động (đặc biệt webview TikTok/Zalo/Safari) chặn.
  // Cách làm: phát thử ở chế độ câm rồi dừng lại ngay, trình duyệt vẫn tính
  // là thẻ này "đã được người dùng cho phép phát".
  unlock(el) {
    if (!el) return;
    const prevMuted = el.muted, prevVolume = el.volume;
    try {
      el.muted = true;
      el.volume = 0;
      const p = el.play();
      const restore = () => { el.muted = prevMuted; el.volume = prevVolume; };
      if (p && p.then) {
        p.then(() => { try { el.pause(); el.currentTime = 0; } catch (e) {} restore(); })
         .catch(restore);
      } else {
        try { el.pause(); } catch (e) {}
        restore();
      }
    } catch (e) { el.muted = prevMuted; el.volume = prevVolume; }
  },

  unlockAll() {
    [this.bgm, this.amkt, $("#henshin-video")].forEach(el => this.unlock(el));
  },

  startBgm() {
    if (!CONFIG.bgmAutoStart || this.userPausedBgm) return;
    this.bgm.play()
      .then(() => setBgmState("on"))
      .catch(() => setBgmState("blocked"));   // trình duyệt chặn → vẫn chạy bình thường
  },

  // Phát "âm bắt đầu" (ambd) trước, đợi nó phát xong (hoặc lỗi/không có file)
  // rồi mới bật nhạc nền — đúng thứ tự: bấm HENSHIN → âm bắt đầu → nhạc nền.
  playAmbdThenBgm() {
    const el = this.ambd;
    if (!el) { this.startBgm(); return; }

    let done = false;
    const proceed = () => {
      if (done) return;
      done = true;
      this.startBgm();
    };

    try {
      el.currentTime = 0;
      const p = el.play();
      if (p && p.catch) p.catch(proceed);       // không phát được → bỏ qua, chạy nhạc luôn
    } catch (e) { proceed(); }

    el.addEventListener("ended", proceed, { once: true });
    el.addEventListener("error", proceed, { once: true });
    setTimeout(proceed, 4000); // phòng file dài / không bắn được sự kiện
  }
};

const bgmBtn = $("#bgm-toggle");

// state: "on" (đang phát) | "off" (người dùng tự tắt) | "blocked" (trình duyệt chặn autoplay)
function setBgmState(state) {
  bgmBtn.hidden = false;
  bgmBtn.setAttribute("aria-pressed", String(state === "on"));
  bgmBtn.classList.toggle("is-blocked", state === "blocked");
  const icon = bgmBtn.querySelector(".bgm-icon");
  if (icon) icon.textContent = state === "on" ? "❚❚" : "►";
  const label = state === "on" ? "AUDIO ONLINE"
              : state === "blocked" ? "AUDIO WAITING"
              : "AUDIO PAUSED";
  bgmBtn.querySelector(".bgm-text").textContent = label;
}

bgmBtn.addEventListener("click", () => {
  const on = bgmBtn.getAttribute("aria-pressed") === "true";
  if (on) {
    Sound.bgm.pause();
    Sound.userPausedBgm = true;     // nhớ là người dùng chủ động tắt
    setBgmState("off");
  } else {
    Sound.bgm.play()
      .then(() => { Sound.userPausedBgm = false; setBgmState("on"); })
      .catch(() => setBgmState("blocked"));
  }
});

/* ---------- Điều hướng màn hình ---------- */
const screens = {
  boot:  $("#screen-boot"),
  intro: $("#screen-intro"),
  video: $("#screen-video"),
  bio:   $("#screen-bio")
};

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    const on = key === name;
    el.classList.toggle("is-active", on);
    el.hidden = !on;
  });
  document.body.classList.toggle("is-locked", name !== "bio");
  window.scrollTo(0, 0);
}

/* ---------- Đổ dữ liệu từ CONFIG vào trang ---------- */
function applyConfig() {
  document.title = `${CONFIG.name} | Official Bio`;
  document.documentElement.style.setProperty("--bg-url", `url("${CONFIG.background}")`);

  // 3 dòng này được gõ ra từng chữ bởi runIntroTypewriter() — không gán thẳng ở đây
  $("#support-text").textContent = CONFIG.supportText;

  const qrImgs = $$(".qr-img");
  qrImgs.forEach(qr => { qr.src = CONFIG.qr; guardImage(qr); });

  const avatar = $("#avatar-img");
  avatar.src = CONFIG.avatar;
  avatar.alt = `Ảnh đại diện của ${CONFIG.name}`;
  guardImage(avatar);

  const banner = $("#banner-img");
  banner.src = CONFIG.banner;
  guardImage(banner, () => $(".hero__banner").classList.add("is-missing"));

  $("#bio-name").textContent    = CONFIG.name;
  $("#bio-tagline").textContent = CONFIG.tagline;
  $("#bio-about").textContent   = CONFIG.description;
  renderHeroReadout();

  const zalo = $("#link-zalo");
  const tiktok = $("#link-tiktok");
  if (CONFIG.tiktok && !CONFIG.tiktok.startsWith("LINK_")) {
    tiktok.href = CONFIG.tiktok;
    tiktok.addEventListener("click", () => showToast("LINK INITIALIZED"));
  } else {
    tiktok.removeAttribute("target");
    tiktok.href = "#";
   tiktok.addEventListener("click", (e) => e.preventDefault());
  }
  if (CONFIG.zalo && !CONFIG.zalo.startsWith("LINK_")) {
    zalo.href = CONFIG.zalo;
    zalo.addEventListener("click", () => showToast("LINK INITIALIZED"));
  } else {
    zalo.removeAttribute("target");
    zalo.href = "#";
    zalo.addEventListener("click", (e) => e.preventDefault());
  }

  $("#foot-year").textContent = new Date().getFullYear();
  $("#foot-text").lastChild.textContent = ` ${CONFIG.name}`;

  const video = $("#henshin-video");
  attachSources(video, CONFIG.henshinVideo, VIDEO_EXTS);
  video.muted = CONFIG.videoMuted;
}

/* ---------- Dựng danh sách project ---------- */
function renderProjects() {
  const grid = $("#project-grid");
  const empty = $("#project-empty");
  grid.innerHTML = "";

  if (!PROJECTS.length) { empty.hidden = false; return; }

  $("#projects-count").textContent = `${PROJECTS.length} DỰ ÁN`;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.dataset.index = i;
    card.dataset.status = classifyStatus(p.status);
    card.setAttribute("aria-label", `Xem thông tin: ${p.title}`);

    const cat = classifyStatus(p.status);
    const badgeText = STATUS_LABEL[cat] || p.status || "";
    const progress = computeProgress(p);

    card.innerHTML = `
      <div class="card__media">
        ${badgeText ? `<span class="card__status card__status--${cat}">${escapeHtml(badgeText)}</span>` : ""}
        <img src="${escapeAttr(p.poster || "")}" alt="Ảnh bìa ${escapeAttr(p.title)}" loading="lazy" />
      </div>
      <div class="card__body">
        ${p.year ? `<p class="card__year">${escapeHtml(p.year)}</p>` : ""}
        <p class="card__title">${escapeHtml(p.title)}</p>
        <p class="card__desc">${escapeHtml(p.description || "")}</p>
        ${progress ? `
        <div class="card__progress" aria-hidden="true">
          <div class="card__progress-track"><div class="card__progress-bar" style="width:${progress.pct}%"></div></div>
          <span class="card__progress-label">${escapeHtml(progress.label)} · ${progress.pct}%</span>
        </div>` : ""}
      </div>`;

    guardImage(card.querySelector("img"));
    card.addEventListener("click", () => { Sound.play("click"); openModal(i); });
    grid.appendChild(card);
  });

  renderArchiveFilters();
}

/* ---------- Bộ lọc trạng thái cho Project Archive ---------- */
function renderArchiveFilters() {
  const wrap = $("#archive-filters");
  if (!wrap) return;

  const present = new Set(PROJECTS.map(p => classifyStatus(p.status)));
  // Chỉ hiện thanh lọc khi có từ 2 nhóm trạng thái khác nhau trở lên.
  if (present.size < 2) { wrap.hidden = true; wrap.innerHTML = ""; return; }

  const CATS = [["all", "ALL"], ...Object.entries(STATUS_LABEL)]
    .filter(([key]) => key === "all" || present.has(key));

  wrap.hidden = false;
  wrap.innerHTML = CATS.map(([key, label], i) =>
    `<button type="button" class="archive-filter${i === 0 ? " is-active" : ""}" data-filter="${key}">${escapeHtml(label)}</button>`
  ).join("");

  $$(".archive-filter", wrap).forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".archive-filter", wrap).forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const f = btn.dataset.filter;
      $$("#project-grid .card").forEach(card => {
        const show = f === "all" || card.dataset.status === f;
        if (show) {
          card.hidden = false;
          requestAnimationFrame(() => card.classList.remove("is-filtered-out"));
        } else {
          card.classList.add("is-filtered-out");
          setTimeout(() => { card.hidden = true; }, reduceMotion ? 0 : 220);
        }
      });
    });
  });
}

/* ---------- System Statistics ---------- */
function renderSystemStats() {
  const grid = $("#stats-grid");
  const section = $("#section-stats");
  if (!grid) return;
  if (!PROJECTS.length) { if (section) section.hidden = true; return; }
  if (section) section.hidden = false;

  const s = computeStats();
  const rows = [["PROJECTS", s.total]];
  if (s.completed)  rows.push(["COMPLETED", s.completed]);
  if (s.updating)   rows.push(["UPDATING", s.updating]);
  if (s.comingSoon) rows.push(["COMING SOON", s.comingSoon]);
  if (s.paused)     rows.push(["PAUSED", s.paused]);
  if (s.episodesKnown) rows.push(["EPISODES", s.episodesSum]);

  grid.innerHTML = rows.map(([label, value]) => `
    <div class="stats__item">
      <span class="stats__value">${escapeHtml(String(value))}</span>
      <span class="stats__label">${escapeHtml(label)}</span>
    </div>`).join("");
}

/* ---------- Bảng thông tin hệ thống ở hồ sơ (Profile readout) ---------- */
function renderHeroReadout() {
  const s = computeStats();
  const set = (id, val) => { const el = $(id); if (el) el.textContent = val; };
  set("#readout-role", (CONFIG.role || CONFIG.tagline || "").toUpperCase());
  set("#readout-location", (CONFIG.location || "").toUpperCase());
  set("#readout-projects", String(s.total));
  set("#readout-completed", String(s.completed));
  set("#readout-episodes", s.episodesKnown ? String(s.episodesSum) : "—");
}

/* ---------- System Log ---------- */
function renderSystemLog() {
  const list = $("#syslog-list");
  const empty = $("#syslog-empty");
  if (!list) return;

  if (!SYSTEM_LOG.length) {
    list.hidden = true;
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;
  list.hidden = false;
  list.innerHTML = SYSTEM_LOG.map(entry => `
    <div class="syslog__entry">
      <p class="syslog__date">${escapeHtml(entry.date || "")}</p>
      ${(entry.lines || []).map(l => `<p class="syslog__line">&gt; ${escapeHtml(l)}</p>`).join("")}
    </div>`).join("");
}

function escapeHtml(s = "") {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
const escapeAttr = escapeHtml;

/* ---------------------------------------------------------
   Phân loại trạng thái dự án (để hiện badge chuẩn hoá + lọc)
   — chỉ PHÂN LOẠI dữ liệu status đã có sẵn, không bịa thêm gì.
   Muốn nhận diện đúng, đặt status chứa 1 trong các từ khoá dưới đây.
   --------------------------------------------------------- */
const STATUS_LABEL = {
  completed:    "COMPLETED",
  updating:     "UPDATING",
  "coming-soon":"COMING SOON",
  paused:       "PAUSED"
};

function classifyStatus(status = "") {
  const s = String(status).toLowerCase();
  if (/(xong|hoàn thành|complete|done)/.test(s)) return "completed";
  if (/(dừng|hoãn|pause)/.test(s))               return "paused";
  if (/(chờ|sắp|coming|soon)/.test(s))           return "coming-soon";
  if (/(đang|updating|update)/.test(s))          return "updating";
  return "other";
}

// Lấy số tập dạng số từ p.extra["Số tập"] nếu parse được (vd "50" → 50,
// "??" thì bỏ qua). Không tự chế số nếu dữ liệu không phải là số.
function parseEpisodeCount(p) {
  const raw = p.extra && p.extra["Số tập"];
  if (raw == null) return null;
  const n = parseInt(String(raw).replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : null;
}

// % tiến độ CHỈ khi có dữ liệu thật để tính — không đoán mò:
// - Dự án COMPLETED + biết tổng số tập → 100%.
// - Dự án có khai báo rõ p.episodesDone (số tập đã ra) VÀ tổng số tập
//   parse được → tính đúng tỉ lệ.
// - Mọi trường hợp còn lại → trả về null (không hiện progress bar).
function computeProgress(p) {
  const total = parseEpisodeCount(p);
  const cat = classifyStatus(p.status);
  if (cat === "completed" && total) return { pct: 100, label: `${total}/${total} TẬP` };
  if (typeof p.episodesDone === "number" && total) {
    const pct = Math.max(0, Math.min(100, Math.round((p.episodesDone / total) * 100)));
    return { pct, label: `${p.episodesDone}/${total} TẬP` };
  }
  return null;
}

// Thống kê tổng hệ thống — chỉ tính trên dữ liệu PROJECTS có thật.
function computeStats() {
  const stats = { total: PROJECTS.length, completed: 0, updating: 0, comingSoon: 0, paused: 0, episodesSum: 0, episodesKnown: false };
  PROJECTS.forEach(p => {
    const cat = classifyStatus(p.status);
    if (cat === "completed") stats.completed++;
    else if (cat === "updating") stats.updating++;
    else if (cat === "coming-soon") stats.comingSoon++;
    else if (cat === "paused") stats.paused++;

    const ep = parseEpisodeCount(p);
    if (ep != null) { stats.episodesSum += ep; stats.episodesKnown = true; }
  });
  return stats;
}

/* ---------------------------------------------------------
   Toast "thông báo hệ thống" — dùng cho micro-interaction
   (ACCESS GRANTED, LINK INITIALIZED...) — nhẹ, không chặn thao tác.
   --------------------------------------------------------- */
let toastTimer = null;
function showToast(text) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = text;
  el.classList.remove("is-on");
  void el.offsetWidth; // ép trình duyệt tính lại style để animation chạy lại được
  el.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-on"), 1900);
}


/* ---------- Modal project ---------- */
const modal = $("#modal");
let lastFocused = null;

function openModal(index) {
  const p = PROJECTS[index];
  if (!p) return;
  lastFocused = document.activeElement;

  const poster = $("#modal-poster");
  poster.src = p.poster || PLACEHOLDER;
  poster.alt = `Ảnh bìa ${p.title}`;
  guardImage(poster);

  $("#modal-title").textContent = p.title;
  $("#modal-desc").textContent  = p.description || "";

  const meta = $("#modal-meta");
  meta.innerHTML = "";
  const rows = {};
  if (p.year)   rows["Năm"] = p.year;
  if (p.status) rows["Trạng thái"] = p.status;
  Object.assign(rows, p.extra || {});
  Object.entries(rows).forEach(([k, v]) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${escapeHtml(k)}</b> · ${escapeHtml(v)}`;
    meta.appendChild(li);
  });

  const link = $("#modal-link");
  const valid = p.link && !p.link.startsWith("LINK_");
  link.classList.toggle("is-disabled", !valid);
  if (valid) {
    link.href = p.link;
    link.textContent = "TRUY CẬP";
    link.removeAttribute("aria-disabled");
  } else {
    link.href = "#";
    link.textContent = "CHƯA CÓ LINK";
    link.setAttribute("aria-disabled", "true");
  }

  modal.hidden = false;
  document.body.classList.add("is-locked");
  showToast("DATABASE OPENED");
  requestAnimationFrame(() => $(".modal__close").focus());
}

function closeModal() {
  if (modal.hidden) return;
  modal.classList.add("is-closing");
  const done = () => {
    modal.classList.remove("is-closing");
    modal.hidden = true;
    if (screens.bio.classList.contains("is-active")) document.body.classList.remove("is-locked");
    if (lastFocused) lastFocused.focus();
  };
  reduceMotion ? done() : setTimeout(done, 200);
}

$$("[data-close]", modal).forEach(el => el.addEventListener("click", closeModal));

/* ---------- "Âm kết thúc" (amkt): mở phim / rời trang ---------- */
// (1) Bấm nút "TRUY CẬP" để mở phim → phát amkt. Vì link mở tab mới
// (target="_blank"), tab hiện tại vẫn còn nên tiếng phát được trọn vẹn.
$("#modal-link").addEventListener("click", (e) => {
  if ($("#modal-link").classList.contains("is-disabled")) return;
  Sound.play("amkt");
  showToast("LINK INITIALIZED");
});

// (2) Người xem rời/tắt trang → cố phát amkt.
// Lưu ý về giới hạn của trình duyệt: nếu họ ĐÓNG HẲN tab, trang bị huỷ
// gần như ngay lập tức nên tiếng có thể không kịp phát (đây là giới hạn
// của trình duyệt, không phải lỗi code). Nếu họ chỉ CHUYỂN TAB/ứng dụng
// khác (trang vẫn còn mở nền), amkt sẽ phát được trọn vẹn — nên bắt cả
// hai sự kiện để tăng khả năng người xem nghe được tiếng.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) Sound.play("amkt");
});
window.addEventListener("pagehide", () => { Sound.play("amkt"); });

/* ---------- Lightbox QR ---------- */
const lightbox = $("#lightbox");

$$(".qr-trigger").forEach(btn => btn.addEventListener("click", () => {
  lastFocused = document.activeElement;
  $("#lightbox-img").src = CONFIG.qr;
  lightbox.hidden = false;
  requestAnimationFrame(() => $(".lightbox__close").focus());
}));

function closeLightbox() {
  lightbox.hidden = true;
  if (lastFocused) lastFocused.focus();
}
$$("[data-close]", lightbox).forEach(el => el.addEventListener("click", closeLightbox));

/* ---------- Phím tắt ---------- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!lightbox.hidden) closeLightbox();
    else if (!modal.hidden) closeModal();
  }
  // giữ tiêu điểm trong modal khi Tab
  if (e.key === "Tab" && !modal.hidden) trapFocus(e, $(".modal__panel"));
  if (e.key === "Tab" && !lightbox.hidden) trapFocus(e, $(".lightbox__inner"));
});

function trapFocus(e, box) {
  const items = $$('a[href], button, [tabindex]:not([tabindex="-1"])', box)
    .filter(el => !el.hasAttribute("disabled") && el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ---------- "Âm bắt đầu" (ambd): màn khởi động (đồng hồ + nút Bắt đầu) ---------- */
// Nút "BẮT ĐẦU" ở màn khởi động chính là thao tác chạm ĐẦU TIÊN có chủ đích
// của người xem trên trang — nơi lý tưởng nhất để mở khoá âm thanh và phát
// ambd (giọng "robot" chào/khởi động), vì nó nằm ngay trong sự kiện click
// thật của người dùng nên không trình duyệt/webview nào chặn được.
let ambdFired = false;
function fireAmbdOnce() {
  if (ambdFired) return;
  ambdFired = true;
  Sound.unlockAll();          // mở khoá luôn bgm/amkt/video cho các lần phát sau
  Sound.playAmbdThenBgm();    // ambd phát xong mới tới nhạc nền
}

/* ---------- Đồng hồ điện tử ở màn khởi động ---------- */
function startBootClock() {
  const timeEl = $("#boot-time");
  const dateEl = $("#boot-date");
  if (!timeEl || !dateEl) return;
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const now = new Date();
    timeEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    dateEl.textContent = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Nút BẮT ĐẦU ở màn khởi động ---------- */
const btnBoot = $("#btn-boot");
btnBoot.addEventListener("click", () => {
  if (btnBoot.disabled) return;
  btnBoot.disabled = true;
  btnBoot.classList.add("is-fired");

  fireAmbdOnce();   // bắt đầu phát ambd — cứ để nó nói, không cần chờ
  showToast("SYSTEM ONLINE");
  markVisited();    // lần sau vào lại web sẽ bỏ qua hiệu ứng gõ chữ ở màn khởi động

  // Chuyển giao diện NGAY LẬP TỨC, không đợi ambd nói xong.
  showScreen("intro");
  runIntroTypewriter();
});


const btnHenshin = $("#btn-henshin");
const fx = $("#henshin-fx");
let firing = false;

btnHenshin.addEventListener("click", () => {
  if (firing) return;
  firing = true;

  // Phòng trường hợp cú bấm này là thao tác chạm ĐẦU TIÊN của người xem
  // trên cả trang (chưa lướt/chạm gì trước đó) — vẫn phải khởi động
  // ambd → bgm ở đây luôn. Có flag "ambdFired" bên dưới nên gọi lại
  // không bị lặp/chạy 2 lần.
  fireAmbdOnce();

  Sound.play("henshin");
  showToast("ACCESS GRANTED");
  btnHenshin.classList.add("is-fired");
  btnHenshin.disabled = true;

  if (reduceMotion) { afterTransition(); return; }

  fx.classList.add("is-on");
  document.body.classList.add("is-shaking");

  setTimeout(() => {
    afterTransition();
    setTimeout(() => {
      fx.classList.remove("is-on");
      document.body.classList.remove("is-shaking");
      // reset animation cho lần sau
      fx.querySelectorAll("span").forEach(n => {
        n.style.animation = "none"; void n.offsetWidth; n.style.animation = "";
      });
    }, 500);
  }, 950);
});

function afterTransition() {
  if (CONFIG.skipVideo) { goBio(); return; }
  playHenshinVideo();
}

/* ---------- Video ---------- */
const video = $("#henshin-video");
const btnSkip = $("#btn-skip");
let videoTimer = null;

function playHenshinVideo() {
  showScreen("video");
  video.muted = CONFIG.videoMuted;
  video.currentTime = 0;

  const attempt = video.play();
  if (attempt && attempt.catch) {
    attempt.catch(() => {
      // trình duyệt chặn tiếng → thử lại ở chế độ im lặng
      video.muted = true;
      video.play().catch(() => goBio());
    });
  }
  // phòng trường hợp video lỗi / chưa có file
  videoTimer = setTimeout(() => { if (video.readyState === 0) goBio(); }, 4000);
}

video.addEventListener("ended", goBio);
video.addEventListener("error", goBio);
btnSkip.addEventListener("click", () => { Sound.play("click"); goBio(); });

function goBio() {
  clearTimeout(videoTimer);
  try { video.pause(); } catch (e) {}
  firing = false;
  btnHenshin.disabled = false;
  btnHenshin.classList.remove("is-fired");

  if (!screens.bio.hidden) return;
  screens.video.classList.add("is-leaving");
  const go = () => {
    screens.video.classList.remove("is-leaving");
    showScreen("bio");
    showToast("SYSTEM ONLINE");
    if (Sound.bgm.paused && CONFIG.bgmAutoStart) Sound.startBgm();
    else if (!Sound.bgm.paused) setBgmState("on");
  };
  reduceMotion ? go() : setTimeout(go, 320);
}

/* ---------- Xem lại henshin ---------- */
$("#btn-replay").addEventListener("click", () => {
  Sound.play("click");
  showToast("SYSTEM READY");
  showScreen("intro");
});

/* ---------- Particle nền ---------- */
function initParticles() {
  if (reduceMotion) return;
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d", { alpha: true });
  let w, h, dots = [], raf = null;

  const isSmallScreen = window.innerWidth <= 480;
  const isLowEnd = (navigator.hardwareConcurrency || 4) <= 2;
  const isTouch = window.matchMedia("(pointer:coarse)").matches;
  const cap = (isSmallScreen || isLowEnd || isTouch) ? 30 : 70;
  const count = () => Math.min(cap, Math.round(window.innerWidth / 16));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
  }

  function build() {
    const n = count();
    dots = Array.from({ length: n }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + .4,
      s: Math.random() * .45 + .12,
      a: Math.random() * .5 + .2,
      c: Math.random() > .68 ? "53,230,255" : "255,47,69"
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const d of dots) {
      d.y -= d.s;
      if (d.y < -8) { d.y = window.innerHeight + 8; d.x = Math.random() * window.innerWidth; }
      ctx.beginPath();
      ctx.fillStyle = `rgba(${d.c},${d.a})`;
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }

  resize();
  frame();
  window.addEventListener("resize", debounce(resize, 200));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(frame);
  });

  // Tạm dừng vẽ hạt trong lúc đang cuộn trang (chỉ trên thiết bị cảm ứng,
  // nơi mỗi khung hình đều quý) — vẽ lại ngay khi người dùng dừng cuộn
  // ~120ms, gần như không nhận ra bằng mắt nhưng cuộn mượt hơn rõ rệt.
  if (isTouch) {
    let scrollResume = null;
    window.addEventListener("scroll", () => {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      clearTimeout(scrollResume);
      scrollResume = setTimeout(() => {
        if (!document.hidden) raf = requestAnimationFrame(frame);
      }, 120);
    }, { passive: true });
  }
}

function debounce(fn, ms) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/* ---------- Hiệu ứng gõ chữ (typewriter) cho màn mở đầu ---------- */
function typeText(el, text, speedMs = 32) {
  return new Promise((resolve) => {
    el.textContent = "";
    if (!text) { resolve(); return; }

    if (reduceMotion) { el.textContent = text; resolve(); return; }

    const chars = Array.from(text);
    let i = 0;
    el.classList.add("is-typing");

    (function step() {
      el.textContent = chars.slice(0, i + 1).join("");
      i++;
      if (i < chars.length) {
        // tốc độ hơi ngẫu nhiên để trông tự nhiên, không đều đều máy móc
        const jitter = speedMs * 0.4 * (Math.random() - 0.5);
        setTimeout(step, Math.max(14, speedMs + jitter));
      } else {
        el.classList.remove("is-typing");
        resolve();
      }
    })();
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runIntroTypewriter() {
  const elSystem = $("#intro-system");
  const elHello  = $("#intro-hello");
  const elSub    = $("#intro-sub");

  await typeText(elSystem, CONFIG.systemLabel, 30);
  await wait(180);
  await typeText(elHello, CONFIG.helloTitle, 38);
  await wait(140);
  await typeText(elSub, CONFIG.helloSub, 26);
}

/* ---------------------------------------------------------
   HUD trang trí ở màn "Lời mở đầu" — dòng chữ trạng thái chạy
   --------------------------------------------------------- */
const INTRO_TICKER_LINES = [
  "ĐANG KHỞI TẠO KẾT NỐI...",
  "XÁC THỰC HỆ THỐNG...",
  "TẢI DỮ LIỆU HỒ SƠ...",
  "KẾT NỐI ỔN ĐỊNH",
  "SẴN SÀNG KHỞI ĐỘNG"
];
function initIntroHud() {
  const el = $("#intro-ticker");
  if (!el) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % INTRO_TICKER_LINES.length;
    el.classList.add("is-fading");
    setTimeout(() => {
      el.textContent = INTRO_TICKER_LINES[i];
      el.classList.remove("is-fading");
    }, reduceMotion ? 0 : 260);
  }, 2400);

  // Mã hex chạy ở khối HUD bên phải (chỉ hiện trên màn hình rộng, nhưng
  // cứ cập nhật ngầm, không tốn kém gì).
  const code = $("#side-hud-code");
  if (code) {
    const rand = () => Math.floor(Math.random() * 0xffffffff).toString(16).toUpperCase().padStart(8, "0");
    code.textContent = rand();
    setInterval(() => { code.textContent = rand(); }, reduceMotion ? 2000 : 900);
  }
}

/* ---------------------------------------------------------
   BOOT SEQUENCE — dòng chữ terminal + thanh progress ở màn khởi động
   --------------------------------------------------------- */
const BOOT_LINES = [
  "SYSTEM INITIALIZING...",
  "BOOTING CORE...",
  "LOADING DATABASE...",
  "CONNECTING PROJECT ARCHIVE...",
  "VERIFYING MEDIA...",
  "SYSTEM ONLINE"
];

// Người đã từng vào web (đã bấm BẮT ĐẦU ít nhất 1 lần) → lần sau vào lại
// bỏ qua hiệu ứng gõ chữ, hiện ngay cho nhanh (đỡ chờ, nhất là trên mobile).
const RETURNING_KEY = "henshinbio_visited";
function hasVisitedBefore() {
  try { return localStorage.getItem(RETURNING_KEY) === "1"; } catch (e) { return false; }
}
function markVisited() {
  try { localStorage.setItem(RETURNING_KEY, "1"); } catch (e) {}
}

function runBootSequence() {
  const term = $("#boot-terminal");
  const bar = $("#boot-progress-bar");
  const percentEl = $("#boot-percent");
  const skipBtn = $("#boot-skip");
  if (!term || !bar || !percentEl) return;

  term.innerHTML = "";
  let done = false;

  function finishInstantly() {
    if (done) return;
    done = true;
    term.innerHTML = BOOT_LINES.map(l => `<p class="boot__line">&gt; ${escapeHtml(l)}</p>`).join("");
    bar.style.width = "100%";
    percentEl.textContent = "100%";
    if (skipBtn) skipBtn.hidden = true;
  }

  if (skipBtn) {
    skipBtn.hidden = false;
    skipBtn.addEventListener("click", finishInstantly, { once: true });
  }

  if (reduceMotion || hasVisitedBefore()) { finishInstantly(); return; }

  let i = 0;
  (function step() {
    if (done) return;
    if (i >= BOOT_LINES.length) { done = true; if (skipBtn) skipBtn.hidden = true; return; }
    const p = document.createElement("p");
    p.className = "boot__line";
    p.textContent = `> ${BOOT_LINES[i]}`;
    term.appendChild(p);
    i++;
    const pct = Math.round((i / BOOT_LINES.length) * 100);
    bar.style.width = pct + "%";
    percentEl.textContent = pct + "%";
    setTimeout(step, 260 + Math.random() * 140);
  })();
}

/* ---------------------------------------------------------
   HUD NAV — thanh điều hướng dính (sticky) trong trang Bio
   --------------------------------------------------------- */
function initHudNav() {
  const nav = $("#hud-nav");
  if (!nav) return;
  const links = $$(".hud-nav__link", nav);

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  const sections = links.map(l => document.getElementById(l.dataset.target)).filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("is-active", l.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  sections.forEach(s => io.observe(s));
}

/* ---------------------------------------------------------
   EASTER EGG nhẹ — chạm avatar 5 lần liên tiếp
   --------------------------------------------------------- */
/* ---------------------------------------------------------
   Tạm dừng animation trang trí khi cuộn ra khỏi khung nhìn — đỡ tốn
   pin/CPU vô ích trong lúc cuộn trang dài (đặc biệt trên điện thoại).
   --------------------------------------------------------- */
function initOffscreenPause() {
  if (!("IntersectionObserver" in window)) return;
  const targets = $$(".avatar, .hero__name, .intro__hud, .side-hud");
  if (!targets.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
    });
  }, { rootMargin: "80px" });
  targets.forEach(t => io.observe(t));
}

function initEasterEgg() {
  const avatar = $(".avatar");
  if (!avatar) return;
  let taps = 0, timer = null;

  const trigger = () => {
    taps++;
    clearTimeout(timer);
    timer = setTimeout(() => { taps = 0; }, 2200);
    if (taps >= 5) {
      taps = 0;
      document.body.classList.add("is-glitching");
      showToast("ACCESS DENIED — NICE TRY, OPERATOR");
      setTimeout(() => document.body.classList.remove("is-glitching"), 600);
    }
  };

  avatar.addEventListener("click", trigger);
  avatar.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); trigger(); }
  });
}


applyConfig();
renderProjects();
renderSystemStats();
renderSystemLog();
Sound.init();
initParticles();
startBootClock();
runBootSequence();
initHudNav();
initEasterEgg();
initIntroHud();
initOffscreenPause();
showScreen("boot");

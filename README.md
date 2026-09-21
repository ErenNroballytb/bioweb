# HENSHIN BIO — hướng dẫn

## 1. Cấu trúc thư mục

```
/
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── images/
    │   ├── avatar.png        ← ảnh đại diện (vuông, 400x400 trở lên)
    │   ├── background.jpg    ← nền toàn trang (1920x1080)
    │   ├── banner.jpg        ← banner đầu trang Bio (1600x700)
    │   ├── favicon.png       ← icon tab trình duyệt (64x64)
    │   ├── project-01.jpg    ← poster/thumbnail phim (16:9 đẹp nhất)
    │   ├── project-02.jpg
    │   └── ...
    │
    ├── videos/
    │   └── henshin.mp4       ← video henshin (xem bảng đuôi file được chấp nhận bên dưới)
    │
    ├── qr/
    │   └── qr-stk.png        ← mã QR chuyển khoản của bạn
    │
    └── audio/
        ├── bgm.mp3           ← NHẠC NỀN (phát ở trang Bio, lặp lại)
        ├── henshin.mp3       ← tiếng khi bấm nút HENSHIN
        ├── click.mp3         ← tiếng bấm nút
        ├── ambd.mp3          ← ÂM BẮT ĐẦU: phát ngay khi bấm HENSHIN, TRƯỚC nhạc nền
        └── amkt.mp3          ← ÂM KẾT THÚC: phát khi mở phim (TRUY CẬP) hoặc rời trang
```

**Ảnh** (avatar, background, banner, poster, QR): tên file phải **đúng y hệt**
như trên, đúng cả đuôi (phân biệt hoa/thường) — hoặc đổi đường dẫn tương ứng
trong `CONFIG` ở `script.js`.

**Nhạc nền, SFX henshin, SFX click, video henshin**: không cần convert nữa —
chỉ cần đặt đúng **tên gốc**, đuôi thì chọn 1 trong các đuôi được hỗ trợ dưới
đây, web tự nhận:

| Asset | Tên gốc | Đuôi chấp nhận (theo thứ tự ưu tiên) |
|---|---|---|
| Nhạc nền | `bgm` | `.mp3` → `.ogg` → `.wav` → `.m4a` → `.aac` |
| SFX henshin | `henshin` | `.mp3` → `.ogg` → `.wav` → `.m4a` → `.aac` |
| SFX click | `click` | `.mp3` → `.ogg` → `.wav` → `.m4a` → `.aac` |
| Âm bắt đầu (ambd) | `ambd` | `.mp3` → `.ogg` → `.wav` → `.m4a` → `.aac` |
| Âm kết thúc (amkt) | `amkt` | `.mp3` → `.ogg` → `.wav` → `.m4a` → `.aac` |
| Video henshin | `henshin` (trong `assets/videos/`) | `.mp4` → `.webm` → `.mov` → `.ogv` |

Ví dụ: bạn có sẵn `bgm.wav` thì chỉ cần bỏ đúng file đó vào `assets/audio/`,
không cần đổi tên hay convert sang mp3. Nếu vô tình có cả `bgm.mp3` và
`bgm.wav`, web sẽ ưu tiên dùng `.mp3` trước theo đúng thứ tự trong bảng.

Thiếu file nào cũng không làm vỡ web: ảnh thiếu sẽ thành ô xám, video thiếu
sẽ tự nhảy thẳng vào trang Bio, thiếu nhạc thì chỉ là không có tiếng.

> Lưu ý: `.mov` chỉ chắc chắn chạy trên Safari, các trình duyệt khác có thể
> không phát được tuỳ codec — nếu có thể, vẫn nên ưu tiên `.mp4`.

## 2. Chỗ cần sửa

Mở `script.js`, chỉ sửa 2 khối đầu file:

- `CONFIG` — tên, giới thiệu, link Zalo, đường dẫn ảnh/video/nhạc, âm lượng.
- `PROJECTS` — danh sách phim. Thêm phim mới = thêm một object:

```javascript
{
  title:       "Tên phim",
  poster:      "assets/images/project-03.jpg",
  description: "Mô tả ngắn",
  year:        "2026",
  status:      "Completed",
  link:        "https://link-phim",
  extra: { "Thể loại": "Tokusatsu", "Số tập": "49" }   // tuỳ chọn
}
```

`extra` là tuỳ chọn — thêm bao nhiêu dòng thông tin cũng được, chúng sẽ hiện
trong modal.

Sửa tiêu đề/mô tả SEO thì vào phần đầu `index.html` (thẻ `<title>`, meta
description, Open Graph).

## 3. Một vài công tắc trong CONFIG

- `bgmAutoStart: false` → không tự bật nhạc nền, người xem tự bấm nút góc phải.
- `videoMuted: false` → video henshin có tiếng (nếu trình duyệt chặn, code tự
  chuyển sang im lặng chứ không đứng hình).
- `skipVideo: true` → bỏ hẳn bước video, bấm HENSHIN là vào thẳng Bio.

## 4. Đưa lên GitHub Pages

1. Tạo repo mới trên GitHub.
2. Upload toàn bộ file và thư mục `assets` (giữ nguyên cấu trúc).
3. Vào **Settings → Pages → Source: Deploy from a branch → main / (root)**.
4. Chờ 1–2 phút, truy cập `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

Toàn bộ đường dẫn trong code là đường dẫn tương đối nên chạy được ở cả
repo con lẫn domain riêng.

## 5. Lưu ý về nhạc

Trình duyệt chặn phát nhạc trước khi người dùng chạm vào trang, nên nhạc nền
bắt đầu ngay khi bấm HENSHIN. Nếu vẫn bị chặn, nút "Nhạc nền" ở góc trên bên
phải sẽ hiện ở trạng thái tắt để người xem tự bật.

Chỉ dùng nhạc bạn có quyền sử dụng (tự làm, nhạc miễn phí bản quyền, hoặc
được cấp phép).

## 6. "Âm bắt đầu" (ambd) và "âm kết thúc" (amkt)

- **ambd** (`assets/audio/ambd.mp3`): phát ngay khi người xem **chạm/thao
  tác đầu tiên** trên trang — không nhất thiết phải bấm HENSHIN, chạm vào
  QR, cuộn trang, gõ phím... đều tính. Phát xong hết ambd mới tới lượt
  nhạc nền (bgm) tự bật.
  > Mọi trình duyệt (kể cả webview TikTok/Zalo, Safari, Chrome) đều **chặn
  > tự phát âm thanh trước khi có bất kỳ thao tác nào từ người xem** — đây
  > là quy định bảo mật của trình duyệt, không phải lỗi code, và không có
  > cách nào lách được 100%. Vì vậy "vừa vào web là nói luôn" chỉ có thể
  > làm gần đúng nhất bằng cách bắt thao tác chạm đầu tiên của họ (thường
  > diễn ra gần như ngay khi trang hiện ra), chứ không thể phát tự động
  > tuyệt đối trước khi họ chạm gì cả.
- **amkt** (`assets/audio/amkt.mp3`): phát trong 2 trường hợp — (1) bấm nút
  "TRUY CẬP" trong khung phim để mở link xem phim, (2) người xem rời hoặc
  tắt trang.
  > Lưu ý giới hạn của trình duyệt: nếu người xem **đóng hẳn tab**, trang bị
  > huỷ gần như ngay lập tức nên đôi khi tiếng chưa kịp phát hết — đây cũng
  > là giới hạn chung của mọi trình duyệt/webview, không phải lỗi của web.
  > Nếu họ chỉ **chuyển sang tab/app khác** (không đóng hẳn), tiếng amkt sẽ
  > phát được trọn vẹn.

## 7. Vì sao trước đây hiệu ứng/âm thanh "im re" trên điện thoại?

Video henshin và nhạc nền được phát **trễ** một chút sau khi bấm nút (đợi
hiệu ứng chuyển cảnh chạy xong). Trên nhiều trình duyệt di động — đặc biệt
webview trong app TikTok/Zalo/Messenger và Safari trên iPhone — lệnh phát
media chỉ được phép nếu gọi **ngay trong** thao tác chạm, gọi trễ hơn (dù
chỉ vài trăm mili-giây) có thể bị chặn im lặng, không báo lỗi gì cả.

Bản cập nhật này đã "mở khoá" nhạc nền, amkt và video ngay trong cú bấm nút
HENSHIN (phát thử ở chế độ câm rồi dừng lại tức khắc), để các lệnh phát sau
đó không bị chặn nữa. Nếu bạn vẫn gặp trường hợp im tiếng ở một trình duyệt
cụ thể, hãy cho biết bạn test bằng máy/app nào (ví dụ: mở link trong app
TikTok trên iPhone) để mình kiểm tra thêm.

## 8. Màn khởi động (đồng hồ điện tử + nút "BẮT ĐẦU")

Trang giờ có thêm 1 màn hiện ra đầu tiên, trước cả màn "Lời mở đầu": một
khung kiểu công nghệ với đồng hồ điện tử chạy theo giờ thật của máy người
xem, và nút "BẮT ĐẦU".

- Bấm "BẮT ĐẦU" chính là thao tác chạm đầu tiên, có chủ đích, của người
  xem trên trang — đây là chỗ tốt nhất để phát **ambd** (giọng "robot" nói
  gì đó, ví dụ: "Hệ thống khởi động hoàn tất. Xin chào, chào mừng bạn đến
  với hồ sơ của tôi."), vì nó nằm ngay trong sự kiện bấm nút thật nên
  không trình duyệt/webview nào chặn tiếng được (khác với việc cố phát tự
  động ngay khi trang vừa mở, điều mà không trình duyệt nào cho phép).
- Giao diện chuyển sang màn "Lời mở đầu" **ngay lập tức** khi bấm nút,
  không đợi ambd nói xong — ambd cứ tiếp tục phát ở nền trong lúc người
  xem đã đọc sang màn kế tiếp. Nhạc nền `bgm` vẫn đợi ambd nói xong mới
  tự bật (để 2 tiếng không đè lên nhau).
- Muốn đổi câu chữ trên màn này (nhãn "HỆ THỐNG", gợi ý "ẤN ĐỂ KHỞI ĐỘNG HỆ
  THỐNG") thì sửa trực tiếp trong `index.html`, đoạn `<!-- MÀN 0: KHỞI
  ĐỘNG -->`.
- Đồng hồ chỉ mang tính trang trí (không đồng bộ máy chủ), lấy giờ ngay
  trên máy/điện thoại của người xem.

## 9. Nâng cấp "FUTURISTIC TOKUSATSU SYSTEM HUD" (bản lớn)

Đã nâng cấp trực tiếp trên project hiện có — giữ nguyên toàn bộ nội dung,
hình ảnh, video, audio, link hiện tại. Những gì đã thêm/đổi:

- **Boot sequence**: màn khởi động giờ có thêm dòng chữ kiểu terminal
  (SYSTEM INITIALIZING... → SYSTEM ONLINE) + thanh progress %, cùng nút
  **SKIP** để bỏ qua hiệu ứng gõ chữ. Người đã từng bấm "BẮT ĐẦU" 1 lần
  (lưu bằng `localStorage`) thì lần sau vào lại sẽ hiện ngay, không phải
  chờ. Đồng hồ điện tử + nút BẮT ĐẦU + ambd giữ nguyên logic cũ.
- **HUD nav**: thanh điều hướng dính (sticky) trong trang Bio với 4 mục
  PROFILE / ARCHIVE / SYSTEM LOG / SUPPORT, tự cuộn mượt và tự sáng mục
  đang xem.
- **Hồ sơ (Profile)**: thêm bảng thông tin hệ thống STATUS / ROLE / SYSTEM
  / LOCATION / PROJECTS / EPISODES / COMPLETED ngay dưới nút Zalo/TikTok —
  các con số PROJECTS/EPISODES/COMPLETED tự tính từ dữ liệu PROJECTS thật,
  không bịa. Sửa `CONFIG.role` / `CONFIG.location` để đổi 2 dòng còn lại.
- **System Statistics**: section riêng tổng hợp số liệu (chỉ hiện các dòng
  có dữ liệu thật — ví dụ không có dự án PAUSED thì không hiện dòng đó).
- **Project Archive**: đổi tên từ "Phim / Dự án", thêm badge trạng thái
  chuẩn hoá (COMPLETED/UPDATING/COMING SOON/PAUSED — suy ra từ chữ trong
  `status` bạn đặt, xem hàm `classifyStatus()` trong script.js nếu muốn
  chỉnh từ khoá nhận diện), thêm progress bar **chỉ khi tính được thật**
  (dự án COMPLETED + biết tổng số tập, hoặc bạn khai báo thêm
  `episodesDone` trong object project), và bộ lọc ALL/COMPLETED/... tự
  hiện khi có từ 2 nhóm trạng thái trở lên.
- **System Log**: section mới, đọc từ mảng `SYSTEM_LOG` trong script.js.
  Để trống mặc định (không tự bịa lịch sử) — bạn tự thêm log khi cần,
  cấu trúc mẫu có sẵn ngay phía trên mảng.
- **Support System**: thêm 1 điểm quét QR nữa ngay trong trang Bio (dùng
  chung ảnh QR với màn Lời mở đầu, không tạo file mới).
- **Toast hệ thống**: các thông báo nhỏ kiểu "ACCESS GRANTED",
  "DATABASE OPENED", "LINK INITIALIZED", "SYSTEM ONLINE", "SYSTEM READY"
  hiện ở dưới màn hình khi bấm HENSHIN, mở dự án, bấm link, v.v.
- **Audio mini controller**: nút nhạc nền giờ có icon ►/❚❚ và chữ trạng
  thái AUDIO ONLINE / AUDIO PAUSED / AUDIO WAITING (khi bị trình duyệt
  chặn autoplay).
- **Easter egg**: chạm vào avatar 5 lần liên tiếp → hiệu ứng glitch nhẹ +
  toast "ACCESS DENIED — NICE TRY, OPERATOR".
- **SEO**: bổ sung twitter:title/description/image, JSON-LD (Person), để
  sẵn dòng canonical (comment) — điền domain thật vào khi có.
- **Hiệu năng/di động**: giảm số lượng particle nền trên màn hình nhỏ
  hoặc máy cấu hình yếu; mọi animation mới đều tôn trọng
  `prefers-reduced-motion` (đã có sẵn media query tắt animation toàn site).

### Vài điểm đã đơn giản hoá có chủ đích (để không phá vỡ site hiện tại)
- "Profile" và "Profile Card" trong bản đặc tả được gộp làm 1 (hero hiện
  tại), không tách thành 2 khối riêng để tránh trùng lặp nội dung.
- Thanh VOL kiểu "███████░░" chưa làm vì hiện chưa có control chỉnh âm
  lượng thực sự (chỉ có bật/tắt) — có thể làm thêm nếu bạn cần.
- Nút SKIP ở boot chỉ bỏ qua hiệu ứng gõ chữ, không tự động "vào thẳng
  hệ thống" thay cho nút BẮT ĐẦU (giữ nguyên yêu cầu bắt buộc phải có 1
  thao tác chạm chủ động để mở khoá âm thanh).
- Bộ lọc trạng thái ẩn khi tất cả dự án cùng 1 trạng thái (đúng theo yêu
  cầu "nếu số lượng project đủ nhiều mới thêm filter").

## 10. Sửa lỗi giao diện + viền sáng 7 màu

- **Vòng năng lượng ở màn "Lời mở đầu" bị mất tích**: do lỗi xếp lớp
  (z-index) khiến nó bị rớt xuống dưới lớp nền toàn trang. Đã sửa — giờ
  vòng xoay hiện rõ và to/rõ hơn một chút phía sau chữ.
- **Logo/avatar bị thanh nav che ở trang Bio**: xảy ra khi ảnh `banner`
  bị thiếu/lỗi — lúc đó avatar bị kéo lên quá cao. Đã sửa để avatar có
  khoảng cách hợp lý kể cả khi chưa có ảnh banner. (Bạn vẫn nên thêm ảnh
  `assets/images/banner.jpg` cho đẹp hoàn chỉnh.)
- **Viền sáng chạy 7 màu (rainbow)**: đã thêm cho cả avatar (đổi từ viền
  chấm gạch tĩnh sang viền màu chạy xoay liên tục) và tên hiển thị
  (khung viền màu chạy quanh chữ tên). Muốn đổi tông màu thì sửa dãy màu
  trong `conic-gradient(...)` ở 2 chỗ `.avatar__ring` và
  `.hero__name::before` trong style.css (đang dùng cùng 1 dãy 7 màu để
  đồng bộ).

## 11. Sửa giật/lag khi cuộn trên điện thoại

Nguyên nhân chính và cách đã sửa:

- **`background-attachment:fixed` thừa**: phần tử nền đã `position:fixed`
  sẵn nên thuộc tính này không thêm hiệu ứng gì, chỉ tốn tài nguyên —
  đã bỏ.
- **Nav dính (sticky) làm mờ nền liên tục lúc cuộn**: `backdrop-filter`
  (blur) là 1 trong những hiệu ứng nặng nhất cho GPU điện thoại, đặc biệt
  khi đặt trên phần tử sticky phải tính lại mỗi khung hình khi cuộn. Đã
  tắt hẳn trên thiết bị cảm ứng (thay bằng nền đặc hơn 1 chút để bù thị
  giác), giữ nguyên hiệu ứng đẹp trên desktop.
- **Hiệu ứng hạt (particles) chạy nền liên tục**: giờ tự tạm dừng ngay khi
  người dùng bắt đầu cuộn trên điện thoại, vẽ lại ngay khi dừng cuộn
  (~0.12s) — gần như không nhận ra bằng mắt nhưng đỡ tốn CPU đúng lúc cần
  mượt nhất. Số lượng hạt tối đa trên thiết bị cảm ứng cũng giảm thêm.
- **Viền cầu vồng, lõi năng lượng, HUD 2 bên**: giờ tự tạm dừng khi bị
  cuộn ra khỏi màn hình, chạy lại khi cuộn tới — đỡ phí tài nguyên chạy
  ngầm vô ích.
- **`content-visibility: auto`** cho các section dài (System Statistics,
  Project Archive, System Log, Support) trên thiết bị cảm ứng — trình
  duyệt (Chrome/Android) sẽ tạm bỏ qua việc tính toán layout/vẽ cho phần
  chưa cuộn tới, giảm tải đáng kể cho trang dài. Safari (iPhone) chưa hỗ
  trợ thuộc tính này thì tự động bỏ qua, không ảnh hưởng gì thêm.

Những thay đổi này chỉ tác động trên thiết bị cảm ứng (điện thoại/tablet)
qua `@media (pointer:coarse)` — trên máy tính (chuột) mọi hiệu ứng vẫn
giữ nguyên như cũ.

## 12. Hiệu ứng HENSHIN giờ luôn chạy đầy đủ trên mọi máy

Trước đây hiệu ứng chuyển cảnh HENSHIN (chớp sáng, thanh quét, chữ giật,
rung màn hình) sẽ tự rút ngắn gần như tức thời nếu máy tính/điện thoại
bật cài đặt "giảm chuyển động" (Windows: Accessibility → Visual effects
→ Animation effects) — đây vốn là hành vi tôn trọng accessibility mặc
định của trình duyệt. Theo yêu cầu, giờ hiệu ứng này được cho chạy đầy đủ
đúng như thiết kế gốc trên MỌI máy, không phụ thuộc cài đặt đó nữa.

Những hiệu ứng khác ít quan trọng hơn (tốc độ gõ chữ ở màn mở đầu, cuộn
trang mượt/nhanh, hiệu ứng lọc dự án...) vẫn tôn trọng cài đặt máy như
cũ để không ảnh hưởng người dùng nhạy cảm với chuyển động.

## 13. Bỏ hẳn việc tự rút gọn hiệu ứng theo cài đặt máy

Theo yêu cầu, đã bỏ toàn bộ cơ chế tôn trọng "giảm chuyển động"
(prefers-reduced-motion) trên trang. Từ giờ MỌI hiệu ứng — particles nền,
viền cầu vồng, vòng ping nút BẮT ĐẦU, hiệu ứng chuyển cảnh HENSHIN, gõ
chữ, cuộn mượt... — chạy giống hệt nhau, đầy đủ trên mọi máy, bất kể máy
đó có bật cài đặt "giảm chuyển động"/"reduce motion" ở hệ điều hành hay
không.

Lưu ý: đây là đánh đổi có chủ đích theo yêu cầu — cài đặt đó vốn giúp
người dùng nhạy cảm với chuyển động/nhấp nháy (dễ chóng mặt, đau đầu...)
xem web thoải mái hơn. Nếu sau này muốn bật lại tôn trọng cài đặt đó
(ví dụ khi công khai chia sẻ rộng cho nhiều người xem), chỉ cần đổi dòng
`const reduceMotion = false;` trong script.js trở lại thành
`const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;`
là khôi phục nguyên trạng.

## 14. Để mọi người tự thấy bản mới, không cần bấm Ctrl+Shift+R

Trình duyệt hay lưu tạm (cache) file `style.css` và `script.js` để lần
sau vào web nhanh hơn — nên đôi khi sau khi bạn update, người khác vào
lại vẫn thấy giao diện/hiệu ứng cũ vì trình duyệt của họ chưa chịu tải
file mới.

Đã sửa để **tự động hoàn toàn**, không cần bạn làm gì thêm mỗi lần
update: trong `index.html`, `style.css` và `script.js` giờ được tải bằng
một đoạn JS nhỏ tự gắn thêm dấu thời gian hiện tại vào cuối đường dẫn
(`style.css?t=1234567890`). Vì con số này khác nhau mỗi lần trang được
mở, trình duyệt luôn coi đó là "file mới" và tự tải bản mới nhất — kể cả
với người đã từng vào web trước đó, không ai cần bấm Ctrl+Shift+R nữa,
và bạn cũng không cần nhớ đổi số phiên bản tay như trước.

Đánh đổi nhỏ: trang sẽ luôn tải lại CSS/JS mới ở mỗi lần vào, không tận
dụng được cache trình duyệt — nhưng vì 2 file này khá nhẹ (vài chục KB)
nên gần như không ảnh hưởng gì đến tốc độ tải trang.

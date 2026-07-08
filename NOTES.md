# NOTES.md - Lodha Alibaug React Recreation

## Font Detection

**Primary Fonts (from Google Fonts via source HTML line 31):**
- **Cormorant Garamond** — Used for all headings (h1, h2, h3, etc.), italic serif font
- **Jost** — Used for body text, navigation, buttons, labels, and all sans-serif content

**Font Loading Method:**
Google Fonts `@import` in `src/index.css`:
```
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
```

This matches the exact font stack from the original page. No custom/premium fonts needed — both are free Google Fonts.

---

## Asset URLs - All Successfully Downloaded

All assets saved to `src/assets/lodha-alibaug/`:

| File | Source URL | Status |
|------|-----------|--------|
| Lodha-90-White-Logo-02.svg | themes/lodhanew/images/home/Lodha-90-White-Logo-02.svg | ✅ OK |
| close.svg | themes/lodhanew/images/svg/close.svg | ✅ OK |
| enquire.svg | themes/lodhanew/images/svg/enquire.svg | ✅ OK |
| call.svg | themes/lodhanew/images/svg/call.svg | ✅ OK |
| chat.svg | themes/lodhanew/images/svg/chat.svg | ✅ OK |
| search.svg | themes/lodhanew/images/svg/search.svg | ✅ OK |
| Lodha-90-Grey-Logo.svg | themes/lodhanew/images/home/Lodha-90-Grey-Logo.svg | ✅ OK |
| IG.svg | themes/lodhanew/images/svg/IG.svg | ✅ OK |
| YT.svg | themes/lodhanew/images/svg/YT.svg | ✅ OK |
| LI.svg | themes/lodhanew/images/svg/LI.svg | ✅ OK |
| arrowDown.svg | themes/lodhanew/images/svg/arrowDown.svg | ✅ OK |
| Logo_Lodha Alibaug.svg | sites/default/files/projects/logo/Logo_Lodha%20Alibaug.svg | ✅ OK |
| USP1_Lodha_Alibaug.png | sites/default/files/2025-03/USP1_Lodha_Alibaug.png | ✅ OK |
| USP1_Lodha_Alibaug_Mobile.png | sites/default/files/2025-03/USP1_Lodha_Alibaug_Mobile.png | ✅ OK |
| USP2_Lodha_Alibaug.png | sites/default/files/2025-03/USP2_Lodha_Alibaug.png | ✅ OK |
| USP2_Lodha_Alibaug_Mobile.png | sites/default/files/2025-03/USP2_Lodha_Alibaug_Mobile.png | ✅ OK |
| USP3_Lodha_Alibaug.png | sites/default/files/2025-03/USP3_Lodha_Alibaug.png | ✅ OK |
| USP3_Lodha_Alibaug_Mobile.png | sites/default/files/2025-03/USP3_Lodha_Alibaug_Mobile.png | ✅ OK |
| wfd-1.webp | sites/default/files/wfd/wfd-1.webp | ✅ OK |
| wfd-2.webp | sites/default/files/wfd/wfd-2.webp | ✅ OK |
| wfd-3.webp | sites/default/files/wfd/wfd-3.webp | ✅ OK |
| Townhouses_RERA_QR_code.png | sites/default/files/qrcode/Townhouses_RERA_QR_code.png | ✅ OK |
| Web-Icons.png | sites/default/files/2026-04/Web-Icons.png | ✅ OK |
| favicon-lodha.png | sites/default/files/favicon-lodha.png | ✅ OK |

## Video URLs (Hotlinked - Not Downloaded)

- Desktop: `https://www.lodhagroup.com/sites/default/files/2026-02/Lodha_Alibaug_60s_16x9_1.mp4`
- Mobile: `https://www.lodhagroup.com/sites/default/files/2026-02/Lodha_Alibaug_60s_9x16_1.mp4`

---

## Unavoidable Differences

1. **Header dropdown menu**: The original "Our Projects" has a complex mega-menu dropdown with sub-categories (Icons, Residential, Palava, Commercial). This was simplified to a plain link since the dropdown requires extensive additional CSS and content.

2. **Header Search overlay**: The original has a full search overlay with autocomplete results. Simplified to a basic search link.

3. **Swiper/Slider**: The original uses Swiper.js for the secondary nav and "Finest Developments" section slider. Replaced with static flexbox layout that matches the visual appearance.

4. **AOS animations**: The original uses AOS (Animate on Scroll) library for fade-in animations. These were omitted per the instruction to not add animation libraries.

5. **Footer hidden links**: The full list of 80+ residential/commercial project links is abbreviated in the hidden footer section. Key projects are included.

6. **Form backend**: The enquiry form is UI-only with no Drupal/Salesforce backend integration.

7. **RERA slide-out**: Hidden on mobile as per original behavior.

---

## Tech Stack

- Vite 8.x + React 19.x
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- Google Fonts: Cormorant Garamond + Jost
- No additional libraries

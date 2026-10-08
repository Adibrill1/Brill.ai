# מלאי עבודות AI — מיקומים בדיסק

מסמך טכני למפתח האתר: איפה בדיוק על המחשב נמצאת כל עבודת AI, כדי לשלוף ממנה תוכן (תמונות, וידאו, טקסט) לאתר. כל הנתיבים הם נתיבים מלאים ומוחלטים במחשב (macOS). שמות תיקיות רבים מכילים רווחים או עברית — בטרמינל יש לעטוף אותם במירכאות, למשל:

```
cd "/Users/adibrill/Desktop/Adi/Ai Video /Brill Runway"
```

תיקיית השורש של כל החומר: `/Users/adibrill/Desktop/Adi/`

גודל וכמות קבצים חושבו נכון ל-30.9.2026. בפרויקטי קוד (Next.js וכו') הגודל כולל `node_modules`/`.git`/`.next` — קוד המקור בפועל קטן בהרבה; ראו הערה בסוף כל טבלה כזו.

---

## 1. תמונות — `Ai Pics/`

בסיס: `/Users/adibrill/Desktop/Adi/Ai Pics/`

| תיקייה | נתיב מלא | גודל | קבצים | מה יש בפנים |
| --- | --- | --- | --- | --- |
| Astria | `/Users/adibrill/Desktop/Adi/Ai Pics/Astria` | 409M | 1182 | דיוקנאות AI אישיים למשפחה: תתי-תיקיות `Adi`, `Bro`, `Dad`, `Mook`, `Salon`, `TwitTwit`, `Tzvika`, `digital`, `משׂוטטים` |
| Brill | `/Users/adibrill/Desktop/Adi/Ai Pics/Brill` | 3.6G | 619 | מיתוג "בריל" — חקרי לוגו 3D משיער (Firefly), תת-תיקייה `BRILL PICS` ממוספרת (Midjourney), `Logo`, `tree` |
| Bro | `/Users/adibrill/Desktop/Adi/Ai Pics/Bro` | 11M | 2 | — |
| Comy | `/Users/adibrill/Desktop/Adi/Ai Pics/Comy` | 107M | 2 | — |
| Magic | `/Users/adibrill/Desktop/Adi/Ai Pics/Magic` | 31M | 5 | תת-תיקייה `Gelem` |
| NANO BANANA | `/Users/adibrill/Desktop/Adi/Ai Pics/NANO BANANA` | 405M | 68 | ניסויי תמונה עם Midjourney/Nano-Banana, כולל `midjourney_session_2025-9-6` |
| Record | `/Users/adibrill/Desktop/Adi/Ai Pics/Record` | 26M | 24 | תמונות/וידאו קצרים בסגנון "רשומה" (כדורי פורח, רכבת מיניאטורית וכו') |
| factoryo | `/Users/adibrill/Desktop/Adi/Ai Pics/factoryo` | 8.1M | 4 | אמנות דמיונית — מפעל/מבנה סימטרי מצילום אוויר |
| tree | `/Users/adibrill/Desktop/Adi/Ai Pics/tree` | 17M | 7 | ויזואליזציית נתונים בצורת עץ |
| משוטטים | `/Users/adibrill/Desktop/Adi/Ai Pics/משוטטים` | 51M | 23 | סדרת תמונות רחוב, בתתי-תיקיות ממוספרות `1`–`4` |

**קבצים בודדים בשורש `Ai Pics/` (לא בתוך תיקיית פרויקט) — כדאי לבדוק אם רלוונטיים לאתר:**

| קובץ | נתיב מלא | גודל |
| --- | --- | --- |
| 17292B44-3324-4AFB-B14B-AF6343B47753.jpeg | `/Users/adibrill/Desktop/Adi/Ai Pics/17292B44-3324-4AFB-B14B-AF6343B47753.jpeg` | 464K |
| A_cinematic_...202601082231.jpeg | `/Users/adibrill/Desktop/Adi/Ai Pics/A_cinematic_and_202601082231.jpeg` | 140K |
| A_selfie_picture_2k_202601082251.jpeg | `/Users/adibrill/Desktop/Adi/Ai Pics/A_selfie_picture_2k_202601082251.jpeg` | 2.8M |
| The-Sopranos-Edie-Falco.jpeg | `/Users/adibrill/Desktop/Adi/Ai Pics/The-Sopranos-Edie-Falco.jpeg` | 460K |
| home.jpeg | `/Users/adibrill/Desktop/Adi/Ai Pics/home.jpeg` | 116K |
| lev.png | `/Users/adibrill/Desktop/Adi/Ai Pics/lev.png` | 1.3M |

---

## 2. מוזיקה — `Ai Audio/Suno2026/`

בסיס: `/Users/adibrill/Desktop/Adi/Ai Audio/Suno2026/`

כל תיקייה מכילה: קובץ/י mp3, תת-תיקיית `lyrics/` (טקסט) ותת-תיקיית `artwork/` (תמונת אלבום).

| חודש | תיקייה | נתיב מלא | גודל | קבצים |
| --- | --- | --- | --- | --- |
| 2024 | Early-Experiments | `.../Suno2026/2024__Early-Experiments` | 29M | 19 |
| 2025-04 | Experiments | `.../Suno2026/2025-04__Experiments` | 20M | 13 |
| 2025-08 | Round-Again | `.../Suno2026/2025-08__Round-Again` | 25M | 31 |
| 2025-11 | Coffee-Chameleon | `.../Suno2026/2025-11__Coffee-Chameleon` | 11M | 10 |
| 2025-11 | EcoBuilder-and-Own-Pace | `.../Suno2026/2025-11__EcoBuilder-and-Own-Pace` | 46M | 28 |
| 2025-11 | Language-of-the-Heart | `.../Suno2026/2025-11__Language-of-the-Heart` | 102M | 67 |
| 2025-12 | Gentle-Giant-Echelon | `.../Suno2026/2025-12__Gentle-Giant-Echelon` | 47M | 34 |
| 2026-02 | Let-the-Bug-Reign | `.../Suno2026/2026-02__Let-the-Bug-Reign` | 9.1M | 7 |
| 2026-03 | Birthday-and-Magic | `.../Suno2026/2026-03__Birthday-and-Magic` | 27M | 16 |
| 2026-03 | Sukkot-Hebrew | `.../Suno2026/2026-03__Sukkot-Hebrew` | 54M | 25 |
| 2026-03 | The-Universe-and-I | `.../Suno2026/2026-03__The-Universe-and-I` | 22M | 22 |
| 2026-04 | Factorio | `.../Suno2026/2026-04__Factorio` | 81M | 37 |
| 2026-04 | Give-It-Shape | `.../Suno2026/2026-04__Give-It-Shape` | 34M | 19 |
| 2026-04 | Lullaby-for-Tomorrow | `.../Suno2026/2026-04__Lullaby-for-Tomorrow` | 16M | 10 |
| 2026-05 | Boardroom-Slateclean | `.../Suno2026/2026-05__Boardroom-Slateclean` | 7.3M | 7 |
| 2026-05 | Tennis-on-Delay | `.../Suno2026/2026-05__Tennis-on-Delay` | 9.9M | 40 |
| 2026-06 | Decentralized-Power | `.../Suno2026/2026-06__Decentralized-Power` | 24M | 13 |
| 2026-06 | Love-and-Longing | `.../Suno2026/2026-06__Love-and-Longing` | 116M | 79 |
| 2026-06 | Social-Inference-Inspection | `.../Suno2026/2026-06__Social-Inference-Inspection` | 111M | 85 |
| 2026-06 | Wind-Walker | `.../Suno2026/2026-06__Wind-Walker` | 22M | 16 |
| 2026-07 | City-Was-One-Song | `.../Suno2026/2026-07__City-Was-One-Song` | 58M | 49 |
| 2026-07 | Dream-Syntax-AI | `.../Suno2026/2026-07__Dream-Syntax-AI` | 63M | 64 |
| 2026-07 | Find-Your-Way-Multilingual | `.../Suno2026/2026-07__Find-Your-Way-Multilingual` | 53M | 55 |
| 2026-07 | Paradise-Island-Future-Lounge | `.../Suno2026/2026-07__Paradise-Island-Future-Lounge` | 49M | 37 |
| 2026-07 | Peace-Album | `.../Suno2026/2026-07__Peace-Album` | 334M | 327 |

(השלימו `.../Suno2026/` ב־`/Users/adibrill/Desktop/Adi/Ai Audio/Suno2026/` — קוצר כדי שהטבלה תיכנס.)

---

## 3. סרטונים — `Ai Video/`

בסיס: `/Users/adibrill/Desktop/Adi/Ai Video /` (שימו לב: יש **רווח** אחרי המילה "Video" בשם התיקייה!)

| תיקייה/קובץ | נתיב מלא | גודל | קבצים | מה יש בפנים |
| --- | --- | --- | --- | --- |
| 51 Birthday 1.mp4 | `/Users/adibrill/Desktop/Adi/Ai Video /51 Birthday 1.mp4` | 461M | — | סרטון יום הולדת |
| Adi | `/Users/adibrill/Desktop/Adi/Ai Video /Adi` | 930M | 585 | תתי-תיקיות `Magic`, `Selffie`, `bear` |
| BirdsDay | `/Users/adibrill/Desktop/Adi/Ai Video /BirdsDay` | 233M | 21 | תתי-תיקיות `Mid`, `girls` |
| Bridge | `/Users/adibrill/Desktop/Adi/Ai Video /Bridge` | 451M | 15,556 | תת-תיקייה `motion` — כמות קבצים גדולה, כדאי לבדוק |
| Brill Runway | `/Users/adibrill/Desktop/Adi/Ai Video /Brill Runway` | 1.5G | 159 | אוסף גדול של יצירות Runway למיתוג בריל |
| Bringthemhomenow | `/Users/adibrill/Desktop/Adi/Ai Video /Bringthemhomenow` | 399M | 74 | תתי-תיקיות `midjourney`, `runway` |
| Coffee | `/Users/adibrill/Desktop/Adi/Ai Video /Coffee` | 149M | 4 | — |
| Donkey | `/Users/adibrill/Desktop/Adi/Ai Video /Donkey` | 3.2G | 591 | תתי-תיקיות `kling`, `midjourney` |
| Drinks | `/Users/adibrill/Desktop/Adi/Ai Video /Drinks` | 64M | 18 | — |
| Firefly...housefly...mp4 | `/Users/adibrill/Desktop/Adi/Ai Video /Firefly An over-the-top Hollywood action-comedy cinematic sequence about a tiny housefly trapped ins.mp4` | 4.9M | — | קומדיית אקשן על זבוב |
| Fly | `/Users/adibrill/Desktop/Adi/Ai Video /Fly` | 477M | 63 | תתי-תיקיות `google adi`, `kling1` |
| Football | `/Users/adibrill/Desktop/Adi/Ai Video /Football` | 2.0G | 70 | תתי-תיקיות `endtitle-mockups`, `sound` |
| Gen48 - 5th | `/Users/adibrill/Desktop/Adi/Ai Video /Gen48 - 5th` | 5.7G | 410 | תחרות Gen48 — כולל `Midjourney`, `runway`, `canva.ai`, `Audio`, `Archive` |
| Gen48 - runway | `/Users/adibrill/Desktop/Adi/Ai Video /Gen48 - runway` | 4.4G | 548 | תתי-תיקיות `Sound`, `aya`, `dad`, `eyes`, `midjourny`, `runway` |
| Giant woman | `/Users/adibrill/Desktop/Adi/Ai Video /Giant woman` | 1.1G | 36 | — |
| HELP | `/Users/adibrill/Desktop/Adi/Ai Video /HELP` | 19M | 3 | — |
| Hope - Gen48 - 2024 | `/Users/adibrill/Desktop/Adi/Ai Video /Hope - Gen48 - 2024` | 2.7G | 196 | פרויקט Gen48 2024, תת-תיקייה `Gelem` |
| LTX - אתגר הכל מבינה | `/Users/adibrill/Desktop/Adi/Ai Video /LTX - אתגר הכל מבינה` | 1.1G | 83 | פרויקט "קיר המשאלות" (Wishing wall), LTX Video, VO, reference |
| Logo | `/Users/adibrill/Desktop/Adi/Ai Video /Logo` | 1.0M | 8 | — |
| Subtitles | `/Users/adibrill/Desktop/Adi/Ai Video /Subtitles` | 564M | 67 | כלים לכתוביות: `Ideogram`, `canva`, `capcut`, `Hebrew` |
| Tennis | `/Users/adibrill/Desktop/Adi/Ai Video /Tennis` | 243M | 37 | תת-תיקייה `Sinner` |
| Tests | `/Users/adibrill/Desktop/Adi/Ai Video /Tests` | 93M | 13 | — |
| mr.relative | `/Users/adibrill/Desktop/Adi/Ai Video /mr.relative` | 186M | 15 | — |
| rotate.mp4 | `/Users/adibrill/Desktop/Adi/Ai Video /rotate.mp4` | 352K | — | — |
| סלון | `/Users/adibrill/Desktop/Adi/Ai Video /סלון` | 28M | 2 | — |

---

## 4. אתרים וכלי קוד — `Ai Vibe coding/`

בסיס: `/Users/adibrill/Desktop/Adi/Ai Vibe coding/`

| פרויקט | נתיב מלא | גודל | קבצים | מה יש בפנים |
| --- | --- | --- | --- | --- |
| Airbnb | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Airbnb` | 2.7G | 97,218 | סדרת אתרי נחיתה לדירות: `budapest`, `haifa`, `haifa2`, `ramat-gan`, `home`, `nearby`, `map`, `video`, `about-us-photos`, `brill-studio` (גודל גדול — כולל `node_modules`/`.claude`) |
| Brill Center | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Brill Center` | 156K | 9 | מסמכי תיעוד בלבד (`docs/`) |
| Brill Ops Platform | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Brill Ops Platform` | 2.0G | 24,814 | **אפליקציית Next.js מלאה** לניהול "בית בריל" — יש `src/`, `supabase/`, `tests/`, `public/`; הגודל כולל `node_modules`/`.next`/`.git` |
| Brill Studio | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Brill Studio` | 2.0G | 17,212 | פרויקט נוסף — תתי-תיקיות `Dots`, `Video Pipeline Opus 5.5`, `brill ai studio`, `מקור האמת` (כדאי לבדוק, לא נסקר לעומק) |
| Brill-AR | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Brill-AR` | 112K | 6 | מסירת עיצוב ל-AR (`design_handoff_brill_ar`) |
| Brill-House | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Brill-House` | 658M | 25,843 | **אתר "בית בריל" הראשי** — Next.js, `src/`, `supabase/`; כולל `node_modules`/`.next`/`.git` |
| Brill-House-handoff-backup-2026-08-11 | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Brill-House-handoff-backup-2026-08-11` | 36K | 1 | גיבוי מסירה |
| Brize | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Brize` | 48K | 2 | — |
| Clips - Brill.ai Studio | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Clips - Brill.ai Studio` | 77M | 7 | קליפים/דמו לסטודיו |
| Cursor | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Cursor` | 240M | 3 | — |
| Garnet | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Garnet` | 1.4M | 4 | — |
| Gmarti | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Gmarti` | 104K | 2 | — |
| Mirror | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Mirror` | 54M | 41 | כלי "תמונה לפרומפט" — `IMG to Prompt`, `IMG to Prompt 2`, `23` |
| NotebookLM | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/NotebookLM` | 280M | 2,708 | פייפליין NotebookLM — `character-bible`, `transcripts`, `visual`, `pipeline` |
| OrganodynamicsGelem | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/OrganodynamicsGelem` | 89M | 597 | עולם "Organodynamics" — `BRILL_WORLD_CONSTITUTION`, `organodynamics-main` |
| Pictures2Dropbox | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/Pictures2Dropbox` | 8.0K | 1 | כלי קטן להעברה ל-Dropbox |
| blender-campaign-studio | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/blender-campaign-studio` | 340M | 5,432 | כלי הפקת קמפיינים מבוסס Blender + AI (`agents`, `productions`) |
| **brill.ai** | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/brill.ai` | — | — | **התיקייה הזו — כאן ממוקם המסמך הזה** |
| factorio-run | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/factorio-run` | 820M | 35,150 | הרצת סוכן AI במשחק Factorio |
| github-cleanup | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/github-cleanup` | 13G | 15,842 | גיבויים/ניקוי ריפוזיטוריז — כנראה לא רלוונטי לתוכן אתר |
| livingbookfounding | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/livingbookfounding` | 12K | 1 | פרויקט בשלבים ראשוניים |
| organodynamics | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/organodynamics` | 7.0M | 255 | (ראו גם OrganodynamicsGelem לעיל) |
| נעש | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/נעש` | 6.0M | 9 | — |
| ריכוז סרט Lumagica | `/Users/adibrill/Desktop/Adi/Ai Vibe coding/ריכוז סרט Lumagica` | 3.0G | 2,033 | **פרויקט לומג'יקה** — הסרט "מאחורי האור", כולל `journey/` (עמוד סיפורי עם תמונות אמיתיות), `site/` (מחברת הפקה data-driven), `data/`, `source/` |

**הערה:** ב-Airbnb, Brill Ops Platform, Brill Studio, Brill-House, blender-campaign-studio, factorio-run, github-cleanup ו-organodynamics רוב הגודל/כמות הקבצים הוא `node_modules`, `.git`, `.next`, `venv` וכד' — לא תוכן שרלוונטי לאתר תיק העבודות, אלא קוד המקור עצמו.

---

## 5. פרויקטי דגל — `Ai Work/`

בסיס: `/Users/adibrill/Desktop/Adi/Ai Work/`

| פרויקט | נתיב מלא | גודל | קבצים | מה יש בפנים |
| --- | --- | --- | --- | --- |
| ComicsComy | `/Users/adibrill/Desktop/Adi/Ai Work/ComicsComy` | 3.0G | 231 | קומיקס-לוידאו מלא — תמונות, טייקים (Kling/Runway/Midjourney), קבצי Premiere, תיקיית `sounds/`, תת-פרויקט `comy/` |
| Heart - Osher cohen | `/Users/adibrill/Desktop/Adi/Ai Work/Heart - Osher cohen` | 1.2G | 117 | קליפ מוסיקלי לאמן אושר כהן — עשרות גרסאות וידאו AI של לב, קבצי Premiere |
| Komi | `/Users/adibrill/Desktop/Adi/Ai Work/Komi` | 2.7G | 515 | פוסטרים/סרטונים אישיים מותאמים לעשרות אנשים — תת-תיקייה `Done` עם למעלה מ-35 שמות (Ben, Hen, Noam, Tziporale ועוד), `ComyStory`, `SQST` |
| NEXT | `/Users/adibrill/Desktop/Adi/Ai Work/NEXT` | 27M | 6 | מיתוג "NEXT" — Key Visual |
| aviv.mp4 | `/Users/adibrill/Desktop/Adi/Ai Work/aviv.mp4` | 36M | — | — |
| aviv2.mov | `/Users/adibrill/Desktop/Adi/Ai Work/aviv2.mov` | 23M | — | — |
| aviv3.mov | `/Users/adibrill/Desktop/Adi/Ai Work/aviv3.mov` | 23M | — | — |

---

## המלצות למפתח

**החומר העשיר ביותר לעמוד הבית / תיק העבודות, מוכן לשליפה:**
1. **ריכוז סרט Lumagica** — כבר קיים עמוד סיפורי מלא (`journey/journey.html`) עם 8 תחנות הפקה, תמונות אמיתיות ורשימת "צוות" (אנושי + AI) — הבסיס לפרוטוטייפ שכבר נבנה.
2. **Ai Work/Komi** — כמות גדולה של פוסטרים וסרטוני AI מותאמים אישית, מוכנים כגלריה.
3. **Ai Work/ComicsComy** ו-**Heart - Osher cohen** — פרויקטי וידאו מלאים עם תהליך production מתועד.
4. **Ai Pics/Astria** ו-**Brill** — לגלריית תמונות.
5. **Ai Audio/Suno2026** — 25 שירים מוכנים עם אמנות אלבום, לנגן/פלייליסט באתר.

**לפני שמתחילים לפתח:** בפרויקטי הקוד (Airbnb, Brill Ops Platform, Brill-House, Brill Studio) כבר קיימת תשתית אמיתית — כדאי לבדוק אם עמוד הבית צריך להתחבר אליה או להיבנות בנפרד.

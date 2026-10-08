# Brill.ai

> להמשך עבודה עם סוכן (Codex וכו'): `AGENTS.md` הם הכללים, `docs/HANDOFF.md` הוא המצב הנוכחי.

האתר של Brill.ai: עבודות שנוצרו עם AI. עמוד הבית בנוי סביב הפרויקט **Lumagica תל אביב** ("מאחורי האור"), ומראה את שמונה תחנות ההפקה של הסרט ואת הצוות, אנשים ומודלים, שעבד בכל תחנה.

## מבנה

```
index.html                 עמוד הבית
assets/css/site.css        עיצוב
assets/js/site.js          התנהגות: הרובוטים, גלילת התחנות, הטיזר
assets/img/lumagica/       תמונות מהפרויקט
assets/video/              טיזר מאחורי הקלעים (30 שניות, אנכי)
docs/ai-assets-inventory.md  מלאי כל עבודות ה-AI והמיקום שלהן במחשב
docs/HANDOFF.md            מצב הפרויקט ומה הלאה
scripts/prepare-media.sh   הכנת תמונות, קליפים ואודיו לאתר
scripts/check.mjs          בדיקת תצוגה לפני PR
```

אין שלב build ואין תלויות. זה אתר סטטי: HTML, CSS ו-JavaScript.

## הרצה מקומית

```bash
python3 -m http.server 8000
```

ואז לפתוח http://localhost:8000

## עדכון התחנות והצוות

- **תחנות**: כל תחנה היא `<li class="step">` ב-`index.html`. המאפיין `data-who` קובע אילו רובוטים עובדים בה (מזהים: `brill zaid chatgpt codex claude flow magnific davinci`), ו-`data-caption` הוא הכיתוב שמתחת לתמונה. התמונה של כל תחנה היא ה-`stage-img` עם אותו אינדקס.
- **צוות**: שמות ותפקידים לטולטיפים נמצאים ב-`CREW` שבראש `assets/js/site.js`. הצבעים של כל רובוט מוגדרים ב-`--c-<id>` שב-`site.css`.

## פרסום

הקובץ `.github/workflows/pages.yml` מפרסם את האתר ל-GitHub Pages בכל push ל-`main`. צריך להפעיל פעם אחת: Settings → Pages → Source: **GitHub Actions**.

## מקור התוכן

העובדות והמספרים בעמוד (20 ימים, 1,072 תמונות, 256 סרטונים, 444 פרומפטים, 43 טייקים) נלקחו מיומן ההפקה של הפרויקט (`ריכוז סרט Lumagica/journey/journey.html` במחשב).

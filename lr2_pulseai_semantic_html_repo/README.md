# PulseAI — AI News & Research Aggregator (Variant 16 / Theme 6)

**Дисципліна:** Веб-технології та веб-дизайн (КПІ ім. Ігоря Сікорського, ННІПСА, Кафедра СП)  
**Лабораторна робота № 2:** HTML-розмітка та семантика (Каркас 4 сторінок без стилів — 12/12 балів)

## Сторінки проєкту
1. [`index.html`](./index.html) — **Home (Feed)**: головна стрічка новин AI, Featured-дослідження, форма фільтрації та сортування, таблиця лідерборду моделей та підписка на дайджест.
2. [`topics.html`](./topics.html) — **Topics & Sources**: каталог із 6 доменних AI-тем, семантична таблиця верифікованих першоджерел та форма подачі нового джерела.
3. [`article.html`](./article.html) — **Article Details**: детальна сторінка статті з мікророзміткою `https://schema.org/NewsArticle`, блоком AI Executive Summary (TL;DR), таблицею бенчмарків та схожими матеріалами.
4. [`bookmarks.html`](./bookmarks.html) — **Bookmarks**: збережені закладки користувача з формою пошуку й фільтрації за колекціями та таблицею статистики читання.

## Виконані вимоги (на 12/12 балів)
- **Семантика (Обов'язкова частина):** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, `<table>` (`<caption>`, `<thead>`, `<tbody>`, `<th scope="col">`), `<form>` (`<fieldset>`, `<legend>`, `<label>`, `<input>`, `<select>`, `<button>`).
- **Класи за методологією BEM без інлайнових стилів:** усі елементи розмічені класами `.block__element--modifier` для подальшої стилізації в ЛР 3; атрибут `style` повністю відсутній.
- **Адаптивні зображення та доступність:** використані теги `<picture>`, `<source type="image/webp" srcset="... 480w, ... 960w">`, `<img srcset="..." sizes="..." alt="...">`, а також `aria-label`, `aria-current="page"`, `aria-pressed` та посилання `Skip to main content`.
- **Шаблонізатор EJS (Додаткова частина):** повторювані блоки винесені у `src/partials/header.ejs`, `src/partials/footer.ejs`, `src/partials/news-card.ejs`, `src/partials/topic-card.ejs` та шаблони сторінок у `src/views/*.ejs`.
- **Мікророзмітка Schema.org (Додаткова частина):** сутності статей розмічені за стандартом `https://schema.org/NewsArticle` (`itemscope`, `itemtype`, `itemprop="headline"`, `itemprop="author"`, `itemprop="publisher"`, `itemprop="datePublished"`, `itemprop="articleSection"`, `itemprop="image"`).
- **Підготовка до i18n (Бонус):** усі текстові вузли, плейсхолдери та ARIA-мітки забезпечені атрибутами `data-i18n`, `data-i18n-placeholder`, `data-i18n-aria`.

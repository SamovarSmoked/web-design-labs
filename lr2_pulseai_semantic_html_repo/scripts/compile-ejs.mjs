import fs from 'node:fs';
import path from 'node:path';
import ejs from 'ejs';

const views = ['index', 'topics', 'article', 'bookmarks'];

for (const view of views) {
  const templatePath = path.resolve('src/views', `${view}.ejs`);
  const outputPath = path.resolve(`${view}.html`);
  const templateStr = fs.readFileSync(templatePath, 'utf-8');
  const html = ejs.render(templateStr, {}, { filename: templatePath });
  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`Compiled ${view}.ejs -> ${view}.html`);
}

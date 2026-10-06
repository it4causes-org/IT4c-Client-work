// Derive the artifact copy of the After the Yes page from the OneDrive source.
// Strips the document skeleton (the artifact host adds its own) and makes the
// dark palette respond to an explicit data-theme choice as well as the OS setting.
const fs = require('fs');
const [src, out] = process.argv.slice(2);
let h = fs.readFileSync(src, 'utf8');

h = h.replace(/^<!doctype html>\s*<html[^>]*>\s*<head>\s*/i, '')
     .replace(/<meta charset="utf-8">\s*/i, '')
     .replace(/<meta name="viewport"[^>]*>\s*/i, '')
     .replace(/<\/head>\s*<body>\s*/i, '')
     .replace(/\s*<\/body>\s*<\/html>\s*$/i, '\n');

const m = h.match(/@media \(prefers-color-scheme: dark\)\{\s*:root\{([\s\S]*?)\}\s*\}/);
if (!m) throw new Error('dark palette block not found');
const dark = m[1].trimEnd() + '\n    color-scheme:dark;\n  ';
h = h.replace(m[0],
  '@media (prefers-color-scheme: dark){\n  :root:not([data-theme="light"]){' + dark + '}\n}\n' +
  ':root[data-theme="dark"]{' + dark.replace(/\n {4}/g, '\n  ').replace(/\n  $/, '\n') + '}');

if (/[\u2013\u2014]/.test(h)) throw new Error('dash found');
fs.writeFileSync(out, h);
console.log('ok', h.length);

/* eslint-disable no-undef */
import SNIPS from './snippet-data.js';
import { renderSnips } from './lib/snippets.js';
import { search } from './lib/search.js';

document.getElementById('search-bar').addEventListener('submit', search);

renderSnips(SNIPS);
// hljs.initHighlightingOnLoad();

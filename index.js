/* eslint-disable no-undef */
// import SNIPS from './snippet-data.js';
import { renderSnips, fetchSnippets } from './lib/snippets.js';
import { search } from './lib/search.js';

async function init() {
  document.getElementById('search-bar').addEventListener('submit', search);

  const snippets = await fetchSnippets();
  renderSnips(snippets);
}

init();

// renderSnips(SNIPS);
// hljs.initHighlightingOnLoad();

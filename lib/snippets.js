/* eslint-disable no-undef */
import { Snip } from '../components/Snip.js';

export const highlightSnips = () => {
  const snippets = document.querySelectorAll('pre code');
  snippets.forEach(hljs.highlightBlock);
};

export const renderSnips = snippets => {
  // map over the SNIPS
  // transform that snip into the HTML
  const snippetHTML = snippets.map(Snip);
  const snippetHTMLStrings = snippetHTML.join('');
  // put that HTML right into the #snippets
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTMLStrings;
  highlightSnips();
};

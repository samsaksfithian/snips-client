import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const strMatch = (str, toMatch) => str.toLowerCase().includes(toMatch.toLowerCase());

export const search = event => {
  event.preventDefault();
  const query = event.target['search-text'].value;
  console.log(`searching for '${query}'`);
  const filteredSnips = SNIPS.filter(
    ({ title, description, language, code }) =>
      strMatch(title, query) ||
      strMatch(description, query) ||
      strMatch(language, query) ||
      strMatch(code, query),
  );
  renderSnips(filteredSnips);
  // event.target['search-text'].value = '';
};

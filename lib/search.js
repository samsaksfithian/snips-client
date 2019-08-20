// import SNIPS from '../snippet-data.js';
import { renderSnips, fetchSnippets } from './snippets.js';

const strMatch = (str, toMatch) => str.toLowerCase().includes(toMatch.toLowerCase());

export const search = async event => {
  event.preventDefault();
  const query = event.target['search-text'].value;
  // console.log(`searching for '${query}'`);

  // TODO: Make an API call.
  const snips = await fetchSnippets();

  // TODO: Get API data

  // TODO: Use API data instead of SNIPS to filter and display
  // filter out the snips by said properties.
  const filteredSnips = snips.filter(
    ({ title, description, language, code }) =>
      strMatch(title, query) ||
      strMatch(description, query) ||
      strMatch(language, query) ||
      strMatch(code, query),
  );
  renderSnips(filteredSnips);
  // event.target['search-text'].value = '';
};

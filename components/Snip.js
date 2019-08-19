/* eslint-disable no-undef */
/**
 * Takes in a snippet object and returns a corresponding single snippet HTML component
 * @param {Object} snippet the snippet object
 * @param {string} snippet.title
 * @param {string} snippet.description
 * @param {string} snippet.language
 * @param {string} snippet.code
 * @returns {string} HTML to render an individual snippet
 */
export const Snip = ({ title, description, language, code }) => /* html */ `
      <div class="snip">
        <div class="text">
          <h2>${title}</h2>
          <h5>${language}</h5>
          <p>${description}</p>
        </div>
        <pre><code class="${language}">${he.encode(code)}</code></pre>
      </div>
    `;

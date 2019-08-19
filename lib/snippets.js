/* eslint-disable no-undef */
export const renderSnips = snippets => {
  // map over the SNIPS
  // transform that snip into the HTML
  const snippetHTML = snippets.map(
    snippet => /* html */ `
      <div class="snip">
        <div class="text">
          <h2>${snippet.title}</h2>
          <p>${snippet.description}</p>
        </div>
        <pre><code class="${snippet.language}">${he.encode(snippet.code)}</code></pre>
      </div>
    `,
  );
  const snippetHTMLStrings = snippetHTML.join('');
  // put that HTML right into the #snippets
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTMLStrings;
};

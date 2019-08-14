const snippets = document.getElementById('snippets');

setTimeout(() => {
  snippets.style.backgroundColor = 'orange';
}, 1000);

// setTimeout(() => {
//   snippets.innerHTML = `<p>Welcome to the snippets page</p>`;
// }, 2000);

setInterval(() => {
  // create a new element
  const button = document.createElement('button');
  button.innerText = `Answer Survey`;
  button.addEventListener('click', survey);
  button.addEventListener('mouseenter', () => aggressiveButton(button));
  // add it to the body
  document.body.append(button);
}, 2000);

function survey() {
  const response = prompt('How are you enjoying your time?');
  // does something with response
  console.log(response);
}

function aggressiveButton(button) {
  button.innerText = `${button.innerText.toUpperCase()} NOW`;
}

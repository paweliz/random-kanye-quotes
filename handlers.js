import { quoteButtonSpan, quoteHolder, loader } from './elements.js';
import buttonText from './buttonText.js';
import { fetchQuote } from './lib.js';
import { randomItemFromArray } from './utils.js';

export async function handleClick() {
  const { quote } = await fetchQuote(loader);
  quoteHolder.innerHTML = `<i>"${quote}"</i>`;
  quoteButtonSpan.textContent = randomItemFromArray(
    buttonText,
    quoteButtonSpan.textContent
  );
}

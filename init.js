import { quoteButton } from './elements.js';
import { handleClick } from './handlers.js';

export function init() {
  quoteButton.addEventListener('click', handleClick);
}

import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';

let deck = new Reveal({
	plugins: [ Markdown, RevealHighlight ]
})
deck.initialize();
document.addEventListener('DOMContentLoaded', () => {
	

})

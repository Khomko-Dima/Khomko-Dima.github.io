import $ from "jquery";
window.jQuery = $;
window.$ = $; // import jQuery module (npm i -D jquery)
// import slick from "./utils/slick.min";

export default function jQueryScripts() {
	$("input[name='phone']" ).mask("+375 (99) 999-99-99");

}

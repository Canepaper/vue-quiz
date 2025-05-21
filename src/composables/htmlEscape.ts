// composables/useHtmlDecoder.js
export function useHtmlDecoder() {
	const decodeHtml = (html) => {
	  const txt = document.createElement("textarea");
	  txt.innerHTML = html;
	  return txt.value;
	};
	return { decodeHtml };
  }
  
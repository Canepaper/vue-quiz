export function useHtmlUnescape() {
	const unescapeHtml = (html: string): string => {
	  const parser = new DOMParser();
	  const doc = parser.parseFromString(html, 'text/html');
	  return doc.documentElement.textContent || '';
	};
  
	return {
	  unescapeHtml,
	};
}
  
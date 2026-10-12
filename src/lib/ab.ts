// Simpele A/B-test. De variant wordt in de <head> gekozen (zie BaseLayout),
// op <html data-ab="a|b"> gezet en met elke sollicitatie meegestuurd.

export const AB_KEY = 'kp_ab_hero';

/** Inline script voor in de <head>: kiest/onthoudt de variant vóór het tekenen (geen flikkering). */
export const abHeadScript = `(function(){var k='${AB_KEY}',v;try{v=localStorage.getItem(k)}catch(e){}if(v!=='a'&&v!=='b'){v=Math.random()<.5?'a':'b';try{localStorage.setItem(k,v)}catch(e){}}document.documentElement.dataset.ab=v})();`;

export function getVariant(): 'a' | 'b' {
  return document.documentElement.dataset.ab === 'b' ? 'b' : 'a';
}

/** Verwijdert de niet-actieve variant uit de DOM (vóór animaties/SplitText). */
export function applyVariant(root: ParentNode = document) {
  const active = getVariant();
  root.querySelectorAll<HTMLElement>('[data-variant]').forEach((el) => {
    if (el.dataset.variant !== active) el.remove();
  });
}

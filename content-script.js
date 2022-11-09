
const l = document.createElement('link');
Object.assign(l, {
  href: chrome.runtime.getURL('overload.css'),
  rel: 'stylesheet',
});

document.head.append(l);

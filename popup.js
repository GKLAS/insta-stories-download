document.addEventListener('DOMContentLoaded', () => {
  var src = 'window.open(document.getElementsByTagName("source")[0].src);'
  chrome.tabs.executeScript({
    code: src
  });
});

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("html/index-chrome.html", {
    'outerBounds': {
      'width': 1024,
      'height': 786
    }
  });
});
//replaceUrl.js
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var matchResult = details.url.match("//([^\.]+)\.googleapis\.com");
    if (matchResult) {
      var url = details.url.replace(
      matchResult[1] + ".googleapis.com",
      matchResult[1] + ".lug.ustc.edu.cn");
      return { redirectUrl: url };
    }
  },
  { 
    urls: [
      "*://ajax.googleapis.com/*",
      "*://fonts.googleapis.com/*"
    ]
  },
  ["blocking"]
);
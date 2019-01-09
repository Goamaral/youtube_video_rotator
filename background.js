// Permissions: webNavigation ||  onCompleted.addEventListener((details) => { details.url; details.tabId; })
// Permissions: tabs || chrome.tabs.executeScript(integer tabId, object details, function callback)
// Permissions: tabs || chrome.tabs.onActivated.addListener((details) => { tabId, windowId })
// chrome.pageAction.onClicked.addListener(function callback)

/*
var rule1 = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
            css: ["input[type='password']"]
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      };
*/

// https://stackoverflow.com/questions/6497548/chrome-extension-make-it-run-every-page-load
// http://www.krasimirtsonev.com/blog/article/Chrome-Extension-run-JavaScript-in-the-context-of-the-current-page
// https://developer.chrome.com/extensions/content_scripts
// https://medium.com/@vanessajimenez_85032/chrome-extensions-content-scripts-vs-background-scripts-7bbd01f9dbe6


chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'rotator.js'
	});
});
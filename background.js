
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "redirect") {
            console.log('url: '+ request.url);
            chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
                const url=request.url.replace('twitter.com','nitter.nixnet.services');
                chrome.tabs.update(tab.id, {url: url});
            });
        }
    }
);

let isOff = true;
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ isOff });
    // console.log('Default background color set to %cgreen', `color: ${color}`);
})
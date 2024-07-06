// background.js
console.log("in background");

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: "https://www.paypal.com/donate/?business=4L6MDRQ5T7E3C&no_recurring=0&item_name=Please+donate+for+a+loaf+of+bread+on+the+table.&currency_code=CAD"
  })
});

function go_freemium(tab) {
  let redirectUrl = new URL('https://freedium.cfd/');
  redirectUrl += `${encodeURIComponent(tab.url)}`;
  // console.log(redirectUrl);
  chrome.tabs.update(tab.id, { url: redirectUrl.toString() });

}

chrome.action.onClicked.addListener((tab) => {
  let redirectUrl = new URL('https://freedium.cfd/');
  redirectUrl += `${encodeURIComponent(tab.url)}`;
  // console.log(redirectUrl);
  chrome.tabs.update(tab.id, { url: redirectUrl.toString() });
});

chrome.webNavigation.onCommitted.addListener((details) => {
  // Check if the URL matches 'medium.com'
  const url = new URL(details.url);
  if ((url.protocol === 'http:' || url.protocol === 'https:') && url.host === 'medium.com') {
    console.log(url.host);
    // if (details.url.includes('medium.com')) {
    // Retrieve the tab information
    chrome.tabs.get(details.tabId, (tab) => {
      // Construct the redirect URL
      let redirectUrl = new URL('https://freedium.cfd/');
      redirectUrl += `${encodeURIComponent(tab.url)}`;

      // Update the tab with the new URL
      chrome.tabs.update(tab.id, { url: redirectUrl.toString() });
    });
  }
}, {
  url: [{ urlContains: 'medium.com' }]
});

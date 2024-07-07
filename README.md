# Chrome Extension: URL Redirector

## Description
This Chrome extension redirects specific URLs to another destination based on predefined conditions.

## Features
- Redirects users from specific URLs to a designated website.
- Automatically redirects users when certain conditions (like visiting 'medium.com') are met.

## Installation
1. Clone the repository or download the code.
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode**.
4. Click on **Load unpacked** and select the directory containing the extension files.

## Usage
- Once installed, the extension will redirect URLs matching specific criteria.
- Clicking the extension icon triggers redirection based on the current tab's URL.

## Configuration
- Modify the URLs in `background.js` to adjust redirection destinations.
- Customize conditions in `chrome.webNavigation.onCommitted.addListener` to change when redirection occurs.

## Compatibility
- Compatible with Chrome browsers supporting manifest version 3.

## Issues
- Currently, no known issues.

## Contributing
- Contributions are welcome. Fork the repository and submit a pull request.

## Donate
If you appreciate this extension and want to support the development, you can make a donation via PayPal:

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/donate/?business=4L6MDRQ5T7E3C&no_recurring=0&item_name=Please+donate+for+a+loaf+of+bread+on+the+table.&currency_code=CAD)

## License
- This project is licensed under the MIT License - see the LICENSE file for details.

---

Let me know if you need any more adjustments or additions!
## Unfortunately, I can't host on Google Extension (as they demand Developer Fee)

### Note:
Actual paywall override work is done on https://freedium.cfd/, and I dont own it's code, credits to author for that. Cheers.

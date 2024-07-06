// Create a PayPal donation link element
const paypalLink = document.createElement('a');
paypalLink.href = 'https://www.paypal.com/donate/?business=4L6MDRQ5T7E3C&no_recurring=0&item_name=Please+donate+for+a+loaf+of+bread+on+the+table.&currency_code=CAD';
paypalLink.textContent = 'Donate via PayPal';
paypalLink.style.position = 'fixed';
paypalLink.style.bottom = '10px';
paypalLink.style.right = '10px';
paypalLink.style.backgroundColor = '#0070ba';
paypalLink.style.color = 'white';
paypalLink.style.padding = '10px';
paypalLink.style.borderRadius = '5px';
paypalLink.style.textDecoration = 'none';
paypalLink.style.zIndex = '1000';
paypalLink.style.animation = 'moveUpDown 5s infinite alternate, rainbowColor 10s infinite';

// Create a QR code container element
const qrContainer = document.createElement('div');
qrContainer.style.position = 'fixed';
qrContainer.style.bottom = '80px';
qrContainer.style.right = '10px';
qrContainer.style.padding = '10px';
qrContainer.style.backgroundColor = '#fff';
qrContainer.style.border = '1px solid #0070ba';
qrContainer.style.borderRadius = '5px';
qrContainer.style.zIndex = '1000';

// Append the QR code container to the body
document.body.appendChild(qrContainer);

// Generate the QR code
new QRCode(qrContainer, {
  text: 'https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID',
  width: 128,
  height: 128
});

// Define keyframes for the vertical movement
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
  @keyframes moveUpDown {
    from { bottom: 10px; }
    to { bottom: 50px; }
  }
  
  @keyframes rainbowColor {
    0% { background-color: #ff0000; }
    14% { background-color: #ff7f00; }
    28% { background-color: #ffff00; }
    42% { background-color: #00ff00; }
    57% { background-color: #0000ff; }
    71% { background-color: #4b0082; }
    85% { background-color: #8b00ff; }
    100% { background-color: #ff0000; }
  }
`;
document.head.appendChild(styleSheet);

// Append the PayPal donation link to the body
document.body.appendChild(paypalLink);

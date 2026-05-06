document.addEventListener("DOMContentLoaded", () => {
    // Generate vCard data (v3.0 format for maximum compatibility)
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Lazo;Andrew;;;
FN:Andrew Lazo
TITLE:Technical Support Engineer | Event Coordinator | Digital Media Specialist
ORG:ARL LLC
TEL;TYPE=CELL:(510) 621-3091
EMAIL:lazo99@gmail.com
ADR;TYPE=HOME:;;San Francisco Bay Area;CA;;;USA
URL:https://lazo99.github.io
END:VCARD`;

    // Initialize QR Code
    const qrcodeContainer = document.getElementById("qrcode");
    
    // Create the QR Code
    new QRCode(qrcodeContainer, {
        text: vcard,
        width: 100,
        height: 100,
        colorDark : "#0f172a", // Slate 900
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.M
    });
});

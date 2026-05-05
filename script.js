document.addEventListener("DOMContentLoaded", () => {
    // Generate vCard data
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Lazo;Andrew;;;
FN:Andrew Lazo
TEL;TYPE=CELL:5106213091
EMAIL:lazo99@gmail.com
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
